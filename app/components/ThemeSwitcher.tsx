"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/button";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "./imgs/icons";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 避免 SSR 和 CSR icon 不一致

  return (
    <div>
      <Button
        isIconOnly
        variant="light"
        onPress={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </div>
  );
}
