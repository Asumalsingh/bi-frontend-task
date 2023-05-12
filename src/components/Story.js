import React from "react";
import S1 from "../assets/story7.jpg";
import S2 from "../assets/story6.JPG";
import S3 from "../assets/story3.JPG";
import S4 from "../assets/story5.JPG";

export default function Story() {
  return (
    <section className="max-w-screen-lg mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full h-full relative">
          <img src={S4} alt="s1-pic" className="w-full h-full" />
          <div className="absolute inset-0">
            <div className="flex justify-center items-end h-full pb-10">
              <div className="text-center">
                <p className="text-white text-4xl font-bold">DO NOT WAIT TO </p>
                <p className="font-rockSalt text-3xl font-extrabold mb-6  text-yellow-500">
                  GET MOTIVATED
                </p>
                <div className="flex justify-center">
                  <button className="px-4 py-2 bg-yellow-500 text-white">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative">
          <img src={S1} alt="s1-pic" className="w-full h-full" />
          <div className="absolute inset-0">
            <div className="h-full ml-8 py-8 flex flex-col justify-between ">
              <div className="text-white italic font-bold text-4xl">
                <p>HARD</p>
                <p>DAYS</p>
                <p>WON'T</p>
                <p>WIN.</p>
              </div>
              <div>
                <button className="px-4 py-2 bg-yellow-500 text-white">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative">
          <img src={S3} alt="s1-pic" className="w-full h-full" />
          <div className="absolute inset-0">
            <div className="flex justify-center items-center h-full pb-10">
              <div className="text-center mt-24">
                <p className="text-white text-4xl font-bold italic">
                  LAUGH.SMILE.LOVE.
                </p>
                <p className="text-white text-xl my-3 font-bold">
                  FOCUS ON YOUR PURPOSE.
                </p>
                <div className="flex justify-center">
                  <button className="px-4 py-2 bg-yellow-500 text-white">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative">
          <img src={S2} alt="s1-pic" className="w-full h-full" />
          <div className="absolute inset-0">
            <div className="h-full ml-8 py-8 flex flex-col justify-around ">
              <div className="text-white font-bold text-4xl">
                <p>LET'S DO</p>
                <p>WHAT WE</p>
                <p className="text-yellow-500 font-rockSalt">LOVE</p>
              </div>
              <div>
                <button className="px-4 py-2 bg-yellow-500 text-white">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
