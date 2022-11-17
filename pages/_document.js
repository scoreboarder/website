import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#F1C657"></meta>

          <link rel="icon" href="/favicons/favicon.ico"></link>
          <link
            rel="icon"
            type="image/png"
            href="/favicons/favicon-16x16.png"
            sizes="16x16"
          ></link>
          <link
            rel="icon"
            type="image/png"
            href="/favicons/favicon-32x32.png"
            sizes="32x32"
          ></link>
          <link
            rel="icon"
            type="image/png"
            href="/favicons/favicon-192x192.png"
            sizes="192x192"
          ></link>

          <script
            defer
            data-domain="scoreboarder.xyz"
            src="/js/script.outbound-links.js"
          ></script>

          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta
            property="og:image"
            content="https://scoreboarder.xyz/opengraph.jpg"
          ></meta>
        </Head>
        <body className="bg-background bg-dots">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
