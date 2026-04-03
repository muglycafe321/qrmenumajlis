'use client'

export default function HeroHighlight() {
  return (
    <section className="hero-highlight">
      {/* Background image with overlay */}
      <div className="hh-img-wrap">
        <img
          src="/hero-image.jpg"
          alt="Majlis Restaurant"
          className="hh-img"
        />
        <div className="hh-overlay" />
      </div>

      {/* Content over image */}
      <div className="hh-content">
        {/* Top badge */}
        <div className="hh-badge">
          <span className="hh-badge-dot" />
          Signature Dishes
          <span className="hh-badge-dot" />
        </div>

        {/* Main heading */}
        <h2 className="hh-title">
          Royal Flavours
          <br />
          <span className="hh-title-accent">
            Crafted with Passion
          </span>
        </h2>

        {/* Divider ornament */}
        <div className="hh-ornament">✦ ── ✦ ── ✦</div>

        {/* 3 highlight dish cards in a row */}
        <div className="hh-dishes">
          <div className="hh-dish">
            <span className="hh-dish-icon">🥘</span>
            <span className="hh-dish-name">
              Chicken Mandhi
            </span>
            <span className="hh-dish-price">₹240</span>
          </div>
          <div className="hh-dish hh-dish-center">
            <span className="hh-dish-icon">🔥</span>
            <span className="hh-dish-name">
              Alfaham Mandhi
            </span>
            <span className="hh-dish-price">₹240</span>
          </div>
          <div className="hh-dish">
            <span className="hh-dish-icon">🌶</span>
            <span className="hh-dish-name">
              Peri Peri Mandhi
            </span>
            <span className="hh-dish-price">₹250</span>
          </div>
        </div>

        {/* Tagline */}
        <p className="hh-tagline">
          Every dish tells the story of our kitchen
        </p>
      </div>
    </section>
  )
}
