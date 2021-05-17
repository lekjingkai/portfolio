import React from 'react'
import PropTypes from "prop-types";
import "../styles/ContentContainer.css"



const contentContainer = (props) => {
    return (
        <div className="contentContainer">
            <h1 className="contentTitle">{props.title}</h1>
            {props.children}
        </div>
    )
}

contentContainer.propTypes = {
    title: PropTypes.string,
  };

export default contentContainer
