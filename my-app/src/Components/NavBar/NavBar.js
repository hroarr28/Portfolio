import "./NavBar.css";
import Portrait from "../../Icons/website image2.png";

export default function NavBar() {
  return (
    <div className='NavBar'>
      <div className='NavBar-Left-side'>
        <img src={Portrait} alt='logo' />
        <h2>TOM CHAMBERLIN</h2>
      </div>
      <div className='NavBar-Links'>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
}
