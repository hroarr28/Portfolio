import React from "react";
import "./HomePage.css";
import HeroText from "../HeroText/HeroText";
import LeftSideLinks from "../LeftSideLinks/LeftSideLinks";

export default function HomePage() {
  return (
    <div className='HomePage'>
      <div className='left-container'>
        <LeftSideLinks />
      </div>
      <div className='right-container'>
        <HeroText />
      </div>
    </div>
  );
}
