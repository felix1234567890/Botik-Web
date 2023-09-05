import React from "react";
import { testimonialsInfo } from "../../json/data";
import TestiominalsCard from "./TestiominalsCard";
import "./Testimonials.scss";
import Marquee from "react-fast-marquee";

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
        <div className="slider">
          <Marquee speed={150}>{testimonialsCardComponent}</Marquee>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
