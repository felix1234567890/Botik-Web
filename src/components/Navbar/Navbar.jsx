"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import "./Navbar.scss"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons"
const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [mobile, setMobile] = useState(false)

  const handleScroll = () => {
    setSticky(window.scrollY > 150)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMobile = () => {
    setMobile(!mobile)
  }

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/models", text: "Models" },
    { to: "/pricing", text: "Pricing" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact" }
  ]

  return (
    <>
      <nav className={sticky ? "sticky-nav" : ""}>
        <div className='navbar'>
          <Link href='/'>
            <Image width={100} height={100} alt='logo' src="/assets/logo.svg" />
          </Link>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.to}>{link.text}</Link>
              </li>
            ))}
          </ul>
          <div>
            <button className='btn-nobg'>Signup</button>
            <button className='btn-bg'>Login</button>
            {/* mobile */}
            <FontAwesomeIcon
              icon={faBarsStaggered}
              onClick={toggleMobile}
              className='hamburger-menu'
            />
          </div>
        </div>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav ${mobile ? "mobile-up" : ""}`}>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={toggleMobile}
          className='close-mobile'
        />
        <ul>
          {navLinks.map((link, index) => (
            <li key={index} onClick={toggleMobile}>
              <Link href={link.to}>{link.text}</Link>
            </li>
          ))}
          <button className='btn-nobg' type='button'>
            Signup
          </button>
          <button className='btn-bg' type='button'>
            Login
          </button>
        </ul>
      </div>
    </>
  )
}

export default Navbar
