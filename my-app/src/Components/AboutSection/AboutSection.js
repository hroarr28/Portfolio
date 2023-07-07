import "./AboutSection.css";

export default function AboutSection() {
  return (
    <div className='AboutContainer'>
      <div className='AboutTitle'>
        <h1>
          <span style={{color: "#00FFFF"}}>.01&nbsp; </span>ABOUT ME
        </h1>
      </div>
      <div className='AboutSection'>
        <div className='AboutSection-Left'>
          <h2>My Story</h2>
          <p className='MyStory'>
            As a Junior Full-Stack Developer, my diverse background in 3D
            animation, graphic design, and ski instructing brings a unique
            perspective to the tech industry.
          </p>
          <p className='MyStory'>
            I believe in technology's potential to solve real-world problems.
            With strong teamwork and problem-solving skills, I thrive in
            collaborative environments. I effectively communicate complex
            technical concepts to both technical and non-technical co-workers.
          </p>
          <p className='MyStory'>
            Additionally, my experience as a ski instructor has honed my ability
            to communicate with individuals of various ages and backgrounds on a
            daily basis.
          </p>
          <p className='MyStory'>
            I'm seeking to apply my skills and contribute to meaningful
            projects. I am excited about the possibilities in the dynamic tech
            industry.
          </p>
          <button className='ContactButton'>CONTACT</button>
        </div>
        <div className='AboutSection-Right'>
          <h2>Skills</h2>
          <div className='AboutSection-Right-Top'>
            <p className='SkillItem'>HTML</p>
            <p className='SkillItem'>CSS</p>
            <p className='SkillItem'>JavaScript</p>
            <p className='SkillItem'>React</p>
            <p className='SkillItem'>Node.js</p>
            <p className='SkillItem'>Express</p>
            <p className='SkillItem'>MongoDB</p>
            <p className='SkillItem'>Git</p>
            <p className='SkillItem'>GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
}
