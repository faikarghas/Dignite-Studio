import App, { Container } from 'next/app';
import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress'
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';

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
        const { Component, pageProps, reduxStore } = this.props
        return (
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        )
    }
}

export default withReduxStore(MyApp)
