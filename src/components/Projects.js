import React from 'react'
import ProjectCard from './ProjectCard'
import "./Projects.css"
import testimage3 from './assets/long-wallpaper.jpg'

const Projects = () => {
const descExample = "This is sample project made using sample tools (just a description)"

    return (
        <div className="projectContainer">
            <ProjectCard projectLink={"https://www.google.com/"} imageSrc={testimage3} projTitle={"Project Title Placeholder"} projDesc={descExample}></ProjectCard>
        </div>
    )
}

export default Projects
