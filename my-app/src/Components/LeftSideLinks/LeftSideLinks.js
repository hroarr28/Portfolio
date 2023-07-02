import {useState, use} from "react";
import LinkedIn from "../../Icons/icons8-linked-in-100.png";
import GitHub from "../../Icons/icons8-github-100.png";
import LinkedInBlue from "../../Icons/icons8-linked-in-blue100.png";
import GitHubBlue from "../../Icons/icons8-github-blue100.png";
import "./LeftSideLinks.css";

export default function LeftSideLinks() {
  const [hoverLinkedIn, setHoverLinkedIn] = useState(false);
  const [hoverGitHub, setHoverGitHub] = useState(false);

  function handleMouseEnterGH() {
    setHoverGitHub(true);
  }

  function handleMouseLeaveGH() {
    setHoverGitHub(false);
  }

  function handleMouseEnterLI() {
    setHoverLinkedIn(true);
  }

  function handleMouseLeaveLI() {
    setHoverLinkedIn(false);
  }

  return (
    <div className='container'>
      <div
        className='LI'
        onMouseEnter={handleMouseEnterLI}
        onMouseLeave={handleMouseLeaveLI}
      >
        <img
          onClick={() =>
            window.open("https://www.linkedin.com/in/tom-chamberlin-9a019960/")
          }
          src={hoverLinkedIn ? LinkedInBlue : LinkedIn}
          alt='LinkedIn'
          className='linkedin'
        />
      </div>
      <div
        className='GH'
        onMouseEnter={handleMouseEnterGH}
        onMouseLeave={handleMouseLeaveGH}
      >
        <img
          onClick={() => window.open("https://github.com/hroarr28")}
          src={hoverGitHub ? GitHubBlue : GitHub}
          alt='LinkedIn'
          className='linkedin'
        />
      </div>
    </div>
  );
}
