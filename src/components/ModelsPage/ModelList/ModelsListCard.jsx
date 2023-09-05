import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./ModelsList.scss";

const riskColors = {
  2: "#32BEEB",
  3: "#10B981",
  4: "#F59E0B",
  5: "#B91C1C",
};

const ModelsListCard = ({ title, text, risk }) => {
  const riskColor = riskColors[risk] || "#32BEEB";

  const renderRiskCircles = () => {
    return Array.from({ length: risk }, (_, index) => (
      <div
        key={index}
        className="risk-circle"
        style={{ backgroundColor: riskColor }}
      ></div>
    ));
  };

  const firstWord = title.split(" ")[0];

  return (
    <div className="Modelcard">
      <div className="title_risk">
        <h4>
          <span className="first-word">{firstWord}</span>{" "}
          {title.split(" ").slice(1).join(" ")}
        </h4>
        <div className="risk-circles">
          <h6>Risk</h6> {renderRiskCircles()}
        </div>
      </div>
      <p>{text}</p>
      <div className="Modelcard_buttons">
        <button type="button" className="btn-bg">
          Choose
        </button>
        <button type="button" className="info btn-nobg">
          <AiOutlineInfoCircle size={16} className="icon" />
          More info
        </button>
      </div>
    </div>
  );
};

export default ModelsListCard;
