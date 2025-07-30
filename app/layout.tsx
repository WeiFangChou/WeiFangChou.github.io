import type { Metadata } from "next";
import "./globals.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { siteConfig } from "./config/site";
import { Providers } from "./providers/provider";
import { ScrollToTop } from "./components/scroll-to-top";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
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
        <GoogleAnalytics gaId="G-BZCW7DTN5N" />
        <GoogleTagManager gtmId="GTM-N997P8ZQ" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
