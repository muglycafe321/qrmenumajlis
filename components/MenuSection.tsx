'use client'

import { MenuItem, MenuCategory } from '@/lib/types'
import MenuItemComponent from './MenuItem'

interface MenuSectionProps {
  category: string
  label: string
  items: MenuItem[]
  categoryType?: string
}

export default function MenuSection({ category, label, items, categoryType }: MenuSectionProps) {
  const getTypeLabel = () => {
    if (categoryType === 'veg') return '🌿 Veg'
    if (categoryType === 'nonveg') return '🍖 Non-Veg'
    return '🍽 Veg & Non-Veg'
  }

  return (
    <section id={category} className="menu-section">
      <div className="sec-head">
        <h2 className="sec-title">
          <span className="sec-ornament">✦</span>
          {label}
          <span className="sec-ornament">✦</span>
        </h2>
        {categoryType && (
          <span className={`sec-type-pill ${categoryType}`}>
            {getTypeLabel()}
          </span>
        )}
      </div>
      <div className="menu-items-list">
        {items.map((item, index) => (
          <MenuItemComponent
            key={`${item.category_slug}-${item.name}-${index}`}
            item={item}
            categoryType={categoryType}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
