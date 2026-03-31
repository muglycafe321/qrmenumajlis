'use client'

import { MenuItem as MenuItemType } from '@/lib/types'

interface MenuItemProps {
  item: MenuItemType
  categoryType?: string
  index?: number
}

export default function MenuItem({ item, categoryType, index = 0 }: MenuItemProps) {
  // Determine dot color based on type or category type
  const getDotClass = () => {
    if (item.type === 'veg') return 'veg'
    if (item.type === 'nonveg') return 'nonveg'
    // If item has no type, inherit from category
    if (categoryType === 'veg') return 'veg'
    if (categoryType === 'nonveg') return 'nonveg'
    return null
  }

  const dotClass = getDotClass()
  const isMarketPrice = item.price === 0

  return (
    <div 
      className="menu-item"
      data-index={index}
    >
      {/* Veg/Non-veg Dot */}
      {dotClass && <span className={`dot ${dotClass}`} />}

      {/* Item Name */}
      <span className="iname">{item.name}</span>

      {/* Dotted Line */}
      <span className="idots" />

      {/* Price */}
      <span className={`iprice ${isMarketPrice ? 'market' : ''}`}>
        {isMarketPrice ? 'Seasonal Price' : (
          <>
            <sup>₹</sup>{item.price}
          </>
        )}
      </span>
    </div>
  )
}
