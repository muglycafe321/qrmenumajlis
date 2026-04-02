'use client'

import { MenuCategory } from '@/lib/types'

interface CategoryNavProps {
  categories: MenuCategory[]
  activeCategory: string
  onCategoryClick: (slug: string) => void
}

export default function CategoryNav({ categories, activeCategory, onCategoryClick }: CategoryNavProps) {
  return (
    <nav className="cat-nav">
      <div className="cat-inner">
        {categories.map((category, index) => (
          <button
            key={category.id ?? `cat-${index}`}
            onClick={() => onCategoryClick(category.slug)}
            className={`cat-tab ${activeCategory === category.slug ? 'active' : ''}`}
          >
            {category.label ?? category.slug}
          </button>
        ))}
      </div>
    </nav>
  )
}
