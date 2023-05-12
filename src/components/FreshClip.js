import React from "react";
import BannerHead from "../assets/banner-head.svg";

export default function FreshClip() {
  return (
    <section>
      <div className="relative mt-8">
        <img src={BannerHead} alt="bg-pick" width={150} />
        <div className="absolute inset-0 h-full">
          <span className="font-rockSalt font-bold">FRESH CLIP!</span>
        </div>
      </div>

      <div>
        <p className="font-light my-4">
          At vero eos et accusamus et iusto odio stum deleniti atque corrupti
          quos dolores et quas molestias.
        </p>
        <p className="text-yellow-500 text-sm my-3">YuuTube | 0.34</p>

        <iframe
          src="https://www.youtube.com/embed/5lAviYdBhFM"
          title="4th Year Anniversary Celebration | Brain Inventory | #4YearsStrong"
          frameborder="0"
          className="w-full aspect-video"
        ></iframe>
      </div>

      <hr className="my-10" />
      <div>
        <p className="font-light my-4">
          At vero eos et accusamus et iusto odio stum deleniti atque corrupti
          quos dolores et quas molestias.
        </p>
        <p className="text-yellow-500 text-sm my-3">YuuTube | 0.34</p>

        <iframe
          src="https://www.youtube.com/embed/5lAviYdBhFM"
          title="4th Year Anniversary Celebration | Brain Inventory | #4YearsStrong"
          frameborder="0"
          className="w-full aspect-video"
        ></iframe>
      </div>
      <hr className="my-10" />
      <div>
        <p className="font-light my-4">
          At vero eos et accusamus et iusto odio stum deleniti atque corrupti
          quos dolores et quas molestias.
        </p>
        <p className="text-yellow-500 text-sm my-3">YuuTube | 0.34</p>

        <iframe
          src="https://www.youtube.com/embed/5lAviYdBhFM"
          title="4th Year Anniversary Celebration | Brain Inventory | #4YearsStrong"
          frameborder="0"
          className="w-full aspect-video"
        ></iframe>
      </div>
    </section>
  );
}
