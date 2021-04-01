import React from 'react'
import ProjectCard from './ProjectCard'
import "./Projects.css"
import testimage3 from './assets/long-wallpaper.jpg'

const Projects = () => {


    return (
        <div className="projectContainer">
            <ProjectCard projectLink={"http://lekjingkai.github.io/travel"} imageSrc={testimage3} projTitle={"Travel Website (In Progress)"} projDesc={"A travel website made using React"}></ProjectCard>
        </div>
    )
}

export default Projects
