import "./LocalBuzz.css";
import {Link} from "react-router-dom";
import LocalBuzzImage from "../../Components/ProjectsSection/ProjectsCard/LocalBuzzCropped.mp4";
import listImage from "./icons8-square-100.png";

export default function LocalBuzz() {
  let url = "local-buzz.netlify.app";

  return (
    <div className='project1Container'>
      <h1 className='title'>LocalBuzz</h1>
      <p className='Welcome'>
        Welcome to the LocalBuzz project page. <br /> This page will show an
        overview of what it took to create LocalBuzz as a team of six
      </p>
      <Link to={url}>
        <button className='projectButton'>PROJECT LINK</button>
      </Link>
      <video
        className='LocalBuzzImage'
        src={LocalBuzzImage}
        controls
        autoPlay
        muted
        loop
        alt='placeholder'
      />
      <h2 className='TechStackTitle'> Tech Stack</h2>
      <div className='TechStack'>
        <p className='MongoDB'>MongoDB</p>
        <p className='Express'>Express</p>
        <p className='React'>React</p>
        <p className='NodeJS'>Node.js</p>

        <p className='ReactRouter'>React Router</p>
        <p className='TestingLibrary'>Testing Library</p>
      </div>
      <h2 className='ProjectOverview'>Project Overview</h2>

      <p>
        In a team of six we created a full stack project working to tackle the
        lack of connectivity and lonelyness in the modern world. It was
        important to create a robust manifesto that allowed us to work together
        effectively. We made sure to take on an agile approach and made changes
        to the project based off frequent feedback.
      </p>

      <h2>Problem</h2>

      <p>
        {" "}
        In today's fast-paced and digital world, fostering meaningful community
        engagement and connection can be a challenge. People often feel
        disconnected from their local communities, lacking opportunities to
        connect, collaborate, and contribute to the betterment of their
        neighbourhoods.{""}
      </p>

      <h2>Solution</h2>

      <p className='p1'>
        {" "}
        Introducing LocalBuzz a mobile-focused app designed to enhance your
        local experience. Our app enables you to effortlessly discover exciting
        events happening in your area using geolocation. Whether you prefer
        scrolling through or searching for specific events, LocalBuzz has got
        you covered. You can join events that pique your interest and even
        create your own events to bring people together.{""}
      </p>

      <p className='p2'>
        {" "}
        By focusing on your local area, LocalBuzz aims to foster meaningful
        friendships and connections within your community. We believe that by
        connecting individuals with shared interests and facilitating offline
        interactions, we can help create lasting bonds that enrich lives and
        strengthen the sense of belonging.{""}
      </p>

      <p className='p3'>
        {" "}
        Experience the power of community engagement with LocalBuzz and unlock a
        world of opportunities right in your neighborhood.{" "}
      </p>

      <h2>What I Learned</h2>
      <div className='learnedList'>
        <p className='list'>
          <span className='listIcon'></span> A deeper understanding of React and
          working with states
        </p>
        <p className='list'>
          <span className='listIcon'></span> The importance of a strong
          manifesto in project development
        </p>
        <p className='list'>
          <span className='listIcon'></span> The power of collaboration within a
          great team
        </p>
        <p className='list'>
          <span className='listIcon'></span> Utilizing MongoDB for creating and
          managing databases
        </p>
        <p className='list'>
          <span className='listIcon'></span> The significance of thorough
          documentation
        </p>
        <p className='list'>
          <span className='listIcon'></span> The value of an Agile working
          process
        </p>
        <p className='list'>
          <span className='listIcon'></span> Effective use of Trello to complete
          tasks
        </p>
        <p className='list'>
          <span className='listIcon'></span> Effective communication and
          collaboration using tools like Slack
        </p>
        <p className='list'>
          <span className='listIcon'></span> Version control and collaborative
          coding using Github
        </p>
        <p className='list'>
          <span className='listIcon'></span> Implementing responsive design for
          a seamless user experience across different devices
        </p>
        <p className='list'>
          <span className='listIcon'></span> Writing unit tests for code quality
          and reliability
        </p>
      </div>
    </div>
  );
}
