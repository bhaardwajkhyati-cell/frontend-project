import React from 'react'
import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-tag">💛 Our Story</div>

      <h2 className="about-title">
        Building a World Where <span>She Can</span>
      </h2>

      <p className="about-desc">
        Founded in 2012, She Can Foundation was born from a simple belief —
        that every woman, regardless of where she was born or what she has
        faced, carries the power to transform her life and her community.
      </p>

      <div className="about-cards">
        <div className="card">
          <div className="card-icon">📚</div>
          <h3>Education Access</h3>
          <p>Scholarships, tutoring, and digital literacy programs for women and girls everywhere.</p>
        </div>
        <div className="card">
          <div className="card-icon">💼</div>
          <h3>Economic Power</h3>
          <p>Skill-building workshops and microfinance support to launch careers and businesses.</p>
        </div>
        <div className="card">
          <div className="card-icon">🤝</div>
          <h3>Community & Mentorship</h3>
          <p>Connecting women with mentors, networks, and safe spaces to grow and thrive.</p>
        </div>
      </div>
    </section>
  )
}

export default About