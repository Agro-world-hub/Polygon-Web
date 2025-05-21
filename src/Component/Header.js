import React, { useState, useEffect, useRef } from "react";
import "./Style/Header.css";
import logo from "../images/POLYGON ORIGINAL LOGO.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const headerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle dropdown visibility
  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Toggle hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="header" ref={headerRef}>
      {/* Hamburger Menu Button */}
      <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
        ☰
      </button>

      {/* Logo */}
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>

      {/* Navigation */}
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li className="nav-item" ref={dropdownRef}>
            <div className="dropdown">
              <button className="nav-link dropdown-toggle" onClick={toggleDropdown}>
                Solutions ▾
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link
                      to="/InvestmentFarm"
                      className="dropdown-link"
                      onClick={handleLinkClick}
                    >
                      Investment Farm Web
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/PlantCare"
                      className="dropdown-link"
                      onClick={handleLinkClick}
                    >
                      PlantCare Mobile App
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/MarketPlace"
                      className="dropdown-link"
                      onClick={handleLinkClick}
                    >
                      Marketplace Web
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li className="nav-item">
            <Link to="/News" className="nav-link" onClick={handleLinkClick}>
              News
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link contact-btn"
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;