const express       = require('express');
const next          = require('next');
const compression   = require('compression')
const cookieParser = require('cookie-parser');
const cacheableResponse = require('cacheable-response')

// const enforce = require('express-sslify');

require('dotenv').config()
const port      = process.env.PORT || 3013;
const dev       = process.env.NODE_ENV !== 'production';
const app       = next({dev});
const handle    = app.getRequestHandler();

const ssrCache = cacheableResponse({
    ttl: 1000 * 60 * 60, // 1hour
    get: async ({ req, res, pagePath, queryParams }) => ({
      data: await app.renderToHTML(req, res, pagePath, queryParams)
    }),
    send: ({ data, res }) => res.send(data)
})

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

app.prepare()
.then(()=>{
    const server = express()
    server.use(compression());
    server.use(cookieParser());
    // if( process.env.NODE_ENV === 'production' ) server.use(enforce.HTTPS({ trustProtoHeader: true }))

    server.get('/', (req, res) => ssrCache({ req, res, pagePath: '/' }))

    server.get('/blog/page/:page', (req, res) => {
        const actualPage = '/blogPage'
        const queryParams = { page: req.params.page }
        return ssrCache({ req, res, actualPage, queryParams })
    })

    server.get('/blog/announcement/page/:page', (req, res) => {
        const actualPage = '/blogCategoryPage'
        const queryParams = { page: req.params.page, category: 'announcement' }
        return ssrCache({ req, res, actualPage, queryParams })
    })
    server.get('/blog/business/page/:page', (req, res) => {
        const actualPage = '/blogCategoryPage'
        const queryParams = { page: req.params.page, category: 'business' }
        return ssrCache({ req, res, actualPage, queryParams })
    })
    server.get('/blog/design/page/:page', (req, res) => {
        const actualPage = '/blogCategoryPage'
        const queryParams = { page: req.params.page, category: 'design' }
        return ssrCache({ req, res, actualPage, queryParams })
    })

    server.get('/blog/:category/:slug', (req, res) => {
        const actualPage = '/blogCategoryDetail'
        const queryParams = { slug: req.params.slug, category: req.params.category }
        return ssrCache({ req, res, actualPage, queryParams })
    })

    server.get('/blog/business', (req, res) => {
        const actualPage = '/blogCategory'
        const queryParams = { category: 'business' }
        return ssrCache({ req, res, actualPage, queryParams })
    })
    server.get('/blog/design', (req, res) => {
        const actualPage = '/blogCategory'
        const queryParams = { category: 'design' }
        return ssrCache({ req, res, actualPage, queryParams })
    })
    server.get('/blog/announcement', (req, res) => {
        const actualPage = '/blogCategory'
        const queryParams = { category: 'announcement' }
        return ssrCache({ req, res, actualPage, queryParams })
    })
    server.get('/blog/:slug', (req, res) => {
        const actualPage = '/blogDetail'
        const queryParams = { slug: req.params.slug }
        return ssrCache({ req, res, actualPage, queryParams })
    })

    server.get('/sitemap.xml', (req, res) => res.status(200).sendFile('sitemap.xml', sitemapOptions));
    server.get('/robots.txt', (req, res) => res.status(200).sendFile('robots.txt', robotsOptions));

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

