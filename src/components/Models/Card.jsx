import Link from "next/link";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { riskColors } from "../../lib/utils"

const Card = ({ title, risk, text, mostPopular, id }) => {
  const riskColor = riskColors[risk] || "#32BEEB";

  const renderRiskCircles = () => {
    return Array.from({ length: risk }, (_, index) => (
      <div
        key={index}
        className="risk-circle"
        style={{ backgroundColor: riskColor }}
      ></div>
    ));
  };

  const cardClassName = mostPopular ? "card most-popular" : "card";

  return (
    <div className={cardClassName}>
      <div className="title_risk">
        {mostPopular && <h6 className="mostPopular">Most Popular</h6>}
        <h5>{title}</h5>
        <div className="risk-circles">
          <h6>Risk</h6> {renderRiskCircles()}
        </div>
      </div>
      <p>{text}</p>
      <div className="card_buttons">
        <button type="button" className="btn-bg">
          Choose
        </button>
        <Link href={`/models/${id}`} className="info btn-nobg">
          <AiOutlineInfoCircle size={16} className="icon" />
          More info
        </Link>
      </div>
    </div>
  );
};

export default Card;
