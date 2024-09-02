// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './css/components.css';

function Sidebar({ isOpen, toggleMenu }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleMenu}>X</button>
      <Link to="/" onClick={toggleMenu}>Home</Link>
      <Link to="/about" onClick={toggleMenu}>About</Link>
      <Link to="/contact" onClick={toggleMenu}>Contact</Link>
    </div>
  );
}

export default Sidebar;
