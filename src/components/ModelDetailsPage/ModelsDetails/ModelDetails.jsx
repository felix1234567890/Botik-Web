import React from "react"
import { useParams } from "react-router-dom"
import "./ModelDetails.scss"
import { models_info as modelsInfo } from "../../../json/data"
import Calculator from "../../Calculator/Calculator"
import { riskColors } from "../../../utils"

const ModelDetails = () => {
  const { id } = useParams()
  const model = modelsInfo.find((model) => model.subtitle === id)
  const riskColor = riskColors[model?.risk] || "#32BEEB"

  const renderRiskCircles = (width, height) => {
    return Array.from({ length: model?.risk }, (_, index) => (
      <div
        key={index}
        className='risk-circle'
        style={{
          backgroundColor: riskColor,
          width: `${width}px`,
          height: `${height}px`
        }}
      ></div>
    ))
  }

  return (
    <>
      <div className="modeldetails">
        <div className="modeldetails_container">
          <p className="model-name subheading">{model.subtitle}</p>
          <h1 className="title">
            Modestiam vel temperantiam, quae est moderatio
          </h1>
          <div className="risk-circles">{renderRiskCircles(10, 10)}</div>
          <p className="subheading long-text">
            Transfer idem ad modestiam vel temperantiam, quae est moderatio
            cupiditatum rationi oboediens. Quod, inquit, quamquam voluptatibus
            quibusdam est saepe iucundius, tamen expetitur propter voluptatem.
            De illis, cum volemus. Sed nimis multa. Mihi enim satis est, ipsis
            non satis. Pauca mutat vel plura sane; Bork Tibi hoc incredibile,
            quod beatissimum. Comprehensum, quod cognitum non habet?
          </p>
          <button type='button' className='btn-bg'>
            Get Started <i className='fa-solid fa-arrow-right'></i>
          </button>
          <div className='modeldetails_container_boxes'>
            <div className='box'>
              <h5 className='h5Regular'>
                Comprehensum quod cognitum non habet
              </h5>
            </div>
            <div className='box'>
              <h5 className='h5Regular'>Risk</h5>
              <div className='risk-circles'>{renderRiskCircles(18, 18)}</div>
            </div>
            <div className='box'>
              <h5 className='h5Regular'>Subscription</h5>
              <h5 className='h5Regular'>
                <span>from 49,90$</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <Calculator
        selectedModelId={model?.title}
        backgroundColor='#FFF'
        modelCalculator={true}
      />
    </>
  )
}

export default ModelDetails
