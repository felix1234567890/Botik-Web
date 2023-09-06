import { NavLink } from "react-router-dom";
import "./Footer.scss";
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";
import logoFooter from "../../assets/logoFooter.svg";

function Footer() {
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/models", text: "Models" },
    { to: "/pricing", text: "Pricing" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact" },
    { to: "/", text: "Sign Up" },
    { to: "/", text: "Login" },
  ];

  const footerLinks = [
    { to: "/privacy", text: "Privacy policy" },
    { to: "/terms", text: "Terms and condition" },
    { to: "/cookie", text: "Cookie policy" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer>
        <div className="footer">
          <a className="logoDiv">
            <img alt="logo" src={logoFooter} />
          </a>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.to} onClick={scrollToTop}>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <span>
            <NavLink to="https://www.facebook.com" target="_blank">
              <FiFacebook size={24} />
            </NavLink>
            <NavLink to="https://www.linkedin.com" target="_blank">
              <FiLinkedin size={24} />
            </NavLink>
            <NavLink to="https://www.instagram.com/" target="_blank">
              <FiInstagram size={24} />
            </NavLink>
          </span>
        </div>
        <div className="policies">
          <ul>
            {footerLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.to}>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
