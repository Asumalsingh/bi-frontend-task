import React from "react";
import BannerHead from "../assets/banner-head.svg";
import Outline from "..//assets/black-bg.svg";

export default function Events() {
  return (
    <div className="lg:w-2/5 mt-10">
      <div className="relative">
        <img src={BannerHead} alt="banner-head" width={250} />
        <div className="absolute inset-0">
          <span className="text-bold text-2xl font-rockSalt">EVENTS</span>
        </div>
      </div>
      <h2 className="text-2xl font-bold my-6">APRIL</h2>

      <div className="flex justify-between items-center space-x-6">
        <p className="font-bold text-2xl text-yellow-500">28</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          aliquid...
        </p>
        <p className="text-yellow-500"> DETAILS</p>
      </div>
      <hr className="border-gray-500 my-6" />
      <div className="flex justify-between items-center space-x-6">
        <p className="font-bold text-2xl text-yellow-500">27</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          aliquid...
        </p>
        <p className="text-yellow-500"> DETAILS</p>
      </div>
      <hr className="border-gray-500 my-6" />
      <div className="flex justify-between items-center space-x-6">
        <p className="font-bold text-2xl text-yellow-500">20</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          aliquid...
        </p>
        <p className="text-yellow-500"> DETAILS</p>
      </div>
      <hr className="border-gray-500 my-6" />
      <div className="flex justify-between items-center space-x-6">
        <p className="font-bold text-2xl text-yellow-500">16</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          aliquid...
        </p>
        <p className="text-yellow-500"> DETAILS</p>
      </div>
      <hr className="border-gray-500 my-6" />
      <div className="flex justify-between items-center space-x-6">
        <p className="font-bold text-2xl text-yellow-500">16</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          aliquid...
        </p>
        <p className="text-yellow-500"> DETAILS</p>
      </div>

      <p className="text-xs mt-6">MORE EVENTS</p>
      <img src={Outline} alt="" width={70} />
    </div>
  );
}
