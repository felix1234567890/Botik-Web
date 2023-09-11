import PolicyPageContent from "../components/PolicyPageContent/PolicyPageContent"
import privacyData from "../json/privacyData.json"

const PolicyPage = () => {
  return <PolicyPageContent jsonData={privacyData} />
}

export default PolicyPage
