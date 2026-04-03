'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { MenuCategory, MenuItem } from '@/lib/types'

interface MenuItemsPaneProps {
  categories: MenuCategory[]
  items: MenuItem[]
  onItemsChange: (items: MenuItem[]) => void
  onMenuItemsChange?: () => Promise<void>
}

export default function MenuItemsPane({
  categories,
  items,
  onItemsChange,
  onMenuItemsChange,
}: MenuItemsPaneProps) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.slug || '')
  const [newItem, setNewItem] = useState({ name: '', price: '', type: 'nonveg' })

  const handleAddItem = async () => {
    if (!newItem.name || !newItem.price || !selectedCategory) return

    const newItemData: MenuItem = {
      id: Date.now(),
      category_slug: selectedCategory,
      name: newItem.name,
      price: parseInt(newItem.price),
      type: newItem.type as 'veg' | 'nonveg',
      sort_order: items.filter((i) => i.category_slug === selectedCategory).length + 1,
    }

    const { data, error } = await supabase
      .from('menu_items')
      .insert([newItemData])
      .select()

    if (!error && data) {
      onItemsChange([...items, ...data])
      setNewItem({ name: '', price: '', type: 'nonveg' })
      // Refresh parent component
      if (onMenuItemsChange) await onMenuItemsChange()
    }
  }

  const handleDeleteItem = async (id: number) => {
    const { error } = await supabase.from('menu_items').delete().eq('id', id)

    if (!error) {
      onItemsChange(items.filter((i) => i.id !== id))
      // Refresh parent component
      if (onMenuItemsChange) await onMenuItemsChange()
    }
  }

  const handlePriceChange = async (id: number, newPrice: number) => {
    if (!newPrice) return
    const { error } = await supabase
      .from('menu_items')
      .update({ price: newPrice })
      .eq('id', id)

    if (!error) {
      onItemsChange(items.map((i) => (i.id === id ? { ...i, price: newPrice } : i)))
      // Refresh parent component
      if (onMenuItemsChange) await onMenuItemsChange()
    }
  }

  const filteredItems = items.filter((i) => i.category_slug === selectedCategory)

  return (
    <div className="space-y-4">
      {/* Category Selector */}
      <div>
        <label className="text-sm text-[#8A7F72] mb-2 block">Select Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="input-field w-full"
        >
          {categories.map((cat, index) => (
            <option key={cat.id ?? `cat-${index}`} value={cat.slug} className="bg-[#0B0A0E]">
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      {/* Items List */}
      <div className="max-h-64 overflow-y-auto space-y-2">
        {filteredItems.map((item, index) => (
          <div
            key={item.id ?? `item-${index}`}
            className="flex items-center gap-3 bg-[#13111A] rounded-lg p-3 border border-[rgba(212,168,83,0.2)]"
          >
            <div className="flex-1">
              <p className="text-[#EDE3D5] font-medium">{item.name}</p>
              <p className="text-xs text-[#8A7F72]">
                {item.type === 'veg' ? ' Veg' : item.type === 'nonveg' ? '🔴 Non-veg' : 'Mixed'}
              </p>
            </div>
            <input
              type="number"
              value={item.price ?? 0}
              onChange={(e) => handlePriceChange(item.id ?? 0, parseInt(e.target.value))}
              className="w-20 input-field text-right"
            />
            <button
              onClick={() => handleDeleteItem(item.id ?? 0)}
              className="text-red-500 hover:text-red-400 transition-colors"
            >
              🗑
            </button>
          </div>
        ))}
      </div>

      {/* Add New Item */}
      <div className="mt-6 pt-6 border-t border-[rgba(212,168,83,0.2)]">
        <h4 className="text-sm font-medium text-[#8A7F72] mb-3">Add New Item</h4>
        <input
          type="text"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          placeholder="Item name"
          className="input-field w-full mb-3"
        />
        <div className="flex gap-2 mb-3">
          <input
            type="number"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            placeholder="Price"
            className="flex-1 input-field"
          />
          <select
            value={newItem.type}
            onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
            className="w-28 input-field"
          >
            <option value="nonveg" className="bg-[#0B0A0E]">Non-Veg</option>
            <option value="veg" className="bg-[#0B0A0E]">Veg</option>
          </select>
        </div>
        <button onClick={handleAddItem} className="btn-primary w-full py-2 text-sm">
          Add Item
        </button>
      </div>
    </div>
  )
}
