import Image from 'next/image'
import "./Hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faArrowRight
} from "@fortawesome/free-solid-svg-icons";

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
              Get Started <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="col-2">
            <Image alt="phone" width={800} height={600} src="/assets/phone.webp" className="phone" />
            <Image alt="browser"  width={800} height={600} src="/assets/browser.webp" className="browser" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
