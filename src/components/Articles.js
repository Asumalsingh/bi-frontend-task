import React from "react";
import Underline from "../assets/head-bottom.svg";
import Article from "../assets/article-1.jpg";

export default function Articles() {
  return (
    <section>
      <div>
        <h2>FEATURED ARTICLES</h2>
        <img src={Underline} alt="head-bottom" />

        <div className="text-3xl italic font-bold my-8">
          <h1>IF CONTENT IS KING,</h1>
          <h1>THEN WHO IS QUEEN?</h1>
        </div>

        <p className="text-yellow-500 font-light text-sm">
          2 days ago | 15 min read
        </p>

        <img src={Article} alt="article pic" className="mt-2 mb-6" />

        <p className="font-light">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate. At vero eos et
          accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti.
        </p>
        <br />
        <p className="font-light">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati elum dolor...
        </p>
        <p className="text-sm text-yellow-500 mt-2">Continue reading &#8811;</p>
      </div>
      <hr className="my-6" />
      <div>
        <h2>GUEST CONTRIBUTOR</h2>
        <img src={Underline} alt="head-bottom" />

        <div className="text-3xl italic font-bold my-8">
          <h1>HOW USER EXPERIENCE</h1>
          <h1>TRANSLATES TO MARKETING</h1>
        </div>

        <p className="text-yellow-500 font-light text-sm">
          By Mattia Rasulo 10min read
        </p>

        <p className="font-light">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate. At vero eos et
          accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti.
        </p>
        <br />
        <p className="font-light">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati elum dolor...
        </p>
        <p className="text-sm text-yellow-500 mt-2">Continue reading &#8811;</p>
      </div>
    </section>
  );
}
