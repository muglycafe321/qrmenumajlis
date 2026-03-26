'use client'

import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()

  return (
    <div className="relative w-full overflow-hidden bg-[#0B0A0E]" style={{ height: '100svh', minHeight: '700px' }}>
      {/* Hero Image Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-slowZoom"
        style={{
          backgroundImage: `url('/hero-image.jpg')`,
        }}
      />

      {/* Luxury Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(11,10,14,0.75) 0%, rgba(11,10,14,0.3) 30%, rgba(11,10,14,0.1) 55%, rgba(11,10,14,0.98) 100%)',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24" style={{ paddingTop: '52px' }}>
        {/* Top Section - Centered vertically */}
        <div className="max-w-4xl" style={{ opacity: 0, animation: 'fadeUp 0.8s ease forwards 0.1s' }}>
          {/* Restaurant Name Label */}
          <p 
            className="text-[#D4A853] font-nunito mb-3"
            style={{
              fontSize: '11px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              opacity: 0,
              animation: 'fadeUp 0.8s ease forwards 0.1s',
            }}
          >
            MAJLIS RESTAURANT
          </p>

          {/* Main Headline */}
          <h1 
            className="font-cormorant font-bold text-white italic drop-shadow-lg"
            style={{
              fontSize: 'clamp(36px, 11vw, 62px)',
              letterSpacing: '0.02em',
              lineHeight: '1.1',
            }}
          >
            Authentic Flavours,
            <br />
            Royal Experience
          </h1>
          
          {/* Gold Accent Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4A853] to-transparent mt-6 mb-6" />

          {/* Sub Tagline */}
          <p 
            className="text-[#F0C97A] italic font-cormorant drop-shadow-md"
            style={{
              fontSize: 'clamp(16px, 4.5vw, 22px)',
              letterSpacing: '0.04em',
              marginBottom: '28px',
            }}
          >
            Every Meal Tells a Story
          </p>
        </div>
      </div>

      {/* Fixed CTA at Bottom */}
      <div className="lp-cta-fixed">
        {/* Info Row - Pill shaped chips */}
        <div className="lp-info-row">
          <span>📍 Near Govt Hospital, Kuthuparamba</span>
          <span>🛵 Delivery: 3km</span>
          <span>📞 98956 89218</span>
        </div>
        
        {/* Explore Menu Button */}
        <button className="lp-btn-main" onClick={() => router.push('/menu')}>
          <span className="lp-btn-icon">🍽</span>
          Explore Menu
        </button>
      </div>
    </div>
  )
}
