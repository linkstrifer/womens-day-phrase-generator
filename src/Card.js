import React from "react";

import adjetives from "./libs/adjetives";
import fAdjetives from "./libs/female-adjetives";
import verbs from "./libs/verbs";
import nouns from "./libs/nouns";

import getRandom from "./libs/random";

function Card() {
  return (
    <div className="container">
      <div class="content">
        <h1 class="text-gray-700 text-base">
          La mujer, ese{" "}
          <span className="highlight">
            {adjetives[getRandom(0, adjetives.length)]}
          </span>{" "}
          ser , capaz de{" "}
          <span className="highlight">{verbs[getRandom(0, verbs.length)]}</span>{" "}
          y de{" "}
          <span className="highlight">{verbs[getRandom(0, verbs.length)]}</span>
          , con su{" "}
          <span className="highlight">{nouns[getRandom(0, nouns.length)]}</span>{" "}
          <span className="highlight">
            {fAdjetives[getRandom(0, fAdjetives.length)]}
          </span>
          . Sin ella no tendríamos{" "}
          <span className="highlight">
            {nouns[getRandom(0, nouns.length)]}.
          </span>
        </h1>
        <h2>
          Celebra tu día con [activación comercial] en [producto genérico].
        </h2>
      </div>
    </div>
  );
}

export default Card;