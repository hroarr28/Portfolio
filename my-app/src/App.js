import HomePage from "./Components/HomePage/HomePage";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import {useRef} from "react";

export function App() {
  const aboutRef = useRef(null);

  function scrollToAbout() {
    aboutRef.current.scrollIntoView({behavior: "smooth"});
  }

  return (
    <div className='App'>
      <NavBar scrollToAbout={scrollToAbout} />
      <HomePage aboutRef={aboutRef} scrollToAbout={scrollToAbout} />
    </div>
  );
}

export default App;
