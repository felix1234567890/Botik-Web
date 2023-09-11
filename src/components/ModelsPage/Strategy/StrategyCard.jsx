const StrategyCard = ({ icon, title, text}) => {
  return (
    <div className="strategy-box">
      <div className="icon-box">{icon}</div>
      <div className="text-aligning">
        <h2 className="h2Regular">{title}</h2>
        <p className="paragraphs">{text}</p>
      </div>
    </div>
  );
};

export default StrategyCard;
