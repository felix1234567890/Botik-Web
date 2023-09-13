import Link from "next/link";
import Image from 'next/image'
import "./Footer.scss";
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";

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

  return (
    <>
      <footer>
        <div className="footer">
          <a className="logo-Div">
            <Image alt="logo" width={100} height={100} src="/assets/logoFooter.svg" />
          </a>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.to}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <span>
            <Link href="https://www.facebook.com" target="_blank">
              <FiFacebook size={24} />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank">
              <FiLinkedin size={24} />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <FiInstagram size={24} />
            </Link>
          </span>
        </div>
        <div className="policies">
          <ul>
            {footerLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.to}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
