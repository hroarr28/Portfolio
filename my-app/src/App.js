import {useRef} from "react";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";

import "./App.css";

export function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  function scrollToAbout() {
    aboutRef.current.scrollIntoView({behavior: "smooth"});
  }

  function scrollToProjects() {
    projectsRef.current.scrollIntoView({behavior: "smooth"});
  }

  function scrollToContact() {
    contactRef.current.scrollIntoView({behavior: "smooth"});
  }

  return (
    <div className='App'>
      <NavBar
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
        scrollToAbout={scrollToAbout}
      />
      <HomePage
        contactRef={contactRef}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        scrollToAbout={scrollToAbout}
      />
    </div>
  );
}

export default App;
