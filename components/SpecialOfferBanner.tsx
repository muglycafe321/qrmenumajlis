'use client'

import { SpecialOffer } from '@/lib/types'

interface SpecialOfferBannerProps {
  offers: SpecialOffer[]
}

export default function SpecialOfferBanner({ offers }: SpecialOfferBannerProps) {
  if (!offers || offers.length === 0) return null

  return (
    <div className="card mb-8 p-6 bg-gradient-to-r from-[#13111A] to-[#1A1824] border-[#D4A853]/40 animate-zoomIn animate-glowPulse">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">🥘</span>
        <div>
          <h2 className="text-2xl font-bold text-gradient italic">Majlis Special</h2>
          <p className="text-sm text-[#8A7F72]">Exclusive deals just for you</p>
        </div>
        <span className="ml-auto badge-nonveg px-3 py-1 text-xs">Special</span>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {offers.map((offer, index) => (
          <div
            key={offer.id ?? `offer-${index}`}
            className="bg-[#0B0A0E]/50 rounded-lg p-4 border border-[rgba(212,168,83,0.2)] hover:border-[#D4A853]/40 transition-all"
          >
            <h3 className="text-lg font-cormorant font-semibold text-[#EDE3D5] mb-1">
              {offer.name}
            </h3>
            <p className="text-xl font-bold text-[#D4A853]">₹{offer.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
