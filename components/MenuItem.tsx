'use client'

import { MenuItem as MenuItemType } from '@/lib/types'

interface MenuItemProps {
  item: MenuItemType
  categoryType?: string
}

export default function MenuItem({ item, categoryType }: MenuItemProps) {
  // Determine dot color based on type or category type
  const getDotColor = () => {
    if (item.type === 'veg') return 'var(--veg)'
    if (item.type === 'nonveg') return 'var(--nonveg)'
    // If item has no type, inherit from category
    if (categoryType === 'veg') return 'var(--veg)'
    if (categoryType === 'nonveg') return 'var(--nonveg)'
    return null
  }

  const dotColor = getDotColor()
  const isMarketPrice = item.price === 0

  return (
    <div className="card card-corner-accent p-5 hover:border-[#D4A853]/60 transition-all duration-300 group animate-floatUp">
      <div className="flex items-center gap-3 mb-3">
        {/* Veg/Non-veg Dot */}
        {dotColor && (
          <div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: dotColor }}
          />
        )}
        
        {/* Item Name */}
        <h3 className="text-lg font-cormorant font-semibold text-[#EDE3D5] group-hover:text-[#D4A853] transition-colors flex-1">
          {item.name}
        </h3>
        
        {/* Dotted Line */}
        <div className="flex-1 border-b-2 border-dotted border-[rgba(212,168,83,0.3)] mx-2" />
        
        {/* Price */}
        <span className="text-xl font-bold text-gradient flex-shrink-0">
          {isMarketPrice ? 'Market Price' : `₹${item.price}`}
        </span>
      </div>
    </div>
  )
}
