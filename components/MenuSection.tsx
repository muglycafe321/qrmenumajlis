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
    <section id={category} className="scroll-pt-20 mb-12 animate-fadeUp">
      <div className="section-ornament">
        <h2 
          className="font-bold text-gradient italic category-heading"
          style={{ 
            fontSize: 'clamp(24px, 5vw, 48px)',
            marginBottom: '1.5rem',
            letterSpacing: '0.02em'
          }}
        >
          {label}
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={`${item.category_slug}-${item.name}-${index}`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <MenuItemComponent item={item} categoryType={categoryType} />
          </div>
        ))}
      </div>
    </section>
  )
}
