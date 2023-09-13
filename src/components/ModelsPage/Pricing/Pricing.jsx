import React from "react";
import { Link } from "react-router-dom";
import "./Pricing.scss";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing_container">
        <h2 className="h2Regular">
          Pricing table tollitur gratia, quae sunt vincla concordiae from{" "}
          <span className="price span-color">49,90</span>
          <span className="span-color">$</span> per month
        </h2>
        <div className="pricing_container_buttons">
          <Link to={'/pricing'} className="btn-nobg pricing-button" type="button">
            View pricing table <i className="fa-solid fa-dollar-sign"></i>
          </Link>
          <button className="btn-bg" type="button">
            Get Started <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
