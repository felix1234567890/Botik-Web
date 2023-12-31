import Image from 'next/image'

const TestiominalsCard = ({name, photo, text}) => {
  return (
    <div className="review">
      <div className="review_icon">
        <Image width={90}height={90} src={photo} alt="User Icon" />
      </div>
      <div className="review_details">
        <h5 className="h5Regular">
          {name}
        </h5>
        <p className="paragraphs">
          {text}
        </p>
      </div>
    </div>
  );
};

export default TestiominalsCard;
