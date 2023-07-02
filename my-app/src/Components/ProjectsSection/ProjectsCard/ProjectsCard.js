import React from "react";
import "./ProjectsCard.css";
import ProjectsArray from "../ProjectsArray";
import {Link} from "react-router-dom";

export default function ProjectsCard() {
  return (
    <div>
      {ProjectsArray.map((item) => (
        <div className='ProjectsSection' key={item.id}>
          <div className='Projects'>
            <div className='ProjectItem'>
              <video
                className='ProjectImage'
                src={item.video}
                controls
                autoPlay
                muted
                loop
                alt='placeholder'
              />
              <div className='Descriptions'>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div className='Button'>
                  <Link to={item.overview}>
                    <button>PROJECT OVERVIEW</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
