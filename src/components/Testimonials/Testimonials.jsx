import { testimonialsInfo } from "../../json/data";
import TestiominalsCard from "./TestiominalsCard";
import "./Testimonials.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


function Testimonials() {
  const testimonialsCardComponent = testimonialsInfo.map(
    (testimonial, index) => (
      <TestiominalsCard
        key={index}
        name={testimonial.name}
        photo={testimonial.photo}
        text={testimonial.text}
      />
    )
  );

  return (
    <div className="testimonials" id="testimonialsSection">
      <div className="testimonials_content">
        <h2 className="h2Regular">
          User testimonials vero virtutes iacere omnis necesse est voluptate
          dominante
        </h2>
        <AliceCarousel
          items={testimonialsCardComponent}
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={1000}
          animationDuration={1000}
          infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
          autoHeight
        />
      </div>
    </div>
  );
}

export default Testimonials;
