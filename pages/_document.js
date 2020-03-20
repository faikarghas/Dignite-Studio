import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
      }
    render() {
        return (
            <Html lang="id">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />

                    {/* OPEN GRAP */}
                    <meta name="keywords" content="dignite,dignite.studio,dignite studio,dignitestudio,Agensi digital,Website bisnis,Desain website,Aplikasi android,Aplikasi IOS,Website e-commerce,Website bisnis,Jasa pembuatan website,Jasa desain website,Buku tahunan sekolah,jasa desain grafis,Agensi digital jakarta,jasa bikin aplikasi" />
                    <meta name="author" content="Dignite Studio"/>
                    <meta name="copyright" content="Dignite Studio" />
                    <meta name="creator" content="Dignite Studio" /> 
                    {/* favicon */}
                    {/* <link rel="icon" href="../favicon.ico" type="image/x-icon"></link> */}
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
                                "url": "https://www.dignite.studio",
                                "contactPoint": [
                                { "@type": "ContactPoint",
                                    "telephone" : "+62 813 1610 0044",
                                    "contactType": "customer service"
                                }
                                ]
                            }
                        ) }}
                    />;

                    <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '2598475360398516');
                        fbq('track', 'PageView');` }}
                    />
                    <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none"
                    src="https://www.facebook.com/tr?id=2598475360398516&ev=PageView&noscript=1"` }}
                    />
                </body>
            </Html>
        )
    }
}


