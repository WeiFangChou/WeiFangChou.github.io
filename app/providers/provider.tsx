"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" {...props}>
      <HeroUIProvider>{children}</HeroUIProvider>
    </NextThemesProvider>
  );
}
