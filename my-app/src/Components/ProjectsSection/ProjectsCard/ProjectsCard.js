import "./ProjectsCard.css";

export default function ProjectsCard() {
  return (
    <div>
      <div className='ProjectsSection'>
        <div className='Projects'>
          <div className='ProjectItem'>
            <img
              className='ProjectImage'
              src='https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'
              alt='placeholder'
            />
            <div className='Descriptions'>
              <h2>Placeholder</h2>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
              </p>
              <div className='Button'>
                <button>PLACEHOLDER</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
