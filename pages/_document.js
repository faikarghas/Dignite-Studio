import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps (ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />

                    {/* OPEN GRAP */}
                    <meta name="description" content="Dignite Studio crafts experiences for your digital needs."/>
                    <meta name="og:description" content="Dignite Studio crafts experiences for your digital needs."/>
                    <meta name="keywords" content="dignite,dignite studio, dignitestudio, website, digital" />
                    <meta name="author" content="DIGNITE STUDIO"/>
                    <meta name="copyright" content="DIGNITE STUDIO" />
                    <meta name="creator" content="DIGNITE STUDIO" /> 
                    {/* favicon */}
                    <link rel="shortcut icon" href="../static/image/logofavicon.ico" type="image/x-icon"/>
                    <link rel="icon" href="../static/favicon.ico" type="image/x-icon"></link>
                    {/* bootstrap */}
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                    />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.0/css/all.css" integrity="sha384-Mmxa0mLqhmOeaE8vgOSbKacftZcsNYDjQzuCOm6D02luYSzBG8vpaOykv9lFQ51Y" crossOrigin="anonymous" />
                    {/* slider slick */}
                    <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                    {/* canonical */}
                    <link rel="canonical" href="https://www.dignitestudio.com" />
                    {/* Import CSS for nprogress */}
                    <link rel='stylesheet' type='text/css' href='https://unpkg.com/nprogress@0.2.0/nprogress.css' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "url": "http://www.dignitestudio.com",
                            "contactPoint": [
                              { "@type": "ContactPoint",
                                "telephone" : "+62 813 1610 0044",
                                "contactType": "customer service"
                              }
                            ]
                        }
                    ) }}
                />;
                {/* <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/SplitText.min.js?r=28"></script> */}
            </html>
        )
    }
}


