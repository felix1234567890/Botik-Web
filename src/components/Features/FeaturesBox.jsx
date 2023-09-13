const FeaturesBox = ({ title, icon, text }) => {
  return (
    <div className="features-box">
      <div className="icon-box">{icon}</div>
      <div className="text-aligning">
        <h5 className="h5Regular">{title}</h5>
        <p className="paragraphs">{text}</p>
      </div>
    </div>
  );
};

export default FeaturesBox;
