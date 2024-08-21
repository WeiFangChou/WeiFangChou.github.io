'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Link from "next/link";
import { useState } from "react";

import { ThemeSwitch } from "./theme-switch";

import { siteConfig } from "@/config/site";
import { Portfolio_Icon } from "@/app/components/icons";

export const NaviBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      // isBlurred
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle className="lg:hidden">
          <NavbarBrand />
        </NavbarMenuToggle>
        <Portfolio_Icon />
      </NavbarContent>

      <NavbarContent className="max-md:hidden" justify="end">
        {siteConfig.navItems.map((item, index) => (
          <Link key={index} href={item.href}>
            {item.label}
          </Link>
        ))}
        <NavbarItem className=" lg:flex">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarItem className=" lg:flex">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="mt-[20%]">
        {siteConfig.navItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              key={index}
              href={item.href}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
