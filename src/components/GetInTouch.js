import React from "react";
import BannerHead from "../assets/banner-head.svg";

export default function GetInTouch() {
  return (
    <div className="lg:w-3/5 py-10">
      <div className="relative">
        <img src={BannerHead} alt="banner-head" width={250} />
        <div className="absolute inset-0">
          <span className="text-bold text-2xl font-rockSalt">GET IN TOUCH</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 font-light text-sm ">
        <input
          type="text"
          placeholder="First name"
          className="outline-none font-light pb-2 border-b border-b-gray-500 w-full mb-4"
        />
        <input
          type="text"
          placeholder="Last name"
          className="outline-none font-light pb-2 border-b border-b-gray-500 w-full mb-4"
        />

        <input
          type="email"
          placeholder="Email address"
          className="outline-none font-light pb-2 border-b border-b-gray-500 w-full mb-4"
        />
        <input
          type="text"
          placeholder="Website"
          className="outline-none font-light pb-2 border-b border-b-gray-500 w-full mb-4"
        />
        <input
          type="tel"
          placeholder="Phone number"
          className="outline-none font-light pb-2 border-b border-b-gray-500 w-full mb-4"
        />
        <input
          type="date"
          className="outline-none font-light pb-2 border-b border-b-gray-500 w-full mb-4"
        />
        <div>
          <label htmlFor="message" className="text-gray-500">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="3"
            className="border w-full mt-2 outline-none p-2"
          ></textarea>
        </div>
      </div>

      <button className="px-6 py-1 bg-yellow-500 text-white">SUBMIT</button>
    </div>
  );
}
