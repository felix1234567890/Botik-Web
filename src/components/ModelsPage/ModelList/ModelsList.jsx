import React from "react";
import ModelsListCard from "./ModelsListCard";
import "./ModelsList.scss";
import { models_info } from "../../../json/data";

const ModelsList = () => {
  return (
    <div className="modelsList">
      <div className="modelsList_container">
        <h1 className="title">Consequens enim est et post oritur, ut dixi</h1>
        <p className="subheading s-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi.
        </p>
        <div className="list">
          {models_info.map((model, index) => (
            <ModelsListCard
              key={index}
              id={`${model.subtitle}`}
              title={model.subtitle}
              risk={model.risk}
              text={model.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModelsList;
