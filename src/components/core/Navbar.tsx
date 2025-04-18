"use client";

import Link from "next/link";
import * as React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { CirclePlus, Info, Menu, Phone, Search } from "lucide-react";

const Navbar: React.FunctionComponent = () => {
  const pathname = usePathname();

  const navLinks = [
    { label: "Browse Event", href: "/events", icon: <Search /> },
    { label: "Create Event", href: "/create", icon: <CirclePlus /> },
    { label: "About", href: "/about", icon: <Info /> },
    { label: "Contact", href: "/contact", icon: <Phone /> },
  ];

  return (
    <div className="px-4 py-2 md:px-24 md:py-4 fixed z-50 w-full bg-white shadow">
      <div className="flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <p>LOGO</p>
          </Link>
        </div>
        <div className="flex md:flex-row flex-row-reverse justify-between items-center gap-2 md:gap-0 md:w-2/3">
          <nav>
            <ul className="md:flex gap-8 text-muted-foreground hidden">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className={`hover:text-primary ${
                    pathname === link.href ? "text-primary font-semibold" : ""
                  }`}
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={"ghost"} size={"icon"}>
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-36">
                <DropdownMenuGroup>
                  {navLinks.map((link) => (
                    <DropdownMenuItem key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2"
                      >
                        {link.icon} <span>{link.label}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <div className="flex gap-2">
            <Link href={"/sign-in"}>
              <Button variant={"ghost"} className="text-primary cursor-pointer">
                Login
              </Button>
            </Link>
            <Link href={"/sign-up"}>
              <Button className="cursor-pointer">Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
