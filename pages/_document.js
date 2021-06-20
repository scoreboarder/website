import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>
            Scoreboarder: Keep track of scoreboards on Discord with ease
          </title>
          <meta
            name="description"
            content="Scoreboarder is a Discord bot for making scoreboards (or leaderboards). You can create scoreboards and add or remove points from people and much more!"
          />
          <meta property="og:title" content="Scoreboarder"></meta>
          <meta
            property="og:description"
            content="Keep track of scoreboards on Discord with ease"
          ></meta>

          <meta name="theme-color" content="#007A7A"></meta>

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

          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta
            property="og:image"
            content="https://scoreboarder.xyz/opengraph.jpg"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
