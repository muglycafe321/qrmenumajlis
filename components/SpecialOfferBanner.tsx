'use client'

import { SpecialOffer } from '@/lib/types'

interface SpecialOfferBannerProps {
  offers: SpecialOffer[]
}

export default function SpecialOfferBanner({ offers }: SpecialOfferBannerProps) {
  if (!offers || offers.length === 0) return null

  return (
    <div className="fc-block">
      <div className="fc-card">
        <div className="fc-head">
          <span className="fc-icon">🥘</span>
          <div className="fc-title-wrap">
            <span className="fc-title">Majlis Special</span>
            <span className="fc-subtitle">Exclusive deals just for you</span>
          </div>
          <span className="fc-badge">🔥 Special</span>
        </div>

        <div className="fc-rows">
          {offers.map((item, i) => (
            <div className="fc-row" key={item.id ?? `offer-${i}`}>
              <span className="fc-name">{item.name}</span>
              <span className="fc-price">
                <sup>₹</sup>{item.price === 0 
                  ? <span style={{ fontSize: '12px' }}>Market Price</span>
                  : item.price
                }
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
