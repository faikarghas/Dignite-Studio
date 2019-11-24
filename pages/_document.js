import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps (ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html lang="id">
                <Head>
                    {/* <meta charSet="UTF-8" /> */}
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

                    {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" /> */}
                    {/* OPEN GRAP */}
                    <meta name="keywords" content="dignite,dignite studio, dignitestudio,Agensi digital, Website bisnis, Desain website,Aplikasi android, Aplikasi IOS, Website e-commerce, Website bisnis, Jasa pembuatan website, Jasa desain website, Buku tahunan sekolah, jasa desain grafis, Agensi digital jakarta, jasa bikin aplikasi" />
                    <meta name="author" content="Dignite Studio"/>
                    <meta name="copyright" content="Dignite Studio" />
                    <meta name="creator" content="Dignite Studio" /> 
                    {/* favicon */}
                    <link rel="icon" href="../static/favicon.ico" type="image/x-icon"></link>
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
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
                </body>
            </Html>
        )
    }
}


