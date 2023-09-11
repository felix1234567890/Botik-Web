import React from "react";
import "./AboutHero.scss";
import browserTop from "../../../assets/lighttopbar.webp";
import browserbg from "../../../assets/browserbackground.webp";

const AboutHero = () => {
  return (
    <div className="abouthero">
      <div className="abouthero_container">
        <p className="about-paragraph subheading">About Botik</p>
        <h1 className="title">
          Modestiam vel temperantiam, quae est moderatio
        </h1>
        <div className="abouthero_container_image">
          <img src={browserTop} alt="browser top" />
          <img src={browserbg} alt="browser bg" />
        </div>
        <h2 className="h2Regular second-title">
          Transfer idem ad modestiam vel temperantiam, quae est moderatio
          cupiditatum rationi oboediens
        </h2>
        <p className="subheading bottom-text">
          Quod, inquit, quamquam voluptatibus quibusdam est saepe iucundius,
          tamen expetitur propter voluptatem. De illis, cum volemus. Sed nimis
          multa. Mihi enim satis est, ipsis non satis. Pauca mutat vel plura
          sane
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
