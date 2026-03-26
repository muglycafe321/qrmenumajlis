export interface MenuItem {
  id?: number
  category_slug: string
  name: string
  price: number
  type: 'veg' | 'nonveg' | null
  sort_order: number
}

export interface MenuCategory {
  id: number
  slug: string
  label: string
  type: string
  sort_order: number
}

export interface SpecialOffer {
  id: number
  name: string
  price: number
  sort_order: number
}
