import React from "react"
import PricingPageHero from "../components/PricingPage/PricingPageHero/PricingPageHero"
import PricingTable from "../components/PricingPage/PricingTable/PricingTable"
import B2BPlan from "../components/ModelsPage/B2BPlan/B2BPlan"

const PricingPage = () => {
  return (
    <>
      <PricingPageHero />
      <PricingTable />
      <B2BPlan />
    </>
  )
}

export default PricingPage
