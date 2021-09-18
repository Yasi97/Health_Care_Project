import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./display.css";

const Animation = (text) => {
  const [fadeProp, setFadeProp] = useState({
    fade: "fade-in",
  });

  return (
    <>
      <p className={fadeProp.fade}>{text}</p>
    </>
  );
};

Animation.defaultProps = {
  text: "Your health is our responsibility",
};

Animation.PropTypess = {
  text: PropTypes.string,
};

export default Animation;
