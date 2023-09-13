import React from "react"
import "./PolicyPageContent.scss"

const PolicyPageContent = ({ jsonData }) => {
  const firstprivacyIndex = jsonData.findIndex(
    (item) => item.navigation === "privacy"
  )
  const privacyTitle =
    firstprivacyIndex !== -1 ? jsonData[firstprivacyIndex].navigationTitle : ""

  const privacyData = jsonData.filter(
    (item) =>
      item.navigation === "privacy"
  )

  return (
    <div className='policypagecontent'>
      <div className='policypagecontent_container'>
        {privacyTitle && (
          <div className='policypagecontent_container_title'>
            <h1 className='title pageTitle'>{privacyTitle}</h1>
          </div>
        )}
        <div className='policypagecontent_container_text'>
          {privacyData.map((item, index) => (
            <div key={index}>
              <h4 className={item.maintitle ? "h4Regular" : "h6Regular"}>
                {item.title}
              </h4>
              <p className='subheading'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PolicyPageContent
