import "./globals.css";

import Script from "next/script";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  themeColor: "#F1C657",
  icons: [
    {
      url: "/favicons/favicon.ico",
    },
    {
      url: "/favicons/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      url: "/favicons/favicon-32x32.png",
      sizes: "32x32",
    },
    { url: "/favicons/favicon-192x192.png", sizes: "192x192" },
  ],
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-background bg-dots">
        <Script
          defer
          data-domain="scoreboarder.xyz"
          src="/js/script.outbound-links.js"
          strategy="lazyOnload"
        />
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
