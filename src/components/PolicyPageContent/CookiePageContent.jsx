import "./PolicyPageContent.scss"

const CookiePageContent = ({ jsonData }) => {
  const firstcookieIndex = jsonData.findIndex(
    (item) => item.navigation === "cookie"
  )
  const cookieTitle =
    firstcookieIndex !== -1 ? jsonData[firstcookieIndex].navigationTitle : ""

  const cookieData = jsonData.filter((item) => item.navigation === "cookie")

  return (
    <div className='policypagecontent'>
      <div className='policypagecontent_container'>
        {cookieTitle && (
          <div className='policypagecontent_container_title'>
            <h1 className='title page-title'>{cookieTitle}</h1>
          </div>
        )}
        <div className='policypagecontent_container_text'>
          {cookieData.map((item, index) => (
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

export default CookiePageContent
