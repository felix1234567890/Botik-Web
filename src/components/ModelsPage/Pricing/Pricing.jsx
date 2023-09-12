import Link from "next/link"
import "./Pricing.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faDollarSign } from "@fortawesome/free-solid-svg-icons"
const Pricing = () => {
  return (
    <div className='pricing'>
      <div className='pricing_container'>
        <h2 className='h2Regular'>
          Pricing table tollitur gratia, quae sunt vincla concordiae from{" "}
          <span className='price span-color'>49,90</span>
          <span className='span-color'>$</span> per month
        </h2>
        <div className='pricing_container_buttons'>
          <Link
            href={"/pricing"}
            className='btn-nobg pricing-button'
            type='button'
          >
            View pricing table <FontAwesomeIcon icon={faDollarSign} />
          </Link>
          <button className='btn-bg' type='button'>
            Get Started <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
