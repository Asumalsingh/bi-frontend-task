import React from "react";
import { FaLinkedin, FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { HiMail } from "react-icons/hi";

export default function Social() {
  return (
    <section className="bg-black">
      <div className="max-w-screen-lg mx-auto px-5 py-6 flex flex-col md:flex-row justify-around items-center">
        <div className="flex items-center space-x-4  text-white ">
          <FaFacebook
            size={30}
            className="cursor-pointer hover:text-yellow-500"
          />
          <FaLinkedin
            size={30}
            className="cursor-pointer hover:text-yellow-500"
          />
          <FaTwitterSquare
            size={30}
            className="cursor-pointer hover:text-yellow-500"
          />
          <AiFillInstagram
            size={36}
            className="cursor-pointer hover:text-yellow-500"
          />
          <AiFillYoutube
            size={44}
            className="cursor-pointer hover:text-yellow-500"
          />
          <HiMail size={44} className="cursor-pointer hover:text-yellow-500" />
        </div>
        <div>
          <button className="bg-white text-black px-6 py-0 mt-2 ">SUBSCRIBE</button>
        </div>
      </div>
    </section>
  );
}
