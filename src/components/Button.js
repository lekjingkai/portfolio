import React from "react";
import PropTypes from "prop-types";
import "../styles/Button.css";

const Button = (props) => {
  return (
    <div className="btn hvr-grow">
      <img
        src={props.btnLogoImage}
        alt={props.btnName}
        className="btnLogos"
      ></img>
      {props.btnName}
    </div>
  );
};

Button.propTypes = {
  btnLogoImage: PropTypes.string,
  btnName: PropTypes.string,
};

export default Button;
