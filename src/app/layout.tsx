import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../assets/style/style.css";
import "../assets/style/tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const GTM_ID = 'GTM-WTWC2LXL';

export const metadata: Metadata = {
  title: "Elogictech Edge",
  description: "Embedded Product Engineering and turnkey Internet-of-Things solutions partner",
  keywords: ['ElogicTechEdge', 'IIoT', 'Industrial IoT', "IoT"],
  openGraph: {
    title: 'Elogictech Edge',
    description: 'Embedded Product Engineering and turnkey Internet-of-Things solutions partner',
    url: 'https://eltedge.io',
    siteName: 'Elogictech Edge',
    images: [
      {
        url: 'https://eltedge.io/edgelogo.jpg',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* <!-- Google Tag Manager --> */}

        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* <!-- End Google Tag Manager --> */}
        <meta name="facebook-domain-verification" content="yqqbp6z87kmhpbq2wgdz3oo5nn9m8f" />
      </head>
      <body className={inter.className}>

        {/* <!-- Google Tag Manager (noscript) -->  */}
        <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {/* <!-- End Google Tag Manager (noscript) -->  */}


        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
