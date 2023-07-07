import localBuzz from "../ProjectsSection/ProjectsCard/LocalBuzzCropped.mp4";
import hackHealth from "../ProjectsSection/ProjectsCard/HackHealth.mp4";

const ProjectsArray = [
  {
    id: 1,
    title: "Local Buzz",
    description:
      "A solution to counter the growing disconnection in our world. Designed to bring people together, it fosters lasting connections and a sense of community in your local area. The app allows users to create and join events, it shows events locally using geolocation. It also features google maps integration, allowing users to see the location of the event in comparison to their current location.",
    video: localBuzz,
    overview: "/project1",
  },

  {
    id: 2,
    title: "HackHealth",
    description:
      "HackHealth is a user-friendly web application designed to help individuals achieve their fitness goals by tracking their daily steps and providing motivation along the way. With HackHealth, users can create a username, set a weekly step goal, and log in to record their daily steps.",
    video: hackHealth,
    overview: "/project2",
  },
];

export default ProjectsArray;
