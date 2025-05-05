/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import '../navbar/navbar.css';
import { DiCssdeck } from 'react-icons/di';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar container">
      <div className="logo">
        <DiCssdeck style={{ fontSize: '2.8rem' }} /> Portfolio
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href='#about' >About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#education'>Education</a></li>
      </ul>
      <button className="github-btn"><a href='https://github.com/Sujith-Sukumar' style={{textDecoration:'none',color:'#9d4edd'}}>Github Profile</a></button>
    </nav>
  );
}

export default Navbar;
