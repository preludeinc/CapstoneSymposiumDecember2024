import { Link } from "@nextui-org/link";
import { siteConfig } from "../config/site";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="navbar fixed w-full h-72" position="sticky">
      <div className="flex items-center w-full h-full">
        <div className="px-3">
          <Hamburger toggled={isOpen} size={40} toggle={setOpen} />
        </div>
        <h1 className="text-2xl pt-4 ml-2 md:ml-4 md:place-items-start font-black text-white">
          Camosun Capstone
        </h1>
      </div>
      <AnimatePresence>
        {isOpen && (
          <div className="nav-container top-0">
            <ul className="grid gap-2">
              {siteConfig.navItems.map((item) => {
                return (
                  <li key={item.href} className="nav-links">
                    <Link href={item.href} className="nav-link">
                      <span className="flex gap-1 text-2xl lg:text-3xl text-semibold pr-1">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

