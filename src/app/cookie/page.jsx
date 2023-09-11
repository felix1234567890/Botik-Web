import CookiePageContent from "../components/PolicyPageContent/CookiePageContent"
import privacyData from "../json/privacyData.json"

const CookiePage = () => {
  return <CookiePageContent jsonData={privacyData} />
}

export default CookiePage
