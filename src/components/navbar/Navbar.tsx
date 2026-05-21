"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { Button } from "../ui/button";
import { HiMiniBars3BottomRight, HiMiniBars4 } from "react-icons/hi2";
import MobileMenu from "./MobileMenu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Image from "next/image";
import { useLanguage } from "@/context/language";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { selectedValue, setSelectedValue, language } = useLanguage();
  const { about, projects, contact } = language;

  const navLinks = [
    {
      title: about,
      path: "#about",
    },
    {
      title: projects,
      path: "#projects",
    },
    {
      title: contact,
      path: "#contact",
    },
  ];

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  const ClosedFunc = () => {
    setNavbarOpen(false);
  };

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
          <Button onClick={() => setNavbarOpen(true)} aria-label="Open navigation">
            <HiMiniBars4 className="h-5 w-5" />
          </Button>
        ) : (
          <Button onClick={() => setNavbarOpen(false)} aria-label="Close navigation">
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
        <Select value={selectedValue} onValueChange={handleChange}>
          <SelectTrigger className="w-[180px]" aria-label="Dil Seçiniz">
            <SelectValue placeholder="Dil Seçiniz" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="turkce">
              <div className="flex items-center gap-5">
                <Image
                  alt="Türk bayrağı"
                  width={25}
                  height={25}
                  src={"/svg/flags/ic_flag_tr.svg"}
                />
                <span>Türkçe</span>
              </div>
            </SelectItem>
            <SelectItem value="english">
              <div className="flex items-center gap-5">
                <Image
                  alt="English flag"
                  width={25}
                  height={25}
                  src={"/svg/flags/ic_flag_en.svg"}
                />
                <span>English</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      {navbarOpen && <MobileMenu links={navLinks} closedModal={ClosedFunc} />}
    </nav>
  );
};

export default Navbar;
