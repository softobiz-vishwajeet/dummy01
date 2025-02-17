import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <meta property="og:type" content="page" /> */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://hielifecrm.vercel.app/" />
        <meta property="og:image" content="https://oroton.com/path-to-your-1200x630-image.jpg" />
        <meta property="og:image:secure_url" content="https://oroton.com/path-to-your-1200x630-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:title" content="Oroton™ Online Store | Australian Luxury Fashion Est 1938" />
        <meta property="og:description" content="Shop Oroton's large range of designer leather bags, wallets, luxury jewellery, must-have fashion accessories and the current ready-to-wear collection." />
        <meta property="og:site_name" content="Oroton™ Online Store | Australian Luxury Fashion Est 1938" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
