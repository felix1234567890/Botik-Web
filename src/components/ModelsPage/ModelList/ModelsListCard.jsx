import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { riskColors } from "../../../utils"
import "./ModelsList.scss";

const ModelsListCard = ({ title, text, risk, id }) => {
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

  const [firstWord, secondWord] = title.split(" ");

  return (
    <div className="Modelcard">
      <div className="title_risk">
        <h4>
          <span className="first-word">{firstWord} </span>
          {secondWord}
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
        <Link to={`/models/${id}`} className="info btn-nobg">
          <AiOutlineInfoCircle size={16} className="icon" />
          More info
        </Link>
      </div>
    </div>
  );
};

export default ModelsListCard;
