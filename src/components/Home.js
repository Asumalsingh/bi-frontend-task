import React, { useState } from "react";
import Navbar from "./Navbar";
import HomeImage from "../assets/Copy-of-podcast.png";
import Creative from "../assets/CREATIVITY.svg";
import Marketing from "../assets/MARKETING.jpg.svg";
import Content from "../assets/CONTENT.svg";
import BannerHead from "../assets/banner-head.svg";

export default function Home() {
  const [nav, setNav] = useState(false);
  return (
    <>
      <Navbar nav={nav} setNav={setNav} />
      <section
        className="h-screen"
        style={{
          backgroundImage: `url(${HomeImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-screen max-w-screen-xl flex items-center mx-auto px-5">
          <div>
            <div className="flex flex-col md:flex-row items-center space-x-6">
              <div>
                <img src={Creative} alt="Creative" width={300} />
                <img src={Marketing} alt="Mrketing" width={300} />
                <img src={Content} alt="Content" width={270} />
              </div>
              <div className={`relative my-10 ${nav && "hidden"}`}>
                <img src={BannerHead} alt="banner-head" width={300} />
                <div className={`absolute inset-0 z-0 `}>
                  <span className="font-bold text-5xl font-rockSalt text-white">
                    EVOLUTO.
                  </span>
                </div>
              </div>
            </div>
            <fieldset className="border mt-10 p-6 rounded-lg border-gray-200 flex justify-between font-bold sm:text-2xl text-white">
              <legend className="text-sm font-light px-4 ">
                Andrea's project and activities have been featured in
              </legend>
              <span>Forbes</span>
              <span>GLAMOUR</span>
              <span>Forbes</span>
              <span>LA STAMPA</span>
            </fieldset>
          </div>
        </div>
      </section>
    </>
  );
}
