import React, { useState } from "react";
import "./Calculator.scss";
import { models_info } from "../../json/data.js";

const Calculator = ({ backgroundColor, selectedModelId }) => {
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [profit, setProfit] = useState(null);
  const [showEarnings, setShowEarnings] = useState(false);
  
  document.documentElement.style.setProperty('--calculator-background-color', backgroundColor);

  const handleInvestmentChange = (event) => {
    const inputValue = event.target.value;
    if (/^\d*\.?\d+$/.test(inputValue) && parseFloat(inputValue) >= 0) {
      setInvestmentAmount(inputValue);
    } else {
      setInvestmentAmount("");
    }
  };

  const handleCalculateProfit = () => {
    const calculatedProfit = 3870.36636;
    const parts = calculatedProfit.toFixed(2).toString().split(".");
    const formattedInteger = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const formattedProfit =
      parts.length === 2 ? `${formattedInteger}.${parts[1]}` : formattedInteger;
    setProfit(formattedProfit);
    setShowEarnings(true);
  };

  return (
    <div className="calculator">
      <div className="calculator_container">
        <h4 className="title">Dolor sit kalkulator</h4>
        <form className="calculator_container_form">
          <div className="calculator_container_form_row">
            <div className="input-group">
              <label htmlFor="models" className="paragraphs">
                Model
              </label>
              <select id="models" name="models" required defaultValue={selectedModelId}>
                <option value="" style={{ display: "none" }}>
                  Select a Model
                </option>
                {models_info.map((model, index) => (
                  <option key={index} value={model.title}>
                    {model.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="investment" className="paragraphs">
                Investment
              </label>
              <input
                type="text"
                id="investment"
                name="investment"
                placeholder="Investment Amount"
                className="input-icon"
                maxLength="20"
                value={investmentAmount}
                onChange={handleInvestmentChange}
                required
              />
            </div>
          </div>
          <div className="calculator_container_form_row">
            <div className="input-group">
              <label htmlFor="startdate" className="paragraphs">
                Start date
              </label>
              <input
                type="date"
                id="startdate"
                name="startdate"
                placeholder="Enter start date"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="enddate" className="paragraphs">
                End date
              </label>
              <input
                type="date"
                id="enddate"
                name="enddate"
                placeholder="Enter end date"
                required
              />
            </div>
          </div>
        </form>
        <button
          type="button"
          className="btn-bg"
          onClick={handleCalculateProfit}
        >
          Calculate your profit
        </button>
        <div
          className={`calculator_container_earnings ${
            showEarnings ? "show" : ""
          }`}
        >
          <h4 className="earnings_title">Your estimated earnings</h4>
          <h4 className="earnings">{profit} $</h4>
        </div>

        <h5 className="h5Regular">Comprehensum, quod cognitum non habet?</h5>
        <button type="button" className="btn-bg btn-next">
          Get Started <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Calculator;
