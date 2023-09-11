'use client'
import  { useState } from "react";
import Link from "next/link";
import "./AboutModel.scss";

const AboutModel = ({ choices, backgroundcolor }) => {
  const [selectedChoice, setSelectedChoice] = useState(choices[0].title);

  return (
    <div className="about" style={{background: backgroundcolor}}>
      <div className="about_container">
        <h2 className="h2Regular">
          Transfer idem ad modestiam vel temperantiam, quae est moderatio
          cupiditatum rationi oboediens
        </h2>
        <ul>
          {choices.map((choice, index) => (
            <li key={index}
                onClick={() => setSelectedChoice(choice.title)}
                className={selectedChoice === choice.title ? "selected" : ""}
              >
                {choice.title}
      
            </li>
          ))}
        </ul>
        {choices.map((choice, index) => (
          <div key={index} style={{ display: selectedChoice === choice.title ? "flex" : "none" }} className="text-box">
            <p className="subheading">{choice.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutModel;
