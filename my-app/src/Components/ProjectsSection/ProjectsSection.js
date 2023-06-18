import ProjectsCard from "./ProjectsCard/ProjectsCard";
import "./ProjectsSection.css";

export default function ProjectsSection() {
  return (
    <div className='ProjectBackground'>
      <div className='ProjectTitle'>
        <h1>
          <span style={{color: "#00FFFF"}}>.02&nbsp; </span>PROJECTS
        </h1>
      </div>
      <div className='ProjectsSection'>
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </div>
  );
}
