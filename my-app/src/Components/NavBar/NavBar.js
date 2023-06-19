import "./NavBar.css";
import Portrait from "../../Icons/website image2.png";

export default function NavBar(props) {
  return (
    <div className='NavBar'>
      <div className='NavBar-Left-side'>
        <img src={Portrait} alt='logo' />
        <h2>TOM CHAMBERLIN</h2>
      </div>
      <div className='NavBar-Links'>
        <ul>
          <li>HOME</li>
          <li onClick={props.scrollToAbout}>ABOUT</li>
          <li onClick={props.scrollToProjects}> PROJECTS</li>
          <li onClick={props.scrollToContact}>CONTACT</li>
        </ul>
      </div>
    </div>
  );
}
