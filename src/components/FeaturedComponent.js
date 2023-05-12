import React from "react";
import Articles from "./Articles";
import FreshClip from "./FreshClip";

export default function FeaturedComponent() {
  return (
    <section>
      <div className="max-w-screen-lg mx-auto px-5 py-20">
        <div className="md:flex md:space-x-10 lg:space-x-20">
          <div className="md:w-3/5">
            <Articles />
          </div>
          <div className="md:w-2/5">
            <FreshClip />
          </div>
        </div>
      </div>
    </section>
  );
}
