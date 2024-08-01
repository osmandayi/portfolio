"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { Button } from "../ui/button";
import { BarChartIcon } from "lucide-react";
import { HiMiniBars3BottomRight, HiMiniBars4 } from "react-icons/hi2";
import MobileMenu from "./MobileMenu";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="bg-mycolor-400 sticky flex w-full mx-auto border-b border-mycolor-300 top-0 left-0 right-0 z-10 bg-opacity-85">
      <div className="flex container lg:py-4 py-2 px-4 flex-wrap items-center justify-between">
        <Link
          href={"/"}
          className="text-2xl md:text-4xl text-mycolor-700 font-semibold font-pacifico"
        >
          Usman Dayi
        </Link>

        <div className="block md:hidden">
          {!navbarOpen ? (
            <Button onClick={() => setNavbarOpen(true)}>
              <HiMiniBars4 className="h-5 w-5" />
            </Button>
          ) : (
            <Button onClick={() => setNavbarOpen(false)}>
              <HiMiniBars3BottomRight className="h-5 w-5" />
            </Button>
          )}
        </div>

        <div className="hidden md:block md:w-auto">
          <ul className="flex p-4 md:flex-row mt-2 md:space-x-5">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavItem href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MobileMenu links={navLinks} />}
    </nav>
  );
};

export default Navbar;
