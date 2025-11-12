import React, { useState, useRef } from "react";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "services", label: "Services" },
    { id: "work", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="flex items-center justify-between my-5 mx-[170px] max-md:mx-[50px]">
      {/* Logo */}
      <img src={logo} alt="logo" />

      {/* Mobile menu open icon */}
      <img
        src={menu_open}
        onClick={openMenu}
        alt="open menu"
        className="hidden max-md:block fixed right-[30px] z-50 cursor-pointer"
      />

      {/* Navigation Menu */}
      <ul
        ref={menuRef}
        className="flex items-center list-none gap-[60px] text-[20px] max-md:flex-col max-md:items-start max-md:gap-[30px] max-md:bg-[#1f0016] max-md:w-[350px] max-md:h-screen max-md:fixed max-md:top-0 max-md:right-[-350px] max-md:z-40 max-md:transition-[right] max-md:duration-500"
      >
        {/* Mobile close icon */}
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="close menu"
          className="hidden max-md:block relative top-[30px] left-[290px] w-[30px] cursor-pointer"
        />

        {menuItems.map((item) => (
          <li
            key={item.id}
            className="flex flex-col gap-[5px] whitespace-nowrap cursor-pointer max-md:flex-row max-md:gap-[20px] max-md:pl-[100px] max-md:text-[30px]"
          >
            <AnchorLink
              className="no-underline text-white"
              offset={50}
              href={`#${item.id}`}
            >
              <p onClick={() => setMenu(item.id)}>{item.label}</p>
            </AnchorLink>
            {menu === item.id && <img src={underline} alt="underline" />}
          </li>
        ))}
      </ul>

      {/* Connect button */}
      <div className="px-[60px] py-[15px] rounded-[50px] bg-gradient-to-r from-[#DA7C25] to-[#B923E1] text-[22px] cursor-pointer transition-transform duration-500 hover:scale-105 max-md:hidden">
        <AnchorLink className="no-underline text-white" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;


