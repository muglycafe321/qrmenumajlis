'use client'

export default function Footer() {
  return (
    <footer className="bg-[#13111A] border-t border-[rgba(212,168,83,0.28)] py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-3 text-center md:text-left">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-2xl font-bold text-gradient italic mb-2">Majlis Restaurant</h3>
            <p className="text-[#8A7F72] text-sm">Every Meal Tells a Story</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-cormorant font-semibold text-[#EDE3D5] mb-2">Contact</h4>
            <p className="text-[#8A7F72] text-sm">📍 Near Government Hospital, Kuthuparamba, Kannur</p>
            <p className="text-[#8A7F72] text-sm">📞 98956 89218</p>
          </div>

          {/* Delivery */}
          <div>
            <h4 className="text-lg font-cormorant font-semibold text-[#EDE3D5] mb-2">Delivery</h4>
            <p className="text-[#8A7F72] text-sm">🛵 Available within 3km radius</p>
            <p className="text-[#8A7F72] text-sm">⏰ Fast & Hot Delivery</p>
            <p className="text-[#8A7F72] text-sm">💰 Additional Charges Apply for takeaway orders</p>
          </div>
        </div>

        <div className="border-t border-[rgba(212,168,83,0.2)] mt-6 pt-6 text-center">
          <p className="text-[#8A7F72] text-sm">
            © {new Date().getFullYear()} Majlis Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
