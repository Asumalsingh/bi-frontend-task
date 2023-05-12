import React from "react";
import Outline from "..//assets/black-bg.svg";
import WhiteShape from "..//assets/white-shape.svg";

export default function Other() {
  return (
    <section className="bg-yellow-500">
      <div className="max-w-screen-lg mx-auto px-5">
        <div className="md:flex md:space-x-10 lg:space-x-24">
          <div className="md:w-3/5 py-12">
            <h1 className="font-bold italic text-3xl">
              WHAT IS PERFORMANCE MARKETING?
            </h1>
            <p className="text-sm text-white my-6">
              13 days ago | 12 mins read
            </p>

            <p className="font-light">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate. At
              vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>
            <br />
            <p className="font-light">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati elum dolor...
            </p>
            <p className="text-sm text-white mt-2">Continue reading &#8811;</p>

            <p className="text-xs mt-6">MORE ARTICLE</p>
            <img src={Outline} alt="" />
          </div>
          <div className="md:w-2/5 py-12">
            <div className="relative">
              <img src={WhiteShape} alt="white space" width={170} />
              <div className="absolute inset-0">
                <span className="font-rockSalt font-bold text-2xl">
                  POPULAR
                </span>
              </div>
            </div>

            <p className="font-light my-6">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti
            </p>

            <p className="text-white text-sm my-3">YuuTube | 0.34</p>

            <iframe
              src="https://www.youtube.com/embed/5lAviYdBhFM"
              title="4th Year Anniversary Celebration | Brain Inventory | #4YearsStrong"
              frameborder="0"
              className="w-full aspect-video"
            ></iframe>

            <p className="text-xs mt-6">MORE VIDEOS</p>
            <img src={Outline} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
