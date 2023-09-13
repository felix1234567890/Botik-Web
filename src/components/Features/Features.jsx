import "./Features.scss";
import { features_info as featuresInfo } from "../../json/data";
import FeaturesBox from "./FeaturesBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faArrowRight
} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <div className="features">
      <div className="features_container">
        <h2 className="h2Regular">
          Tollitur beneficium, tollitur gratia, quae sunt vincla concordiae
        </h2>
        <div className="features_container_boxes">
          {featuresInfo.map((feature, index) => (
            <FeaturesBox
              key={index}
              title={feature.title}
              icon={feature.icon}
              text={feature.text}
            />
          ))}
        </div>
        <button type="button" className="btn-bg">
          Get Started <FontAwesomeIcon icon={faArrowRight}/>
        </button>
      </div>
    </div>
  );
};

export default Features;
