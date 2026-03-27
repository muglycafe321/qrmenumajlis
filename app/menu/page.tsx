'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { SpecialOffer, MenuCategory, MenuItem } from '@/lib/types'
import { DEFAULT_OFFER, DEFAULT_CATEGORIES, DEFAULT_ITEMS } from '@/lib/defaults'
import CategoryNav from '@/components/CategoryNav'
import SpecialOfferBanner from '@/components/SpecialOfferBanner'
import MenuSection from '@/components/MenuSection'
import BackToTop from '@/components/BackToTop'
import Footer from '@/components/Footer'
import AdminDrawer from '@/components/AdminDrawer'

export default function MenuPage() {
  const [offers, setOffers] = useState<SpecialOffer[]>(DEFAULT_OFFER)
  const [categories, setCategories] = useState<MenuCategory[]>(DEFAULT_CATEGORIES)
  const [items, setItems] = useState<MenuItem[]>(DEFAULT_ITEMS)
  const [activeCategory, setActiveCategory] = useState('mandi')
  const [isLoading, setIsLoading] = useState(true)

  // Fetch data from Supabase
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch offers
        const { data: offersData, error: offersError } = await supabase
          .from('special_offer')
          .select('*')
          .order('sort_order', { ascending: true })

        // Fetch categories
        const { data: categoriesData, error: categoriesError } = await supabase
          .from('menu_categories')
          .select('*')
          .order('sort_order', { ascending: true })

        // Fetch items
        const { data: itemsData, error: itemsError } = await supabase
          .from('menu_items')
          .select('*')
          .order('sort_order', { ascending: true })

        // Update state with fetched data (fallback to defaults on error)
        if (!offersError && offersData) setOffers(offersData)
        if (!categoriesError && categoriesData) setCategories(categoriesData)
        if (!itemsError && itemsData) setItems(itemsData)
      } catch (error) {
        console.error('Error fetching data:', error)
        // Silently fall back to defaults
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  // Group items by category
  const getItemsByCategory = (categorySlug: string) => {
    return items.filter((item) => item.category_slug === categorySlug)
  }

  // Handle category navigation
  const handleCategoryClick = (slug: string) => {
    setActiveCategory(slug)
    const element = document.getElementById(slug)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Update active category on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
    )

    categories.forEach((category) => {
      const element = document.getElementById(category.slug)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [categories])

  // Animate menu items on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const index = parseInt(el.getAttribute('data-index') || '0')
            setTimeout(() => {
              el.classList.add('visible')
            }, index * 30)
            observer.unobserve(el)
          }
        })
      },
      { rootMargin: '-30px 0px -10% 0px', threshold: 0.05 }
    )

    const menuItems = document.querySelectorAll('.menu-item')
    menuItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [items, categories])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0B0A0E] islamic-pattern flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-[#D4A853] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-[#8A7F72] text-sm">Loading menu...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0B0A0E] islamic-pattern">
      {/* Category Navigation */}
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Special Offer Banner */}
        <SpecialOfferBanner offers={offers} />

        {/* Menu Sections */}
        <div className="space-y-8">
          {categories.map((category, index) => {
            const categoryItems = getItemsByCategory(category.slug)
            if (categoryItems.length === 0) return null

            return (
              <MenuSection
                key={category.id ?? `category-${index}`}
                category={category.slug}
                label={category.label}
                items={categoryItems}
                categoryType={category.type}
              />
            )
          })}
        </div>
      </main>

      {/* Back to Top Button */}
      <BackToTop />

      {/* Footer */}
      <Footer />

      {/* Admin Drawer */}
      <AdminDrawer
        offers={offers}
        categories={categories}
        items={items}
        onOffersChange={setOffers}
        onItemsChange={setItems}
      />
    </div>
  )
}
