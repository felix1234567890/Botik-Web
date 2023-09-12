
import { useParams } from 'next/navigation'
import "./NextModel.scss";
import { models_info as modelsInfo } from "../../../json/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faArrowRight
} from "@fortawesome/free-solid-svg-icons";

const NextModel = () => {
  let { id } = useParams();
  id = decodeURIComponent(id)
  const currentIndex = modelsInfo.findIndex((model) => model.subtitle === id);
  const nextIndex = (currentIndex + 1) % modelsInfo.length;
  const nextModel = modelsInfo[nextIndex];

  const renderRiskCircles = (width, height) => {
    return Array.from({ length: nextModel.risk }, (_, index) => (
      <div
        key={index}
        className="risk-circle"
        style={{
          backgroundColor: "#fff",
          width: `${width}px`,
          height: `${height}px`,
        }}
      ></div>
    ));
  };

  const handleNextModelClick = () => {
    const queryParams = {
      selectedModelId: nextModel.title,
    };
    const searchParams = new URLSearchParams(queryParams);
    const newUrl = `/models/${nextModel.subtitle}?${searchParams.toString()}`;
    window.location.href = newUrl;
  };

  return (
    <div className="nextmodel">
      <div className="nextmodel_container">
        <p className="subheading">{nextModel.title}</p>
        <h2 className="h2Regular">
          User testimonials vero virtutes iacere omnis necesse est voluptate
          dominante
        </h2>
        <div className="risk-circles">{renderRiskCircles(10, 10)}</div>
        <button onClick={handleNextModelClick} className="btn-nobg">
          View {nextModel.title} <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default NextModel;
