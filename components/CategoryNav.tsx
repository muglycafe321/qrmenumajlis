'use client'

import { MenuCategory } from '@/lib/types'

interface CategoryNavProps {
  categories: MenuCategory[]
  activeCategory: string
  onCategoryClick: (slug: string) => void
}

export default function CategoryNav({ categories, activeCategory, onCategoryClick }: CategoryNavProps) {
  return (
    <nav className="sticky top-0 z-40 bg-[#0B0A0E]/95 backdrop-blur-sm border-b border-[rgba(212,168,83,0.28)]">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 px-4 py-3 min-w-max">
          {categories.map((category, index) => (
            <button
              key={category.id ?? `cat-${index}`}
              onClick={() => onCategoryClick(category.slug)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeCategory === category.slug
                  ? 'bg-gradient-to-r from-[#D4A853] to-[#F0C97A] text-[#0B0A0E] shadow-lg shadow-[#D4A853]/30'
                  : 'bg-[#13111A] text-[#EDE3D5] hover:bg-[#1A1824] border border-[rgba(212,168,83,0.28)]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
