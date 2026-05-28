import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="hero-eyebrow">🌸 Empowering Women Worldwide</p>
        <h1 className="hero-title">
          Every Woman Deserves the Chance to <span>Rise</span>
        </h1>
        <p className="hero-sub">
          She Can Foundation is dedicated to unlocking the potential of women
          and girls through education, mentorship, and community support.
        </p>
        <a href="#donate" className="hero-btn">Join the Movement 💪</a>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
          alt="Empowered woman smiling"
        />
      </div>
    </section>
  )
}

export default Hero