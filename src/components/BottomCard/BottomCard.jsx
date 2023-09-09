import React from "react"
import "./BottomCard.scss"

const BottomCard = () => {
  return (
    <div className='bottomcard'>
      <div className='bottomcard_container'>
        <p className='subheading'>Try now</p>
        <h2 className='h2Regular'>Lorem ipsum dolor sit amet</h2>
        <button type='button' className='btn-nobg'>
          Sign up now <i className='fa-solid fa-arrow-right'></i>
        </button>
      </div>
    </div>
  )
}

export default BottomCard
