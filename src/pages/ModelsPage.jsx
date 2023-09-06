import ModelsList from "../components/ModelsPage/ModelList/ModelsList"
import Strategy from "../components/ModelsPage/Strategy/Strategy"
import Calculator from "../components/Calculator/Calculator";
import Pricing from "../components/ModelsPage/Pricing/Pricing";
import B2BPlan from "../components/ModelsPage/B2BPlan/B2BPlan";

const ModelsPage = () => {
  return (
    <>
      <ModelsList />
      <Strategy />
      <Calculator backgroundColor="#F8FAFC"/>
      <Pricing />
      <B2BPlan />
    </>
  )
}

export default ModelsPage
