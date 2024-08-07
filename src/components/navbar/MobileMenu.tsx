import React from "react";
import NavItem from "./NavItem";
import { X } from "lucide-react";

interface MobileMenuProps {
  links: LinkItemProps[];
  closedModal: () => void;
}

interface LinkItemProps {
  title: string;
  path: string;
}

const MobileMenu = ({ links, closedModal }: MobileMenuProps) => {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 bg-opacity-85 bg-mycolor-400 w-full h-screen flex items-center justify-center">
      <div className="flex flex-col">
        <button onClick={closedModal} className="fixed top-16 right-24">
          <X className="w-10 h-10 text-white" />
        </button>
        <ul className="md:hidden flex flex-col py-4 items-center text-mycolor-700 z-10">
          {links.map((link, index) => (
            <li key={index}>
              <NavItem title={link.title} href={link.path} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
