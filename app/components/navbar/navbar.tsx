"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { siteConfig } from "../../config/site";
import { useState } from "react";
import { BurgerIcon } from "../imgs/icons";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      position='sticky'
      onMenuOpenChange={setIsMenuOpen}
      isBlurred
      shouldHideOnScroll
      maxWidth="lg"
      classNames={{
        // base: "bg-white/50 backdrop-blur-sm",
        item: "text-foreground",
      }}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          className="md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          icon={<BurgerIcon state={isMenuOpen ? "close" : "open"} />}
          onChange={(isOpen) => setIsMenuOpen(isOpen)}
        />
        <NavbarBrand>
          <Link href="/">
            <Image
              src="/fang.svg"
              alt="WeiFang Chou Logo"
              width={80}
              height={80}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="max-md:hidden">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu className="md:hidden">
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarContent justify="end">
        <ThemeSwitcher />
      </NavbarContent>
    </Navbar>
  );
}
