'use client'

import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0B0A0E]">
      {/* Hero Image Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-slowZoom"
        style={{
          backgroundImage: `url('/hero-image.jpg')`,
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 pb-32">
        {/* Top Section - Centered vertically */}
        <div className="animate-fadeUp max-w-4xl">
          {/* Restaurant Name & Tagline */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white italic leading-tight drop-shadow-lg">
              Authentic Flavours,
              <br />
              Royal Experience
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4A853] to-transparent mt-6 mb-6" />
          </div>

          {/* Sub Tagline */}
          <p className="text-2xl md:text-3xl text-[#F0C97A] italic font-cormorant mb-8 drop-shadow-md">
            Every Meal Tells a Story
          </p>

          {/* Info Row - iOS Style Cards */}
          <div className="flex flex-wrap gap-3 mt-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
              <span className="text-[#D4A853]">📍</span>
              <span className="text-white text-sm">Near Govt Hospital, Kuthuparamba</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
              <span className="text-[#D4A853]">🛵</span>
              <span className="text-white text-sm">Delivery: 3km</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
              <span className="text-[#D4A853]">📞</span>
              <span className="text-white text-sm">98956 89218</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed CTA Button at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-black/90 to-transparent">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => router.push('/menu')}
            className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[#D4A853] to-[#F0C97A] text-[#0B0A0E] rounded-full font-bold text-lg shadow-lg shadow-[#D4A853]/40 hover:shadow-[#D4A853]/60 hover:scale-[1.02] transition-all duration-300"
          >
            🍽 Explore Menu
          </button>
        </div>
      </div>
    </div>
  )
}
