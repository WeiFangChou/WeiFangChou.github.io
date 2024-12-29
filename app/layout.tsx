import type { Metadata } from "next";
import "./globals.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import { siteConfig } from "./config/site";
import { Providers } from "./providers/provider";

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
    "App"
  ],
  creator: "WeiFang Chou",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          
          {children}
        </Providers>
      </body>
    </html>
  );
}
