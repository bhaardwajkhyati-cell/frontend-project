import React, { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">🌸</span>
        She Can Foundation
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </div>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#home">🏠 Home</a></li>
        <li><a href="#about">💛 About</a></li>
        <li><a href="#contact">📬 Contact</a></li>
        <li>
          <a href="#donate" className="donate-btn">Donate Now ✨</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar