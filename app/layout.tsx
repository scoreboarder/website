import "./globals.css";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
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
      </head>

      <body className="bg-background bg-dots">
        <div className="flex flex-col items-center mx-4 md:mx-8 mt-8 mb-16">
          <div className="w-full xl:w-3/4 max-w-6xl flex flex-col space-y-32">
            <Nav />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
