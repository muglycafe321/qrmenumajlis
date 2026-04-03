'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { SpecialOffer } from '@/lib/types'

interface SpecialOfferPaneProps {
  offers: SpecialOffer[]
  onOffersChange: (offers: SpecialOffer[]) => void
  onPreviewAndPublish: () => void
  onOfferRefresh?: () => Promise<void>
}

export default function SpecialOfferPane({
  offers,
  onOffersChange,
  onPreviewAndPublish,
  onOfferRefresh,
}: SpecialOfferPaneProps) {
  const [newItem, setNewItem] = useState({ name: '', price: '' })

  const handleAddItem = async () => {
    if (!newItem.name || !newItem.price) return

    const newOffer: SpecialOffer = {
      id: Date.now(),
      name: newItem.name,
      price: parseInt(newItem.price),
      sort_order: offers.length + 1,
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('special_offer')
      .insert([newOffer])
      .select()

    if (!error && data) {
      onOffersChange([...offers, ...data])
      setNewItem({ name: '', price: '' })
      // Refresh from Supabase to ensure sync
      if (onOfferRefresh) await onOfferRefresh()
    }
  }

  const handleDeleteItem = async (id: number) => {
    const { error } = await supabase.from('special_offer').delete().eq('id', id)

    if (!error) {
      onOffersChange(offers.filter((o) => o.id !== id))
      // Refresh from Supabase to ensure sync
      if (onOfferRefresh) await onOfferRefresh()
    }
  }

  const handlePriceChange = async (id: number, newPrice: number) => {
    const { error } = await supabase
      .from('special_offer')
      .update({ price: newPrice })
      .eq('id', id)

    if (!error) {
      onOffersChange(offers.map((o) => (o.id === id ? { ...o, price: newPrice } : o)))
      // Refresh from Supabase to ensure sync
      if (onOfferRefresh) await onOfferRefresh()
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-cormorant font-semibold text-[#EDE3D5] mb-2">
        Current Special Offers
      </h3>

      {/* Offer List */}
      <div className="space-y-2">
        {offers.map((offer, index) => (
          <div
            key={offer.id ?? `offer-${index}`}
            className="flex items-center gap-3 bg-[#13111A] rounded-lg p-3 border border-[rgba(212,168,83,0.2)]"
          >
            <div className="flex-1">
              <p className="text-[#EDE3D5] font-medium">{offer.name}</p>
            </div>
            <input
              type="number"
              value={offer.price ?? 0}
              onChange={(e) => handlePriceChange(offer.id ?? 0, parseInt(e.target.value))}
              className="w-20 input-field text-right"
            />
            <button
              onClick={() => handleDeleteItem(offer.id ?? 0)}
              className="text-red-500 hover:text-red-400 transition-colors"
            >
              🗑
            </button>
          </div>
        ))}
      </div>

      {/* Add New Item */}
      <div className="mt-6 pt-6 border-t border-[rgba(212,168,83,0.2)]">
        <h4 className="text-sm font-medium text-[#8A7F72] mb-3">Add New Offer</h4>
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            placeholder="Offer name"
            className="flex-1 input-field"
          />
          <input
            type="number"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            placeholder="Price"
            className="w-24 input-field"
          />
        </div>
        <button onClick={handleAddItem} className="btn-primary w-full py-2 text-sm">
          Add Offer
        </button>
      </div>

      {/* Preview & Publish Button */}
      <button
        onClick={onPreviewAndPublish}
        className="btn-primary w-full mt-4"
      >
        Preview & Publish
      </button>
    </div>
  )
}
