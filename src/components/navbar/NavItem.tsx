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
      className="block py-2 pl-3 text-mycolor-700 hover:text-white/80 text-xl"
    >
      {title}
    </Link>
  );
};

export default NavItem;
