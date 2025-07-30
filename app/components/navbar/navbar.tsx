"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
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
      maxWidth="xl"
      classNames={{
        base: "py-4",
        wrapper: "px-6 md:px-12 lg:px-20",
        item: "text-foreground/60 hover:text-foreground data-[active=true]:text-foreground",
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
            <Link 
              href={item.href}
              className="text-base font-medium transition-colors"
            >
              {item.label}
            </Link>
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
