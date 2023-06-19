import React from "react";
import "./HomePage.css";
import HeroText from "../HeroText/HeroText";
import LeftSideLinks from "../LeftSideLinks/LeftSideLinks";
import AboutSection from "../AboutSection/AboutSection";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import ContactSection from "../ContactSection/ContactSection";
import Footer from "../Footer/Footer";

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
      <div ref={props.projectsRef} className='projects-container'>
        <ProjectsSection />
      </div>
      <div ref={props.contactRef} className='contact-container'>
        <ContactSection />
      </div>
      <div className='footer-container'>
        <Footer />
      </div>
    </>
  );
}
