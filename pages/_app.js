import App, { Container } from 'next/app';
import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress'


// NProgress
Router.events.on('routeChangeStart', url => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())



class MyApp extends App {

    // handler refresh back button history
    componentDidMount() {
        Router.beforePopState(({as}) => {
          location.href = as;
        });
    }
    render() {
        const { Component, pageProps } = this.props
        return (
                <Component {...pageProps} />
        )
    }
}

export default MyApp
