'use client'

import { SpecialOffer } from '@/lib/types'

interface PreviewModalProps {
  offers: SpecialOffer[]
  onClose: () => void
  onConfirm: () => void
}

export default function PreviewModal({ offers, onClose, onConfirm }: PreviewModalProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#0B0A0E] border border-[rgba(212,168,83,0.28)] rounded-xl p-6 z-50 animate-popIn">
        <h3 className="text-2xl font-bold text-gradient italic mb-4">
          Preview & Publish
        </h3>

        <p className="text-[#8A7F72] text-sm mb-4">
          Are you sure you want to update the special offer? This will be visible to all customers.
        </p>

        {/* Preview */}
        <div className="bg-[#13111A] rounded-lg p-4 mb-6 border border-[rgba(212,168,83,0.2)]">
          <h4 className="text-sm font-medium text-[#EDE3D5] mb-3">Special Offers Preview:</h4>
          <div className="space-y-2">
            {offers.map((offer, index) => (
              <div key={offer.id ?? `offer-${index}`} className="flex justify-between items-center">
                <span className="text-[#8A7F72]">{offer.name}</span>
                <span className="text-[#D4A853] font-semibold">₹{offer.price ?? 0}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 rounded-lg bg-[#13111A] text-[#EDE3D5] hover:bg-[#1A1824] transition-all border border-[rgba(212,168,83,0.28)]"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 btn-primary"
          >
            Confirm & Publish
          </button>
        </div>
      </div>
    </>
  )
}
