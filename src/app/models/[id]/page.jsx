'use client'
import ModelDetails from "../../../components/ModelDetailsPage/ModelsDetails/ModelDetails"
import AboutModel from "../../../components/ModelDetailsPage/AboutModel/AboutModel"
import Pricing from "../../../components/ModelsPage/Pricing/Pricing"
import Features from "../../../components/Features/Features"
import Testimonials from "../../../components/Testimonials/Testimonials"
import NextModel from "../../../components/ModelDetailsPage/NextModel/NextModel"

const ModelsDetailsPage = () => {
  return (
    <>
      <ModelDetails />
      <AboutModel
        backgroundcolor='#f8fafc'
        choices={[
          {
            title: "General model info",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat aequius Triarium aliquid de dissensione nostra iudicare. Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Praeteritis, inquit, gaudeo. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Itaque nostrum est-quod nostrum dico, artis est-ad ea principia, quae accepimus. Duo Reges: constructio interrete"
          },
          {
            title: "Performance table",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat aequius Triarium aliquid de dissensione nostra iudicare. Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Praeteritis, inquit, gaudeo. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Itaque nostrum est-quod nostrum dico, artis est-ad ea principia, quae accepimus. Duo Reges: constructio interrete"
          },
          {
            title: "Graph",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat aequius Triarium aliquid de dissensione nostra iudicare. Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Praeteritis, inquit, gaudeo. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Itaque nostrum est-quod nostrum dico, artis est-ad ea principia, quae accepimus. Duo Reges: constructio interrete"
          }
        ]}
      />
      <Pricing />
      <Features />
      <Testimonials />
      <NextModel />
    </>
  )
}

export default ModelsDetailsPage
