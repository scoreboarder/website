import Head from "next/head";
import Script from "next/script";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Next.js complains if this isn't here */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <Script
        src="/js/script.js"
        data-domain="scoreboarder.xyz"
        strategy="afterInteractive"
      ></Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
