import {useRef} from "react";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import LocalBuzz from "./Components/LocalBuzz/LocalBuzz";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import HackHealth from "./Components/HackHealth/HackHealth";

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
    <>
      <BrowserRouter>
        <NavBar
          className='App'
          scrollToProjects={scrollToProjects}
          scrollToContact={scrollToContact}
          scrollToAbout={scrollToAbout}
        />
        <Routes>
          <Route
            path='/'
            element={
              <HomePage
                contactRef={contactRef}
                projectsRef={projectsRef}
                aboutRef={aboutRef}
                scrollToAbout={scrollToAbout}
                scrollToProjects={scrollToProjects}
                scrollToContact={scrollToContact}
              />
            }
          />

          <Route path='/project1' element={<LocalBuzz />} />
          <Route path='/project2' element={<HackHealth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
