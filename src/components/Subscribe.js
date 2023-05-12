import React from "react";

export default function Subscribe() {
  return (
    <section className=" bg-yellow-500">
      <div className="max-w-screen-lg mx-auto p-6 flex flex-col lg:flex-row justify-around items-center">
        <p className="font-bold mb-4 text-xs md:text-lg pt-2 ">
          GET IN TOUCH AND STAY UPDATED WITH OUR NEWS AND EVENTS
        </p>
        <div className="flex">
          <input
            type="search"
            className="bg-white px-3 outline-none border-none M-0"
          />
          <button className="px-4 py-1 bg-black text-white text-sm">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
}
