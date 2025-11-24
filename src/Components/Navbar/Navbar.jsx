import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../../assets/logo.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import underline from "../../assets/nav_underline.svg";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "services", label: "Services" },
  { id: "work", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-6 px-4 md:px-16">
      {/* Logo */}
      <img src={logo} alt="logo" className="h-10 md:h-12" />

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-white font-medium">
        {navLinks.map((link) => (
          <li key={link.id} className="flex flex-col items-center cursor-pointer">
            <AnchorLink
              href={`#${link.id}`}
              offset={50}
              onClick={() => setActive(link.id)}
              className="hover:text-yellow-500 transition-colors"
            >
              {link.label}
            </AnchorLink>
            {active === link.id && (
              <img src={underline} alt="underline" className="mt-1 w-6" />
            )}
          </li>
        ))}
      </ul>

      {/* Connect Button */}
      <div className="hidden md:flex items-center ml-4 lg:ml-8">
        <AnchorLink
          href="#contact"
          offset={50}
          className="px-4 py-2 rounded-full bg-gradient-to-r from-[#DF8908] to-[#B415FF] text-white text-base font-medium hover:scale-105 transition-transform"
        >
          Connect With Me
        </AnchorLink>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <img
          src={menuOpen ? menu_close : menu_open}
          alt="menu"
          className="h-6 w-6 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1f0016] flex flex-col gap-8 p-8 transition-transform duration-500 z-40
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {navLinks.map((link) => (
          <AnchorLink
            key={link.id}
            href={`#${link.id}`}
            offset={50}
            onClick={() => {
              setActive(link.id);
              setMenuOpen(false);
            }}
            className="text-white text-xl font-semibold"
          >
            {link.label}
          </AnchorLink>
        ))}

        <AnchorLink
          href="#contact"
          offset={50}
          onClick={() => setMenuOpen(false)}
          className="mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#DF8908] to-[#B415FF] text-white text-base font-medium text-center block"
        >
          Connect With Me
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;




