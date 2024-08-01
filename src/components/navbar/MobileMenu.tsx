import React from "react";
import NavItem from "./NavItem";

interface MobileMenuProps {
  links: LinkItemProps[];
}

interface LinkItemProps {
  title: string;
  path: string;
}

const MobileMenu = ({ links }: MobileMenuProps) => {
  return (
    <ul className="md:hidden flex flex-col py-4 items-center text-mycolor-700 z-10 bg-mycolor-400">
      {links.map((link, index) => (
        <li key={index}>
          <NavItem title={link.title} href={link.path} />
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
