import type { Metadata } from "next";
import "./globals.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { siteConfig } from "./config/site";
import { Providers } from "./providers/provider";
import { ScrollToTop } from "./components/scroll-to-top";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://fangs.tw"),
  title: siteConfig.name,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    site: "@chouweifang",
    creator: "@chouweifang",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  appleWebApp: {
    title: siteConfig.name,
    statusBarStyle: "black-translucent",
  },
  category: "technology",
  keywords: [
    "Chou Wei Fang",
    "Chou Wei Fang Portfolio",
    "Next.JS",
    "iOS Swift",
    "Flutter",
    "App",
  ],
  creator: "WeiFang Chou",
  openGraph: {
    type: "website",
    locale: "zh-TW",
    url: "https://fangs.tw",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "https://fangs.tw/avatar-origin.png",
        alt: siteConfig.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="HFFvAJhNGJy85qnayddRdMH2Wd4dkpXaKs4v00X7iP8"
        />
      </head>
      <body>
        <ScrollToTop />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-BZCW7DTN5N" />
        <GoogleTagManager gtmId="GTM-N997P8ZQ" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
