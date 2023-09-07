import React from "react";
import { useParams } from "react-router-dom";
import "./NextModel.scss";
import { models_info } from "../../../json/data";

const NextModel = () => {
  const { id } = useParams();
  const currentIndex = models_info.findIndex((model) => model.subtitle === id);
  const nextIndex = (currentIndex + 1) % models_info.length;
  const nextModel = models_info[nextIndex];


  const renderRiskCircles = (width, height) => {
    return Array.from({ length: nextModel.risk }, (_, index) => (
      <div
        key={index}
        className="risk-circle"
        style={{
          backgroundColor: "#fff",
          width: `${width}px`,
          height: `${height}px`,
        }}
      ></div>
    ));
  };

  const handleNextModelClick = () => {
    const queryParams = {
      selectedModelId: nextModel.title,
    };
    const searchParams = new URLSearchParams(queryParams);
    const newUrl = `/models/${nextModel.subtitle}?${searchParams.toString()}`;
    window.location.href = newUrl;
  };

  return (
    <div className="nextmodel">
      <div className="nextmodel_container">
        <p className="subheading">{nextModel.title}</p>
        <h2 className="h2Regular">
          User testimonials vero virtutes iacere omnis necesse est voluptate
          dominante
        </h2>
        <div className="risk-circles">{renderRiskCircles(10, 10)}</div>
        <button onClick={handleNextModelClick} className="btn-nobg">
          View {nextModel.title} <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default NextModel;
