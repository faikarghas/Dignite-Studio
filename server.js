const express       = require('express');
const next          = require('next');
const compression   = require('compression')
const cookieParser = require('cookie-parser');
const enforce = require('express-sslify');
const spdy = require('spdy');
const fs = require('fs');
const os = require('os')

require('dotenv').config()
const port      = process.env.PORT || 3013;
const dev       = process.env.NODE_ENV !== 'production';
const app       = next({dev});
const handle    = app.getRequestHandler();


app.prepare()
.then(()=>{
    const server = express()
    server.use(compression());
    server.use(cookieParser());
    if( process.env.NODE_ENV === 'production' ) server.use(enforce.HTTPS({ trustProtoHeader: true }))

    server.get('/blog/page/:page', (req, res) => {
        const actualPage = '/blogPage'
        const queryParams = { page: req.params.page }
        app.render(req, res, actualPage, queryParams)
    })

    server.get('/blog/announcement/page/:page', (req, res) => {
        const actualPage = '/blogCategoryPage'
        const queryParams = { page: req.params.page, category: 'announcement' }
        app.render(req, res, actualPage, queryParams)
    })
    server.get('/blog/business/page/:page', (req, res) => {
        const actualPage = '/blogCategoryPage'
        const queryParams = { page: req.params.page, category: 'business' }
        app.render(req, res, actualPage, queryParams)
    })
    server.get('/blog/design/page/:page', (req, res) => {
        const actualPage = '/blogCategoryPage'
        const queryParams = { page: req.params.page, category: 'design' }
        app.render(req, res, actualPage, queryParams)
    })
    server.get('/blog/tech/page/:page', (req, res) => {
        const actualPage = '/blogCategoryPage'
        const queryParams = { page: req.params.page, category: 'tech' }
        app.render(req, res, actualPage, queryParams)
    })

    server.get('/blog/:category/:slug', (req, res) => {
        const actualPage = '/blogCategoryDetail'
        const queryParams = { slug: req.params.slug, category: req.params.category }
        app.render(req, res, actualPage, queryParams)
    })
    server.get('/blog/:category/:slug', (req, res) => {
        const actualPage = '/blogCategoryDetail'
        const queryParams = { slug: req.params.slug, category: req.params.category }
        app.render(req, res, actualPage, queryParams)
    })
    server.get('/blog/:category/:slug', (req, res) => {
        const actualPage = '/blogCategoryDetail'
        const queryParams = { slug: req.params.slug, category: req.params.category }
        app.render(req, res, actualPage, queryParams)
    })
    server.get('/blog/:category/:slug', (req, res) => {
        const actualPage = '/blogCategoryDetail'
        const queryParams = { slug: req.params.slug, category: req.params.category }
        app.render(req, res, actualPage, queryParams)
    })

    server.get('/blog/business', (req, res) => {
        const actualPage = '/blogCategory'
        const queryParams = { category: 'business' }
        return app.render(req, res, actualPage,queryParams)
    })
    server.get('/blog/tech', (req, res) => {
        const actualPage = '/blogCategory'
        const queryParams = { category: 'tech' }
        return app.render(req, res, actualPage,queryParams)
    })
    server.get('/blog/design', (req, res) => {
        const actualPage = '/blogCategory'
        const queryParams = { category: 'design' }
        return app.render(req, res, actualPage,queryParams)
    })
    server.get('/blog/announcement', (req, res) => {
        const actualPage = '/blogCategory'
        const queryParams = { category: 'announcement' }
        return app.render(req, res, actualPage,queryParams)
    })

    server.get('/blog/:slug', (req, res) => {
        const actualPage = '/blogDetail'
        const queryParams = { slug: req.params.slug }
        app.render(req, res, actualPage, queryParams)
    })


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