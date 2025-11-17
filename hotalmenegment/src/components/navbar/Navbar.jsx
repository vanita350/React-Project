
import React, { useState } from "react";
import { NavLink } from "react-router-dom";   // ← Use NavLink
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
const navigate = useNavigate();
  return (
    <nav className="lux-navbar">
      <div className="lux-container">

        {/* Logo */}
        <div className="lux-logo">
          <span className="logo-icon">◆</span>
          <span className="logo-text">Luxe</span>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lux-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        {/* Menu */}
        <ul className={`lux-menu ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)} className="nav-link-item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/rooms" onClick={() => setIsOpen(false)} className="nav-link-item">
              Rooms
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/reservationList" onClick={() => setIsOpen(false)} className="nav-link-item">
              reservationList
            </NavLink>
          </li> */}
         
          <li>
            <NavLink to="/blog" onClick={() => setIsOpen(false)} className="nav-link-item">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className="nav-link-item">
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Book Now button */}
    <div className="lux-btn-container">
  <button className="lux-book-btn" onClick={() => navigate("/reserve")}>
    BOOK NOW
  </button>
</div>

      </div>
    </nav>
  );
}

export default Navbar;
