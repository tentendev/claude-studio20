import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studios20 - The Leading Micro Influencer Marketing Platform",
  description: "Automate product seeding campaigns and scale up your brand awareness, UGC, and online growth with Studios20's network of 11M+ vetted creators.",
  keywords: ["influencer marketing", "micro influencers", "UGC", "creator marketing", "product seeding"],
  openGraph: {
    title: "Studios20 - Micro Influencer Marketing Platform",
    description: "Automate product seeding campaigns and scale up your brand awareness with 11M+ creators",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studios20 - Micro Influencer Marketing Platform",
    description: "Automate product seeding campaigns and scale up your brand awareness",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Webflow CSS */}
        <link href="/webflow/css/normalize.css" rel="stylesheet" type="text/css" />
        <link href="/webflow/css/webflow.css" rel="stylesheet" type="text/css" />
        <link href="/webflow/css/revolve-purchased-14df8320705fa1b6a64a0.webflow.css" rel="stylesheet" type="text/css" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}

        {/* Webflow JavaScript */}
        <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=68fca5bc9a6bb6b935396ab2" strategy="beforeInteractive" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous" />
        <Script src="/webflow/js/webflow.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
