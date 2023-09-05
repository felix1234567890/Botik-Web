import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("");
  const location = useLocation();

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const openMobile = () => {
    setMobile(!mobile);
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/models", text: "Models" },
    { to: "/pricing", text: "Pricing" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <>
      <nav className={sticky ? "sticky-nav" : ""}>
        <div className="navbar">
          <NavLink to="/">
            <img alt="logo" src={logo} />
          </NavLink>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.to}
                  activeClassName="active"
                  isActive={() => currentLocation === link.to}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <div>
            <button className="btn-nobg">Signup</button>
            <button className="btn-bg">Login</button>
            {/* mobile */}
            <i
              onClick={openMobile}
              className="fa-solid fa-bars-staggered hamburger-menu"
            ></i>
          </div>
        </div>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav ${mobile ? "mobile-up" : ""}`}>
        <i onClick={openMobile} className="fa-solid fa-xmark close-mobile"></i>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index} onClick={openMobile}>
              <NavLink
                to={link.to}
                activeClassName="active"
                isActive={() => currentLocation === link.to}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
          <button className="btn-nobg" type="button">
            Signup
          </button>
          <button className="btn-bg" type="button">
            Login
          </button>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
