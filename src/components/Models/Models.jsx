import { models_info as modelsInfo } from "../../json/data";
import Card from "./Card";
import "./Models.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faArrowRight
} from "@fortawesome/free-solid-svg-icons";

const Models = ({ enableButton }) => {
  return (
    <div className="models">
      <div className="models_container">
        <h2 className="h2Regular">
          Transfer idem ad modestiam vel temperantiam, quae est moderatio
          cupiditatum rationi oboediens
        </h2>
        <div className="cards">
          {modelsInfo.map((model, index) => (
            <Card
              key={index}
              title={model.title}
              risk={model.risk}
              text={model.text}
              mostPopular={model.most_popular}
              id={model.subtitle}
            />
          ))}
        </div>
        <p className="subheading p-text">
          Quod, inquit, quamquam voluptatibus quibusdam est saepe iucundius,
          tamen expetitur propter voluptatem. De illis, cum volemus. Sed nimis
          multa. Mihi enim satis est, ipsis non satis. Pauca mutat vel plura
          sane
        </p>

        {enableButton ? (
          <button type="button" className="btn-bg enabled-button">
            Sign up now <FontAwesomeIcon icon={faArrowRight} />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Models;
