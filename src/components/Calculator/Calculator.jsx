import React, { useState } from "react"
import "./Calculator.scss"
import { models_info } from "../../json/data"

const Calculator = ({ backgroundColor, selectedModelId, modelCalculator = false }) => {
  const [investmentAmount, setInvestmentAmount] = useState("")
  const [profit, setProfit] = useState(null)
  const [showEarnings, setShowEarnings] = useState(false)

  const handleInvestmentChange = (event) => {
    const inputValue = event.target.value
    if (/^\d*\.?\d+$/.test(inputValue) && parseFloat(inputValue) >= 0) {
      setInvestmentAmount(inputValue)
    } else {
      setInvestmentAmount("")
    }
  }

  const handleCalculateProfit = () => {
    const calculatedProfit = 3870.36636
    const formattedProfit = calculatedProfit.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })
    setProfit(formattedProfit)
    setShowEarnings(true)
  }

  return (
    <div className='calculator' style={{ background: backgroundColor }}>
      <div className='calculator_container'>
        <h4 className='title'>Dolor sit kalkulator</h4>
        <form className='calculator_container_form'>
          <div className='calculator_container_form_row'>
            <div className='input-group'>
              <label htmlFor='models' className='paragraphs'>
                Model
              </label>
              <select
                id='models'
                name='models'
                className='paragraphs'
                required
                defaultValue={selectedModelId}
              >
                <option value='' style={{ display: "none" }}>
                  Select a Model
                </option>
                {modelCalculator
                  ? models_info.map((model, index) => (
                      <option
                        key={index}
                        value={model.title}
                        style={{
                          display:
                            selectedModelId === model.title ? "block" : "none"
                        }}
                      >
                        {model.title}
                      </option>
                    ))
                  : models_info.map((model, index) => (
                      <option key={index} value={model.title}>
                        {model.title}
                      </option>
                    ))}
              </select>
            </div>
            <div className='input-group'>
              <label htmlFor='investment' className='paragraphs'>
                Investment
              </label>
              <input
                type='text'
                id='investment'
                name='investment'
                placeholder='Investment Amount'
                className='input-icon paragraphs'
                maxLength='20'
                value={investmentAmount}
                onChange={handleInvestmentChange}
                required
              />
            </div>
          </div>
          <div className='calculator_container_form_row'>
            <div className='input-group'>
              <label htmlFor='startdate' className='paragraphs'>
                Start date
              </label>
              <input
                type='date'
                id='startdate'
                name='startdate'
                placeholder='Enter start date'
                className='paragraphs'
                required
              />
            </div>
            <div className='input-group'>
              <label htmlFor='enddate' className='paragraphs'>
                End date
              </label>
              <input
                type='date'
                id='enddate'
                name='enddate'
                placeholder='Enter end date'
                className='paragraphs'
                required
              />
            </div>
          </div>
        </form>
        <button
          type='button'
          className='btn-bg'
          onClick={handleCalculateProfit}
        >
          Calculate your profit
        </button>
        <div
          className={`calculator_container_earnings ${
            showEarnings ? "show" : ""
          }`}
        >
          <h4 className='earnings_title'>Your estimated earnings</h4>
          <h4 className='earnings'>{profit}</h4>
        </div>

        <h5 className='h5Regular'>Comprehensum, quod cognitum non habet?</h5>
        <button type='button' className='btn-bg btn-next'>
          Get Started <i className='fa-solid fa-arrow-right'></i>
        </button>
      </div>
    </div>
  )
}

export default Calculator
