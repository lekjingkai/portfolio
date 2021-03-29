import React from "react";
import PropTypes from "prop-types";
import "./TextBody.css";

const TextBody = ({ headerText, text, margintopVal }) => {
  return (
        <div className="textContainer" style={{marginTop: margintopVal}}>
          <h2>{headerText}</h2>
          <p>{text}</p>
    </div>
  );
};

TextBody.defaultProps = {
  headerText: 'Placeholder header',
  text: 'Placeholder text',
}

TextBody.propTypes = {
  headerText: PropTypes.string,
  text: PropTypes.string,
  margintopVal: PropTypes.string,
};

export default TextBody;
