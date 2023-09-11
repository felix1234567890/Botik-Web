import "./PolicyPageContent.scss"

const TermsPageContent = ({ jsonData }) => {
  const firsttermsIndex = jsonData.findIndex(
    (item) => item.navigation === "terms"
  )
  const termsTitle =
    firsttermsIndex !== -1 ? jsonData[firsttermsIndex].navigationTitle : ""

  const termsData = jsonData.filter(
    (item) =>
      item.navigation === "terms"
  )

  return (
    <div className='policypagecontent'>
      <div className='policypagecontent_container'>
        {termsTitle && (
          <div className='policypagecontent_container_title'>
            <h1 className='title pageTitle'>{termsTitle}</h1>
          </div>
        )}
        <div className='policypagecontent_container_text'>
          {termsData.map((item, index) => (
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

export default TermsPageContent
