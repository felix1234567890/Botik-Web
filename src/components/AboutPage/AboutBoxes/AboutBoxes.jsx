import React from "react";
import "./AboutBoxes.scss";

const Box = ({ text }) => (
  <div className="box">
    <h5 className="h5Regular">{text}</h5>
  </div>
);

const AboutBoxes = ({ boxContents }) => {
  return (
    <div className="aboutboxes">
      <div className="aboutboxes_container">
        <div className="aboutboxes_container_boxes">
          {boxContents.slice(0, 3).map((content, index) => (
            <Box key={index} text={content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutBoxes;
