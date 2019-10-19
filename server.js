const express       = require('express');
const next          = require('next');
const compression   = require('compression')
const cookieParser = require('cookie-parser');
// const enforce = require('express-sslify');

require('dotenv').config()
const port      = process.env.PORT || 3013;
const dev       = process.env.NODE_ENV !== 'production';
const app       = next({dev});
const handle    = app.getRequestHandler();



const sitemapOptions = {
    root: __dirname + '/static/sitemap/',
    headers: {
        'Content-Type': 'text/xml;charset=UTF-8'
    }
};

const robotsOptions = {
    root: __dirname + '/static/robots/',
    headers: {
        'Content-Type': 'text/plain;charset=UTF-8'
    }
};

const faviconOptions = {
    root: __dirname + '/static/',
    headers: {
        'Content-Type': 'image/x-icon'
    }
};

app.prepare()
.then(()=>{
    const server = express()
    server.use(compression());
    server.use(cookieParser());
    // if( process.env.NODE_ENV === 'production' ) server.use(enforce.HTTPS({ trustProtoHeader: true }))

    server.get('/blog/page/:page', (req, res) => {
        const actualPage = '/blogPage'
        const queryParams = { page: req.params.page }
        return app.render( req, res, actualPage, queryParams )
    })

    server.get('/blog/announcement/page/:page', (req, res) => {
        const actualPage = '/blogCategoryPage'
        const queryParams = { page: req.params.page, category: 'announcement' }
        return app.render( req, res, actualPage, queryParams )
    })
    server.get('/blog/business/page/:page', (req, res) => {
        const actualPage = '/blogCategoryPage'
        const queryParams = { page: req.params.page, category: 'business' }
        return app.render( req, res, actualPage, queryParams )
    })
    server.get('/blog/design/page/:page', (req, res) => {
        const actualPage = '/blogCategoryPage'
        const queryParams = { page: req.params.page, category: 'design' }
        return app.render(req, res, actualPage, queryParams )
    })

    server.get('/blog/:category/:slug', (req, res) => {
        const actualPage = '/blogDetail'
        const queryParams = { slug: req.params.slug, category: req.params.category }
        return app.render( req, res, actualPage, queryParams )
    })

    server.get('/blog/business', (req, res) => {
        const actualPage = '/blogCategory'
        const queryParams = { category: 'business' }
        return app.render( req, res, actualPage, queryParams )
    })
    server.get('/blog/design', (req, res) => {
        const actualPage = '/blogCategory'
        const queryParams = { category: 'design' }
        return app.render( req, res, actualPage, queryParams )
    })
    server.get('/blog/announcement', (req, res) => {
        const actualPage = '/blogCategory'
        const queryParams = { category: 'announcement' }
        return app.render( req, res, actualPage, queryParams )
    })


    server.get('/sitemap.xml', (req, res) => res.status(200).sendFile('sitemap.xml', sitemapOptions));
    server.get('/robots.txt', (req, res) => res.status(200).sendFile('robots.txt', robotsOptions));
    server.get('/favicon.ico', (req, res) => res.status(200).sendFile('favicon.ico',faviconOptions));


    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err =>{
        if (err) throw err
        console.log(`> Ready on ${port}`);
    })
})
.catch(ex=>{
    console.error(ex.stack);
    process.exit(1)
})
