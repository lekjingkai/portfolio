import React from 'react'
import PropTypes from 'prop-types'
import "./Button.css"


const Button = (props) => {
    return (
        <div class="btn hvr-grow"><img src={props.btnLogoImage} className="btnLogos"></img>{props.btnName}</div>               
    )
}

Button.propTypes = {
    btnLogoImage: PropTypes.string,
    btnName: PropTypes.string,
}

export default Button
