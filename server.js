const express       = require('express');
const next          = require('next');
const compression   = require('compression')
const cookieParser = require('cookie-parser');
const LRUCache = require('lru-cache');

// const enforce = require('express-sslify');

require('dotenv').config()
const port      = process.env.PORT || 3013;
const dev       = process.env.NODE_ENV !== 'production';
const app       = next({dev});
const handle    = app.getRequestHandler();

const ssrCache = new LRUCache({
    max: 100 * 1024 * 1024, /* cache size will be 100 MB using `return n.length` as length() function */
    length: function (n, key) {
        return n.length
    },
    maxAge: 1000 * 60 * 60 * 24 * 30
});


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
        const actualPage = '/blogCategoryDetail'
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
    server.get('/blog/:slug', (req, res) => {
        const actualPage = '/blogDetail'
        const queryParams = { slug: req.params.slug }
        return app.render( req, res, actualPage, queryParams )
    })

    server.get('/sitemap.xml', (req, res) => res.status(200).sendFile('sitemap.xml', sitemapOptions));
    server.get('/robots.txt', (req, res) => res.status(200).sendFile('robots.txt', robotsOptions));

    server.get('/_next/*', (req, res) => {
        /* serving _next static content using next.js handler */
        handle(req, res);
    });


    server.get('*', (req, res) => {
        // return handle(req, res)
        return renderAndCache(req, res)
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

function getCacheKey(req) {
    return `${req.path}`
}

async function renderAndCache(req, res) {
    const key = getCacheKey(req);

    // If we have a page in the cache, let's serve it
    if (ssrCache.has(key)) {
        //console.log(`serving from cache ${key}`);
        res.setHeader('x-cache', 'HIT');
        res.send(ssrCache.get(key));
        return
    }

    try {
        //console.log(`key ${key} not found, rendering`);
        // If not let's render the page into HTML
        const html = await app.renderToHTML(req, res, req.path, req.query);

        // Something is wrong with the request, let's skip the cache
        if (res.statusCode !== 200) {
            res.send(html);
            return
        }

        // Let's cache this page
        ssrCache.set(key, html);

        res.setHeader('x-cache', 'MISS');
        res.send(html)
    } catch (err) {
        app.renderError(err, req, res, req.path, req.query)
    }
}