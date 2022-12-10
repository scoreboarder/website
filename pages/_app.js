import Head from "next/head";

// import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Scoreboarder: Keep track of scoreboards on Discord with ease
        </title>
        <meta
          name="description"
          content="Discord bot for making scoreboards, leaderboards and much more! Create any number of scoreboards and add however many people you want to them."
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
