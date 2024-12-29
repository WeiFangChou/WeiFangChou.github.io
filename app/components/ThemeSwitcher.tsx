"use client";

import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "./imgs/icons";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Button
        isIconOnly
        onPress={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </div>
  );
}
