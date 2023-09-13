import "./BottomCard.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const BottomCard = () => {
  return (
    <div className='bottomcard'>
      <div className='bottomcard_container'>
        <p className='subheading'>Try now</p>
        <h2 className='h2Regular'>Lorem ipsum dolor sit amet</h2>
        <button type='button' className='btn-nobg'>
          Sign up now <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  )
}

export default BottomCard
