import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobile, setMobile] = useState(false);
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState("");

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

  useEffect(() => {
    if (location.pathname !== currentLocation) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location, currentLocation]);


  const handleScroll = () => {
    setSticky(window.scrollY > 150);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobile = () => {
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
                <NavLink to={link.to}>{link.text}</NavLink>
              </li>
            ))}
          </ul>
          <div>
            <button className="btn-nobg">Signup</button>
            <button className="btn-bg">Login</button>
            {/* mobile */}
            <i
              onClick={toggleMobile}
              className="fa-solid fa-bars-staggered hamburger-menu"
            ></i>
          </div>
        </div>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav ${mobile ? "mobile-up" : ""}`}>
        <i onClick={toggleMobile} className="fa-solid fa-xmark close-mobile"></i>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index} onClick={toggleMobile}>
              <NavLink to={link.to}>{link.text}</NavLink>
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
};

export default Navbar;
