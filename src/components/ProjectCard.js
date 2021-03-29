import React from 'react'
import PropTypes from 'prop-types'

import "./ProjectCard.css"

const ProjectCard = (props) => {
    return (
        <a href={props.projectLink} target="_blank" className="cardContainer">
            <div className="hvr-underline-from-center"></div>
                        <div className="cardGradient"></div>
            <img src={props.imageSrc}></img>
            <div className="cardText">
            <h2>{props.projTitle}</h2>
            <p>{props.projDesc}</p>
            </div>
        </a>

    )
}

ProjectCard.propTypes = {
    projectLink: PropTypes.string,
    imageSrc: PropTypes.string,
    projTitle: PropTypes.string,
    projDesc: PropTypes.string,
}


export default ProjectCard
