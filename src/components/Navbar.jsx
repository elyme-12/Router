import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./LandingPage/Home";
import About from "./LandingPage/About";
import Projects from "./LandingPage/Projects";
import Contact from "./LandingPage/Contact";
import black from "../components/Image/logo.jpg";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="background">
      <div className="header">
        <div className="logo-container">
          <img src={black} alt="img" className="imagetoh" />
        </div>

        <button className="hamburger" onClick={toggleMenu}>☰</button>
        <nav className={menuOpen ? "open" : ""}>
          <NavLink to="/" exact="true" activeclassname="active" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" activeclassname="active" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/projects" activeclassname="active" onClick={closeMenu}>
            Project
          </NavLink>
          <NavLink to="/contact" activeclassname="active" onClick={closeMenu}>Contact </NavLink>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Navigation;