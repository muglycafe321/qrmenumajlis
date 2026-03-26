import { SpecialOffer, MenuCategory, MenuItem } from './types'

export const DEFAULT_OFFER: SpecialOffer[] = [
  { id: 1, name: 'Chicken Mandi', price: 240, sort_order: 1 },
  { id: 2, name: 'Alfaham Mandi', price: 299, sort_order: 2 },
  { id: 3, name: 'Family Meals', price: 499, sort_order: 3 },
]

export const DEFAULT_CATEGORIES: MenuCategory[] = [
  { id: 1, slug: 'rice', label: 'Rice & Biryani', type: 'nonveg', sort_order: 1 },
  { id: 2, slug: 'mandi', label: 'Mandi', type: 'nonveg', sort_order: 2 },
  { id: 3, slug: 'breads', label: 'Breads', type: 'veg', sort_order: 3 },
  { id: 4, slug: 'shawarma', label: 'Shawarma', type: 'nonveg', sort_order: 4 },
  { id: 5, slug: 'grills', label: 'Grills & Kebabs', type: 'nonveg', sort_order: 5 },
  { id: 6, slug: 'chicken-dry', label: 'Chicken Dry', type: 'nonveg', sort_order: 6 },
  { id: 7, slug: 'chicken-curry', label: 'Chicken Curry', type: 'nonveg', sort_order: 7 },
  { id: 8, slug: 'beef', label: 'Beef Items', type: 'nonveg', sort_order: 8 },
  { id: 9, slug: 'fish-seafood', label: 'Fish & Seafood', type: 'nonveg', sort_order: 9 },
  { id: 10, slug: 'egg', label: 'Egg Items', type: 'nonveg', sort_order: 10 },
  { id: 11, slug: 'veg-curry', label: 'Veg Curries', type: 'veg', sort_order: 11 },
  { id: 12, slug: 'veg-dry', label: 'Veg Dry', type: 'veg', sort_order: 12 },
  { id: 13, slug: 'paneer', label: 'Paneer', type: 'veg', sort_order: 13 },
  { id: 14, slug: 'soups', label: 'Soups', type: 'mixed', sort_order: 14 },
  { id: 15, slug: 'noodles', label: 'Noodles', type: 'mixed', sort_order: 15 },
  { id: 16, slug: 'extras', label: 'Extras', type: 'mixed', sort_order: 16 },
  { id: 17, slug: 'beverages', label: 'Beverages', type: 'veg', sort_order: 17 },
]

export const DEFAULT_ITEMS: MenuItem[] = [
  // RICE & BIRYANI
  { category_slug: 'rice', name: 'Chicken Biryani Full', price: 180, type: 'nonveg', sort_order: 1 },
  { category_slug: 'rice', name: 'Chicken Biryani Small', price: 130, type: 'nonveg', sort_order: 2 },
  { category_slug: 'rice', name: 'Beef Biryani Full', price: 160, type: 'nonveg', sort_order: 3 },
  { category_slug: 'rice', name: 'Beef Biryani Small', price: 120, type: 'nonveg', sort_order: 4 },
  { category_slug: 'rice', name: 'Mutton Biryani Full', price: 300, type: 'nonveg', sort_order: 5 },
  { category_slug: 'rice', name: 'Mutton Biryani Small', price: 180, type: 'nonveg', sort_order: 6 },
  { category_slug: 'rice', name: 'Fish Biryani Full', price: 240, type: 'nonveg', sort_order: 7 },
  { category_slug: 'rice', name: 'Fish Biryani Small', price: 210, type: 'nonveg', sort_order: 8 },
  { category_slug: 'rice', name: 'Ghee Rice Full', price: 80, type: 'veg', sort_order: 9 },
  { category_slug: 'rice', name: 'Ghee Rice Small', price: 60, type: 'veg', sort_order: 10 },
  { category_slug: 'rice', name: 'Biri Rice Full', price: 90, type: 'nonveg', sort_order: 11 },
  { category_slug: 'rice', name: 'Biri Rice Small', price: 70, type: 'nonveg', sort_order: 12 },
  { category_slug: 'rice', name: 'Meals', price: 60, type: 'veg', sort_order: 13 },
  { category_slug: 'rice', name: 'Erachi Chore', price: 120, type: 'nonveg', sort_order: 14 },
  { category_slug: 'rice', name: 'Chicken Fried Rice', price: 170, type: 'nonveg', sort_order: 15 },
  { category_slug: 'rice', name: 'Egg Fried Rice', price: 140, type: null, sort_order: 16 },
  { category_slug: 'rice', name: 'Veg Fried Rice', price: 130, type: 'veg', sort_order: 17 },
  { category_slug: 'rice', name: 'Shezwan Fried Rice', price: 190, type: 'nonveg', sort_order: 18 },

  // MANDI
  { category_slug: 'mandi', name: 'Mandi Rice', price: 100, type: 'nonveg', sort_order: 1 },
  { category_slug: 'mandi', name: 'Alfaham Mandi', price: 0, type: 'nonveg', sort_order: 2 },
  { category_slug: 'mandi', name: 'Chicken Mandi', price: 240, type: 'nonveg', sort_order: 3 },
  { category_slug: 'mandi', name: 'Shawaya Mandi', price: 0, type: 'nonveg', sort_order: 4 },
  { category_slug: 'mandi', name: 'Beef Ribs Mandi', price: 0, type: 'nonveg', sort_order: 5 },
  { category_slug: 'mandi', name: 'Masala Shawaya', price: 0, type: 'nonveg', sort_order: 6 },

  // BREADS
  { category_slug: 'breads', name: 'Porotta', price: 15, type: 'veg', sort_order: 1 },
  { category_slug: 'breads', name: 'Chappathi', price: 15, type: 'veg', sort_order: 2 },
  { category_slug: 'breads', name: 'Poori', price: 15, type: 'veg', sort_order: 3 },
  { category_slug: 'breads', name: 'Pathal', price: 15, type: 'veg', sort_order: 4 },
  { category_slug: 'breads', name: 'Appam', price: 13, type: 'veg', sort_order: 5 },
  { category_slug: 'breads', name: 'Idly Set', price: 15, type: 'veg', sort_order: 6 },
  { category_slug: 'breads', name: 'Orotty', price: 15, type: 'veg', sort_order: 7 },
  { category_slug: 'breads', name: 'Atta Porota', price: 17, type: 'veg', sort_order: 8 },
  { category_slug: 'breads', name: 'Masala Dosa', price: 60, type: 'veg', sort_order: 9 },
  { category_slug: 'breads', name: 'Ghee Dosa', price: 50, type: 'veg', sort_order: 10 },
  { category_slug: 'breads', name: 'Kothu Porotta', price: 140, type: 'nonveg', sort_order: 11 },
  { category_slug: 'breads', name: 'Rumali Rotti', price: 20, type: 'veg', sort_order: 12 },
  { category_slug: 'breads', name: 'Plain Kulcha', price: 25, type: 'veg', sort_order: 13 },
  { category_slug: 'breads', name: 'Butter Kulcha', price: 30, type: 'veg', sort_order: 14 },
  { category_slug: 'breads', name: 'Masala Kulcha', price: 40, type: 'veg', sort_order: 15 },
  { category_slug: 'breads', name: 'Tandoori Roti', price: 25, type: 'veg', sort_order: 16 },
  { category_slug: 'breads', name: 'Butter Naan', price: 20, type: 'veg', sort_order: 17 },
  { category_slug: 'breads', name: 'Kubbus', price: 8, type: 'veg', sort_order: 18 },

  // SHAWARMA
  { category_slug: 'shawarma', name: 'Chicken Shawarma', price: 150, type: 'nonveg', sort_order: 1 },
  { category_slug: 'shawarma', name: 'Plate Shawarma', price: 90, type: 'nonveg', sort_order: 2 },
  { category_slug: 'shawarma', name: 'Rumali Shawarma', price: 120, type: 'nonveg', sort_order: 3 },
  { category_slug: 'shawarma', name: 'Shawarma Special', price: 110, type: 'nonveg', sort_order: 4 },
  { category_slug: 'shawarma', name: 'Bun Shawarma', price: 100, type: 'nonveg', sort_order: 5 },
  { category_slug: 'shawarma', name: 'Porotta Egg Roll', price: 45, type: null, sort_order: 6 },

  // GRILLS & KEBABS
  { category_slug: 'grills', name: 'Tandoori Chicken', price: 140, type: 'nonveg', sort_order: 1 },
  { category_slug: 'grills', name: 'Alfaham', price: 140, type: 'nonveg', sort_order: 2 },
  { category_slug: 'grills', name: 'Peri Peri Alfaham', price: 150, type: 'nonveg', sort_order: 3 },
  { category_slug: 'grills', name: 'Chicken Tikka', price: 170, type: 'nonveg', sort_order: 4 },
  { category_slug: 'grills', name: 'Chicken Sheek Kabab', price: 150, type: 'nonveg', sort_order: 5 },
  { category_slug: 'grills', name: 'Beef Sheek Kabab', price: 150, type: 'nonveg', sort_order: 6 },
  { category_slug: 'grills', name: 'Chicken Polichath', price: 30, type: 'nonveg', sort_order: 7 },
  { category_slug: 'grills', name: 'AF Kondattam', price: 140, type: 'nonveg', sort_order: 8 },

  // CHICKEN DRY
  { category_slug: 'chicken-dry', name: 'Chicken Chilly Half', price: 150, type: 'nonveg', sort_order: 1 },
  { category_slug: 'chicken-dry', name: 'Chicken Chilly Full', price: 270, type: 'nonveg', sort_order: 2 },
  { category_slug: 'chicken-dry', name: 'Chicken 65 Half', price: 270, type: 'nonveg', sort_order: 3 },
  { category_slug: 'chicken-dry', name: 'Chicken 65 Full', price: 540, type: 'nonveg', sort_order: 4 },
  { category_slug: 'chicken-dry', name: 'Pepper Chicken Half', price: 300, type: 'nonveg', sort_order: 5 },
  { category_slug: 'chicken-dry', name: 'Pepper Chicken Full', price: 600, type: 'nonveg', sort_order: 6 },
  { category_slug: 'chicken-dry', name: 'Ginger Chicken Half', price: 280, type: 'nonveg', sort_order: 7 },
  { category_slug: 'chicken-dry', name: 'Ginger Chicken Full', price: 560, type: 'nonveg', sort_order: 8 },
  { category_slug: 'chicken-dry', name: 'Garlic Chicken Half', price: 280, type: 'nonveg', sort_order: 9 },
  { category_slug: 'chicken-dry', name: 'Garlic Chicken Full', price: 560, type: 'nonveg', sort_order: 10 },
  { category_slug: 'chicken-dry', name: 'Chicken Manchurian Half', price: 280, type: 'nonveg', sort_order: 11 },
  { category_slug: 'chicken-dry', name: 'Chicken Manchurian Full', price: 560, type: 'nonveg', sort_order: 12 },
  { category_slug: 'chicken-dry', name: 'Butter Chicken Half', price: 300, type: 'nonveg', sort_order: 13 },
  { category_slug: 'chicken-dry', name: 'Butter Chicken Full', price: 600, type: 'nonveg', sort_order: 14 },
  { category_slug: 'chicken-dry', name: 'Kadai Chicken Half', price: 280, type: 'nonveg', sort_order: 15 },
  { category_slug: 'chicken-dry', name: 'Kadai Chicken Full', price: 560, type: 'nonveg', sort_order: 16 },
  { category_slug: 'chicken-dry', name: 'Hyderabadi Chicken Half', price: 300, type: 'nonveg', sort_order: 17 },
  { category_slug: 'chicken-dry', name: 'Hyderabadi Chicken Full', price: 600, type: 'nonveg', sort_order: 18 },
  { category_slug: 'chicken-dry', name: 'Chicken Kondattam Half', price: 300, type: 'nonveg', sort_order: 19 },
  { category_slug: 'chicken-dry', name: 'Chicken Kondattam Full', price: 600, type: 'nonveg', sort_order: 20 },
  { category_slug: 'chicken-dry', name: 'Dragon Chicken Half', price: 300, type: 'nonveg', sort_order: 21 },
  { category_slug: 'chicken-dry', name: 'Dragon Chicken Full', price: 600, type: 'nonveg', sort_order: 22 },

  // CHICKEN CURRY
  { category_slug: 'chicken-curry', name: 'Chicken Curry', price: 120, type: 'nonveg', sort_order: 1 },
  { category_slug: 'chicken-curry', name: 'Chicken Roast', price: 110, type: 'nonveg', sort_order: 2 },
  { category_slug: 'chicken-curry', name: 'Chicken Parts', price: 70, type: 'nonveg', sort_order: 3 },

  // BEEF
  { category_slug: 'beef', name: 'Beef Fry', price: 110, type: 'nonveg', sort_order: 1 },
  { category_slug: 'beef', name: 'Beef Liver', price: 120, type: 'nonveg', sort_order: 2 },
  { category_slug: 'beef', name: 'Beef Curry', price: 120, type: 'nonveg', sort_order: 3 },
  { category_slug: 'beef', name: 'Beef Masala', price: 120, type: 'nonveg', sort_order: 4 },
  { category_slug: 'beef', name: 'Beef Chilly', price: 150, type: 'nonveg', sort_order: 5 },
  { category_slug: 'beef', name: 'Beef Kondattam', price: 160, type: 'nonveg', sort_order: 6 },

  // FISH & SEAFOOD
  { category_slug: 'fish-seafood', name: 'Fish Curry', price: 35, type: 'nonveg', sort_order: 1 },
  { category_slug: 'fish-seafood', name: 'Fish Masala', price: 35, type: 'nonveg', sort_order: 2 },
  { category_slug: 'fish-seafood', name: 'Fish Fry', price: 90, type: 'nonveg', sort_order: 3 },
  { category_slug: 'fish-seafood', name: 'Koonthal Masala', price: 120, type: 'nonveg', sort_order: 4 },
  { category_slug: 'fish-seafood', name: 'Kadukka Masala', price: 150, type: 'nonveg', sort_order: 5 },
  { category_slug: 'fish-seafood', name: 'Prawns Masala', price: 140, type: 'nonveg', sort_order: 6 },

  // EGG
  { category_slug: 'egg', name: 'Egg Roast', price: 35, type: null, sort_order: 1 },
  { category_slug: 'egg', name: 'Egg Curry', price: 90, type: null, sort_order: 2 },

  // VEG CURRIES
  { category_slug: 'veg-curry', name: 'Veg Kuruma', price: 35, type: 'veg', sort_order: 1 },
  { category_slug: 'veg-curry', name: 'Veg Curry', price: 35, type: 'veg', sort_order: 2 },
  { category_slug: 'veg-curry', name: 'Dal Fry', price: 60, type: 'veg', sort_order: 3 },
  { category_slug: 'veg-curry', name: 'Chemba Sala', price: 50, type: 'veg', sort_order: 4 },

  // VEG DRY
  { category_slug: 'veg-dry', name: 'Gobi Manchurian', price: 90, type: 'veg', sort_order: 1 },
  { category_slug: 'veg-dry', name: 'Tomato Fry', price: 50, type: 'veg', sort_order: 2 },
  { category_slug: 'veg-dry', name: 'Soyabean Masala', price: 90, type: 'veg', sort_order: 3 },

  // PANEER
  { category_slug: 'paneer', name: 'Paneer Butter Masala', price: 130, type: 'veg', sort_order: 1 },
  { category_slug: 'paneer', name: 'Paneer Chilly', price: 130, type: 'veg', sort_order: 2 },

  // SOUPS
  { category_slug: 'soups', name: 'Chicken Soup', price: 90, type: 'nonveg', sort_order: 1 },
  { category_slug: 'soups', name: 'Veg Soup', price: 60, type: 'veg', sort_order: 2 },

  // NOODLES
  { category_slug: 'noodles', name: 'Chicken Noodles', price: 170, type: 'nonveg', sort_order: 1 },
  { category_slug: 'noodles', name: 'Egg Noodles', price: 140, type: null, sort_order: 2 },
  { category_slug: 'noodles', name: 'Veg Noodles', price: 130, type: 'veg', sort_order: 3 },
  { category_slug: 'noodles', name: 'Shezwan Noodles', price: 190, type: 'nonveg', sort_order: 4 },

  // EXTRAS
  { category_slug: 'extras', name: 'Kada Fry', price: 110, type: 'nonveg', sort_order: 1 },
  { category_slug: 'extras', name: 'Kada Masala', price: 120, type: 'nonveg', sort_order: 2 },
  { category_slug: 'extras', name: 'Mutton Masala', price: 120, type: 'nonveg', sort_order: 3 },
  { category_slug: 'extras', name: 'Bottle', price: 60, type: 'veg', sort_order: 4 },
  { category_slug: 'extras', name: 'Mayonnaise', price: 10, type: 'veg', sort_order: 5 },

  // BEVERAGES
  { category_slug: 'beverages', name: 'Juice', price: 13, type: 'veg', sort_order: 1 },
  { category_slug: 'beverages', name: 'Shake', price: 20, type: 'veg', sort_order: 2 },
  { category_slug: 'beverages', name: 'Ice Cream', price: 25, type: 'veg', sort_order: 3 },
  { category_slug: 'beverages', name: 'Tea', price: 13, type: 'veg', sort_order: 4 },
  { category_slug: 'beverages', name: 'Coffee', price: 20, type: 'veg', sort_order: 5 },
  { category_slug: 'beverages', name: 'Boost', price: 25, type: 'veg', sort_order: 6 },
  { category_slug: 'beverages', name: 'Horlicks', price: 25, type: 'veg', sort_order: 7 },
]
