import Head from "next/head";
import Script from "next/script";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
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

        {/* Next.js complains if this isn't here */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
