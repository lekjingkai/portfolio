import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";
import momentumImage from "../assets/momentum-clone.png";



const Projects = () => {
  return (
    <div className="projectContainer">
      <ProjectCard
        githubLink={"https://github.com/lekjingkai/momentum-clone"}
        projectLink={"https://lekjingkai.github.io/momentum-clone"}
        imageSrc={momentumImage}
        projTitle={"Momentum Clone"}
        projDesc={
          "A productivity app(Weather, Todo, Search) clone adapted from the Momentum App extension for Chrome(Best viewed on desktop). Made using ReactJS"
        }
      />
    </div>
  );
};

export default Projects;
