import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";
import { useState, useEffect } from "react";
const Projects = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(process.env.REACT_APP_JSON_LOCATION)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.projects);
      })
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="projectContainer">
      {data && data.length > 0 ? (
        data.map((item) => (
          <ProjectCard
            key={item.id}
            githubLink={item.github}
            projectLink={item.link}
            imageSrc={require(`../assets/${item.image}`).default}
            projTitle={item.name}
            projDesc={item.description}
          />
        ))
      ) : (
        <p>No projects to show!</p>
      )}
    </div>
  );
};

export default Projects;
