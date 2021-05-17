import React from 'react'
import PropTypes from 'prop-types'
import "../styles/ProjectCard.css"

const ProjectCard = (props) => {
    return (
      <div target="_blank" rel="noreferrer" className="cardContainer">
        <div className="card">
          <div className="card-image">
            <div
              className="card-background-img"
              style={{ backgroundImage: `url(${props.imageSrc})` }}
            ></div>
            <div className="card-content">
              <div className="card-header">
                <h2 className="card-title">{props.projTitle}</h2>
              </div>
              <div className="card-body">
                <div className="card-text">
                  <p>{props.projDesc}</p>
                </div>
                <div className="card-links">
                <a
                    href={props.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="iconButton"
                  >
                    Website<i class="fa fa-external-link-square" aria-hidden="true"></i>
                  </a>
                  <a
                    href={props.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="iconButton"
                  >
                    Github<i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
