import React from 'react'
import Error from 'next/error'
// import { getDisplayName } from '../node_modules/next/dist/server/lib/utils'
import { isLocale } from '../translations/types'
import { LocaleProvider } from '../context/LocaleContext'

export default (WrappedPage) => {
  const WithLocale = ({ locale, ...pageProps }) => {
    if (!locale) {
      return <Error statusCode={404} />
    }
    return (
      <LocaleProvider lang={locale}>
        <WrappedPage {...pageProps} />
      </LocaleProvider>
    )
  }

  WithLocale.getInitialProps = async ctx => {
    let pageProps = {}
    if (WrappedPage.getInitialProps) {
      pageProps = await WrappedPage.getInitialProps(ctx)
    }
    // cek jika ctx.query bukan string dan ctx.query false karena tidak ada di config
    if (typeof ctx.query.langs !== 'string' || !isLocale(ctx.query.langs)) {
      return { ...pageProps, locale: undefined }
    }
    return { ...pageProps, locale: ctx.query.langs }
  }

  // WithLocale.displayName = `withLang(${getDisplayName(WrappedPage)})`

  return WithLocale
}