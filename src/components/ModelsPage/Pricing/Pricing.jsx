import React from "react";
import "./Pricing.scss";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing_container">
        <h2 className="h2Regular">
          Pricing table tollitur gratia, quae sunt vincla concordiae from{" "}
          <span className="price spancolor">49,90</span>
          <span className="spancolor">$</span> per month
        </h2>
        <div className="pricing_container_buttons">
          <button className="btn-nobg pricingbutton" type="button">
            View pricing table <i className="fa-solid fa-dollar-sign"></i>
          </button>
          <button className="btn-bg" type="button">
            Get Started <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;