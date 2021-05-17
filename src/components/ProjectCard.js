import React from 'react'
import PropTypes from 'prop-types'

// import "../styles/ProjectCard.css"
import "../styles/ProjectCard.css"
import { useState, useEffect } from "react";

const ProjectCard = (props) => {
    const [hover, setHover] = useState(false);


    return (
      <a href={props.projectLink} target="_blank" className="cardContainer">
        <div class="card">
          <div class="card-image">
            <div
              className="card-background-img"
              style={{ backgroundImage: `url(${props.imageSrc})` }}
            ></div>
            <div class="card-content">
              <div class="card-header">
                <h2 class="card-title">{props.projTitle}</h2>
              </div>
              <div class="card-body">
                <div className="card-text">
                  <p>{props.projDesc}</p>
                </div>
                <div className="card-links">
                  <a
                    href={props.githubLink}
                    target="_blank"
                    className="iconButton"
                  >
                    Github<i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    );
}

ProjectCard.propTypes = {
    projectLink: PropTypes.string,
    githubLink: PropTypes.string,
    imageSrc: PropTypes.string,
    projTitle: PropTypes.string,
    projDesc: PropTypes.string,
}


export default ProjectCard
