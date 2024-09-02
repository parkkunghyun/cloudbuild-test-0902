// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from './Sidebar';
import './css/components.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Desktop Navbar */}
      <nav className="navbar">
        <div className="logo">
          <h1>MySite</h1>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <GiHamburgerMenu size={30} />
        </div>
      </nav>
      
      {/* Mobile Sidebar */}
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  );
}

export default Navbar;
