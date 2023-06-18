import React from "react";
import "./HeroText.css";
import Typewriter from "typewriter-effect";

export default function HeroText() {
  return (
    <div className='HeroText'>
      <div className='content'>
        <h1>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 200,
              cursor: "",
              strings: [
                "TOM CHAMBERLIN",
                "DEVELOPER",
                "EXPLORER",
                "DESIGNER",
                "SKIER",
              ],
            }}
          />
        </h1>

        <p>
          I am a full stack developer with a passion for creating beautiful and
          functional tech applications.
        </p>

        <button>PROJECTS</button>
      </div>

      <div class='scroll-downs'>
        <div class='mousey'>
          <div class='scroller'></div>
        </div>
      </div>
    </div>
  );
}
