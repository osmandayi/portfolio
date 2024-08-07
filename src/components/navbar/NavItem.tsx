import Link from "next/link";
import React from "react";

interface NavItemsProps {
  href: string;
  title: string;
}

const NavItem = ({ href, title }: NavItemsProps) => {
  return (
    <Link
      href={href}
      className="block py-3 pl-3 text-mycolor-700 hover:text-white/80 text-3xl"
    >
      {title}
    </Link>
  );
};

export default NavItem;
