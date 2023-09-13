import React from "react";
import "./Features.scss";
import { features_info } from "../../json/data";
import FeaturesBox from "./FeaturesBox";

const Features = () => {
  return (
    <div className="features">
      <div className="features_container">
        <h2 className="h2Regular">
          Tollitur beneficium, tollitur gratia, quae sunt vincla concordiae
        </h2>
        <div className="features_container_boxes">
          {features_info.map((feature, index) => (
            <FeaturesBox
              key={index}
              title={feature.title}
              icon={feature.icon}
              text={feature.text}
            />
          ))}
        </div>
        <button type="button" className="btn-bg">
          Get Started <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Features;
