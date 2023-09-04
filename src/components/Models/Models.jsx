import React from "react";
import { models_info } from "../../json/data";
import Card from "./Card";
import "./Models.scss";

const Models = () => {
  return (
    <div className="models">
      <div className="models_container">
        <h2 className="h2Regular">
          Transfer idem ad modestiam vel temperantiam, quae est moderatio
          cupiditatum rationi oboediens
        </h2>
        <div className="cards">
          {models_info.map((model, index) => (
          <Card
            key={index}
            title={model.title}
            risk={model.risk}
            text={model.text}
            mostPopular={model.most_popular}
          />
        ))}
        </div>
        <p className="subheading ptext">
          Quod, inquit, quamquam voluptatibus quibusdam est saepe iucundius,
          tamen expetitur propter voluptatem. De illis, cum volemus. Sed nimis
          multa. Mihi enim satis est, ipsis non satis. Pauca mutat vel plura
          sane
        </p>
      </div>
    </div>
  );
};

export default Models;
