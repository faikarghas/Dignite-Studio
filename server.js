const express       = require('express');
const next          = require('next');
const compression   = require('compression')
const cookieParser = require('cookie-parser');
const enforce = require('express-sslify');
const spdy = require('spdy');
const fs = require('fs');

require('dotenv').config()
const port      = process.env.PORT || 3012;
const dev       = process.env.NODE_ENV !== 'production';
const app       = next({dev});
const handle    = app.getRequestHandler();


// Spdy Setup
const spdyOptions = {
    key: fs.readFileSync( 'dignitekey.key' ),
    cert: fs.readFileSync( 'www_dignitestudio_com.pem' )
}

app.prepare()
.then(()=>{
    const server = express()
    server.use(compression());
    server.use(cookieParser());
    if( process.env.NODE_ENV === 'production' ) server.use(enforce.HTTPS({ trustProtoHeader: true }))


    server.get('*', (req, res) => {
        return handle(req, res)
    })

    // server.listen(port, err =>{
    //     if (err) throw err
    //     console.log(`> Ready on ${port}`);
    // })
    spdy
      .createServer(spdyOptions, server)
      .listen(3103, err => {
        if (err) throw err
      })

})
.catch(ex=>{
    console.error(ex.stack);
    process.exit(1)
})