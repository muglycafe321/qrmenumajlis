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
  return (
    <section id={category} className="menu-section">
      <div className="sec-head">
        <span className="sec-ornament">✦</span>
        <h2 className="sec-title">{label}</h2>
        <span className="sec-ornament">✦</span>
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
