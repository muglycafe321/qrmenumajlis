'use client'

import { SpecialOffer } from '@/lib/types'

interface SpecialOfferBannerProps {
  offers: SpecialOffer[]
}

export default function SpecialOfferBanner({ offers }: SpecialOfferBannerProps) {
  if (!offers || offers.length === 0) return null

  return (
    <div className="special-section">
      {/* Section Header */}
      <div className="special-header">
        <div className="special-title-wrapper">
          <span className="special-icon">🔥</span>
          <div>
            <h2 className="special-title">Majlis Special</h2>
            <p className="special-subtitle">Exclusive deals just for you</p>
          </div>
        </div>
        <span className="special-badge">🔥 Special</span>
      </div>

      {/* Offer Cards */}
      <div className="special-cards">
        {offers.map((offer, index) => (
          <div
            key={offer.id ?? `offer-${index}`}
            className="special-card"
          >
            {/* Card Badge */}
            <span className="card-badge">🔥</span>
            
            {/* Card Content */}
            <div className="card-content">
              <h3 className="card-name">{offer.name}</h3>
              <p className="card-price">₹{offer.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
