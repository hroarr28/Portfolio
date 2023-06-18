import React from "react";
import "./HomePage.css";
import HeroText from "../HeroText/HeroText";
import LeftSideLinks from "../LeftSideLinks/LeftSideLinks";
import AboutSection from "../AboutSection/AboutSection";

export default function HomePage(props) {
  return (
    <>
      <div className='HomePage'>
        <div className='left-container'>
          <LeftSideLinks />
        </div>
        <div className='right-container'>
          <HeroText />
        </div>
      </div>

      <div ref={props.aboutRef} className='about-container'>
        <AboutSection />
      </div>
    </>
  );
}
