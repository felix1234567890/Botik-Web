import StrategyCard from "./StrategyCard"
import { strategy_info as strategyInfo } from "../../../json/data"
import "./Strategy.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const Strategy = () => {
  return (
    <div className='strategy'>
      <div className='strategy_container'>
        <h1 className='title'>Optim vs. Hybrid strategy</h1>
        <div className='strategy_container_boxes'>
          {strategyInfo.map((strategy, index) => (
            <StrategyCard
              key={index}
              title={strategy.title}
              icon={strategy.icon}
              text={strategy.text}
            />
          ))}
        </div>
        <div className='strategy_container_bottomSection'>
          <h5 className='h5Regular'>Comprehensum, quod cognitum non habet?</h5>
          <button type='button' className='btn-bg'>
            Get Started <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Strategy
