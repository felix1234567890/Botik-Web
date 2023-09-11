import Image from 'next/image'
import "./Hero.scss";
import phoneImg from "../../assets/phone.webp";
import browserImg from "../../assets/browser.webp";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <div className="col-1">
            <p className="title">
              Sed quid ages tandem, si utilitas ab amicitia
            </p>
            <p className="subheading subheading-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi.
            </p>
            <button type="button" className="btn-bg">
              Get Started <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="col-2">
            <Image alt="phone" src={phoneImg} className="phone" />
            <Image alt="browser" src={browserImg} className="browser" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
