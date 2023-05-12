import React from "react";
import Logo from "../assets/Copy of logo.png";
import { FaTimes, FaBars } from "react-icons/fa";
import Underline from "../assets/head-bottom.svg";

import { BiSearch } from "react-icons/bi";

export default function Navbar({ nav, setNav }) {
  const links = [
    "home",
    "podcast",
    "blog",
    "events",
    "contact",
    "story",
    "charity",
    "careers",
  ];
  return (
    <nav className="flex justify-between items-center w-full px-5 py-2 md:px-10 backdrop-blur-xl absolute">
      <div className="w-40">
        <img src={Logo} alt="logo" />
      </div>
      <ul className="hidden lg:flex">
        {links.map((link, index) => {
          return (
            <li
              key={index}
              className={`mx-4 capitalize cursor-pointer text-gray-300 font-medium ${
                link === "home" && "text-yellow-500"
              }`}
            >
              {link.toUpperCase()}
              {link === "home" && (
                <img src={Underline} alt="head-bottom" width={40} />
              )}
            </li>
          );
        })}

        <li>
          <BiSearch size={26} className="text-gray-300 cursor-pointer mx-4" />
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-50 text-gray-500 lg:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div className="absolute inset-0 z-40 w-screen bg-black h-screen my-20">
          <ul className="flex lg:hidden flex-col items-center w-full">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="py-3 px-4 capitalize cursor-pointer text-gray-500 font-medium hover:scale-105 duration-100 "
                >
                  {link}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
