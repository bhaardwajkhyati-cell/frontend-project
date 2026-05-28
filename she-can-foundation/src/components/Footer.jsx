import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">
        <div className="footer-brand">
          <h2>🌸 She Can Foundation</h2>
          <p>Empowering women and girls to rise, lead, and thrive — one story at a time.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">🏠 Home</a></li>
            <li><a href="#about">💛 About</a></li>
            <li><a href="#donate">✨ Donate</a></li>
            <li><a href="#contact">📬 Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Connect With Us</h4>
          <ul>
            <li>📧 hello@shecan.org</li>
            <li>📍 New Delhi, India</li>
            <li>📞 +91 98765 43210</li>
          </ul>
          <div className="footer-socials">
            <a href="#">🐦</a>
            <a href="#">📸</a>
            <a href="#">💼</a>
            <a href="#">▶️</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 She Can Foundation. All rights reserved.</p>
        <p>Made with ❤️ for every woman who dares to rise.</p>
      </div>

    </footer>
  )
}

export default Footer