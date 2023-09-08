import AboutHero from "../components/AboutPage/AboutHero/AboutHero";
import AboutBoxes from "../components/AboutPage/AboutBoxes/AboutBoxes";
import Features from "../components/Features/Features";
import AboutModel from "../components/ModelDetailsPage/AboutModel/AboutModel";
import Models from "../components/Models/Models";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <AboutBoxes
        boxContents={[
          "Comprehensum quod cognitum non habet",
          "Comprehensum quod cognitum non habets",
          "Comprehensum quod cognitum non habetfafas",
        ]}
      />
      <Features />
      <AboutModel
        backgroundcolor="#fff"
        choices={[
          {
            title: "Algorithm",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat aequius Triarium aliquid de dissensione nostra iudicare. Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Praeteritis, inquit, gaudeo. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Itaque nostrum est-quod nostrum dico, artis est-ad ea principia, quae accepimus. Duo Reges: constructio interrete",
          },
          {
            title: "Science behind",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat aequius Triarium aliquid de dissensione nostra iudicare. Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Praeteritis, inquit, gaudeo. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Itaque nostrum est-quod nostrum dico, artis est-ad ea principia, quae accepimus. Duo Reges: constructio interrete",
          },
          {
            title: "Track record",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat aequius Triarium aliquid de dissensione nostra iudicare. Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Praeteritis, inquit, gaudeo. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Itaque nostrum est-quod nostrum dico, artis est-ad ea principia, quae accepimus. Duo Reges: constructio interrete",
          },
        ]}
      />
      <Models enableButton={true} />
    </>
  );
};

export default AboutPage;
