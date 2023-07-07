import {Link} from "react-router-dom";
import HackHealthImage from "../../Components/ProjectsSection/ProjectsCard/HackHealth.mp4";
import listImage from "../LocalBuzz/icons8-square-100.png";
import "./HackHealth.css";

export default function HackHealth() {
  return (
    <div className='project1Container'>
      <h1 className='title'>HackHealth</h1>
      <p className='Welcome'>
        Welcome to the HackHealth project page. <br /> This page will show an
        overview of what it took to create LocalBuzz as a team of four in one
        week.
      </p>
      <div className='buttonContainer'>
        <button
          onClick={() => window.open("https://local-buzz.netlify.app/")}
          className='hackProjectButton'
        >
          PROJECT LINK
        </button>
      </div>

      <video
        className='LocalBuzzImage'
        src={HackHealthImage}
        controls
        autoPlay
        muted
        loop
        alt='placeholder'
      />
      <h2 className='TechStackTitle'> Tech Stack</h2>
      <div className='TechStack'>
        <p className='React'>React</p>
        <p className='NodeJS'>Node.js</p>

        <p className='ReactRouter'>React Router</p>
        <p className='TestingLibrary'>Jest</p>
      </div>
      <h2 className='ProjectOverview'>Project Overview</h2>

      <p>
        In a team of four, we have created a frontend project aimed at
        motivating users to exercise and track their steps in the modern
        work-from-home world. We have developed a manifesto that allows us to
        feel psychologically safe when working together. Additionally, we have
        devised a detailed plan for our product using Disney Ideation and
        low/high fidelity wireframes on Figma.
      </p>

      <h2>Problem</h2>

      <p>
        {" "}
        In the modern work-from-home world, individuals often face challenges
        when it comes to staying motivated and maintaining an active lifestyle.
        With the increase in sedentary behavior and the lack of physical
        activity, it has become crucial to find innovative solutions to
        encourage individuals to exercise and track their steps regularly.{""}
      </p>

      <h2>Solution</h2>

      <p className='p1'>
        {" "}
        Introducing HackHealth, a website app designed to help users achieve
        their fitness goals while positively impacting productivity and mental
        well-being. With HackHealth, users can set a weekly step target and
        easily track their daily steps. By incorporating regular physical
        activity into their routine, users can experience improved focus,
        reduced stress levels, and enhanced mood. HackHealth takes a holistic
        approach to personal health, supporting users in leading an active
        lifestyle and reaping the benefits of increased productivity and better
        mental resilience.{""}
      </p>

      <h2>What I Learned</h2>
      <div className='learnedList'>
        <p className='list'>
          <span className='listIcon'></span> Working with React states and
          passing props through components
        </p>
        <p className='list'>
          <span className='listIcon'></span> Understanding the importance of
          setting up a clear component tree
        </p>
        <p className='list'>
          <span className='listIcon'></span> Utilizing the combined brainpower
          of the group
        </p>
        <p className='list'>
          <span className='listIcon'></span> Maintaining manageable expectations
          for what could be completed within the given time
        </p>
        <p className='list'>
          <span className='listIcon'></span> Learning how to use Trello for task
          management
        </p>
        <p className='list'>
          <span className='listIcon'></span> Recognizing the importance of daily
          sprints for maintaining focus
        </p>
        <p className='list'>
          <span className='listIcon'></span> Gaining experience with merging in
          Git and resolving conflicts
        </p>
      </div>
    </div>
  );
}
