"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "../ui/button";
import { navLinks } from "@/constants";
import Link from "next/link";
import CustomSheet from "./CustomSheet";
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div
      id="home"
      className="flex w-full py-2 lg:px-36 md:px-24 px-8 mt-6 font-mono"
    >
      <div className="flex w-full justify-between">
        <div className="py-2">
          <h4 className="text-xl font-bold">
            <span className="text-code">Ankit</span> Khurana
          </h4>
        </div>

        <div className="lg:hidden">
          <svg
            width="30"
            height="30"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            color="text-primary"
            onClick={handleClick}
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </div>

        <CustomSheet open={menuOpen}>
          <div className="flex justify-between">
            <div>
              <ul>
                {navLinks.map((link) => {
                  return (
                    <>
                      <li className="p-2 my-2 text-large font-extrabold font-mono">
                        <span className="text-code">{"// "}</span>
                        <Link onClick={handleClick} href={link.link}>
                          {link.label}
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
              <Button className="w-full mt-2">Resume</Button>
            </div>
            <div>
              <svg
                onClick={handleClick}
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                color="text-primary"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </div>
          </div>
        </CustomSheet>

        <div className="lg:block hidden">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => {
                return (
                  <>
                    <NavigationMenuItem
                      className={navigationMenuTriggerStyle()}
                    >
                      <NavigationMenuLink href={link.link}>
                        <span className="text-code">{"// "}</span>
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </>
                );
              })}
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <Button
                    variant="outline"
                    className="text-code border-code ml-1"
                  >
                    Resume
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};

export default Nav;
