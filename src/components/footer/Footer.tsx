"use client";
import { useLanguage } from "@/context/language";
import React from "react";

const Footer = () => {
  const { language } = useLanguage();
  const { allRights } = language;

  return (
    <footer className="border-t border-mycolor-200">
      <div className="container p-12 flex text-2xl justify-center text-center text-white gap-2">
        <span className="font-semibold font-pacifico text-white">Dayi</span>
        <span>|</span>
        <span>{allRights}</span>
      </div>
    </footer>
  );
};

export default Footer;
