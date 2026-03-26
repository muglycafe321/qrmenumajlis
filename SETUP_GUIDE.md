# 🍽️ Majlis Restaurant - Digital Menu Website

## ✅ Project Successfully Created!

**Restaurant:** Majlis Restaurant  
**Tagline:** Authentic Flavours, Royal Experience  
**Theme:** Royal Arabic / Middle Eastern Luxury

---

## 🎨 Design Theme

- **Background:** #0B0A0E (Deep Dark Purple-Black)
- **Primary:** #8B5E3C (Warm Rich Brown)
- **Accent:** #D4A853 (Antique Gold)
- **Text:** #EDE3D5
- **Fonts:** Cormorant Garamond (Headings) + Nunito (Body)

---

## 📁 Project Structure

```
majlis-restaurant/
├── app/
│   ├── layout.tsx              # Root layout with Google Fonts
│   ├── page.tsx                # Landing page
│   ├── menu/
│   │   └── page.tsx            # Full menu page
│   └── globals.css             # Royal Arabic theme CSS
├── components/
│   ├── LandingPage.tsx         # Hero landing page
│   ├── CategoryNav.tsx         # Sticky category navigation
│   ├── SpecialOfferBanner.tsx  # Special offers section
│   ├── MenuSection.tsx         # Menu category section
│   ├── MenuItem.tsx            # Individual menu item card
│   ├── AdminDrawer.tsx         # Admin panel drawer
│   ├── SpecialOfferPane.tsx    # Special offer management
│   ├── MenuItemsPane.tsx       # Menu items management
│   ├── PreviewModal.tsx        # Publish confirmation modal
│   ├── BackToTop.tsx           # Scroll to top button
│   └── Footer.tsx              # Site footer
├── lib/
│   ├── supabase.ts             # Supabase client
│   ├── types.ts                # TypeScript interfaces
│   └── defaults.ts             # Fallback menu data
├── .env.local                  # Environment variables
├── next.config.js              # Next.js configuration
└── package.json
```

---

## 🚀 Getting Started

### 1. Set Up Supabase Database

Go to your Supabase project and run this SQL in the SQL Editor:

```sql
-- Create special_offer table
CREATE TABLE special_offer (
  id         SERIAL PRIMARY KEY,
  name       TEXT    NOT NULL,
  price      INTEGER NOT NULL,
  sort_order INTEGER DEFAULT 0
);

-- Insert default offers
INSERT INTO special_offer (name, price, sort_order) VALUES
  ('Family Meal',  499, 1),
  ('Couple Meal',  249, 2),
  ('Solo Special', 149, 3);

-- Create menu_categories table
CREATE TABLE menu_categories (
  id         SERIAL PRIMARY KEY,
  slug       TEXT UNIQUE NOT NULL,
  label      TEXT NOT NULL,
  type       TEXT DEFAULT 'veg',
  sort_order INTEGER DEFAULT 0
);

-- Create menu_items table
CREATE TABLE menu_items (
  id            SERIAL PRIMARY KEY,
  category_slug TEXT REFERENCES menu_categories(slug)
                 ON DELETE CASCADE,
  name          TEXT    NOT NULL,
  price         INTEGER NOT NULL,
  type          TEXT    DEFAULT NULL,
  sort_order    INTEGER DEFAULT 0
);

-- Enable Row Level Security
ALTER TABLE special_offer   ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items      ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "public read" ON special_offer
  FOR SELECT USING (true);
CREATE POLICY "public read" ON menu_categories
  FOR SELECT USING (true);
CREATE POLICY "public read" ON menu_items
  FOR SELECT USING (true);
CREATE POLICY "anon write"  ON special_offer
  FOR ALL USING (true);
CREATE POLICY "anon write"  ON menu_categories
  FOR ALL USING (true);
CREATE POLICY "anon write"  ON menu_items
  FOR ALL USING (true);

-- Seed categories
INSERT INTO menu_categories (slug, label, type, sort_order) VALUES
  ('mandi',         'Mandi',          'nonveg', 1),
  ('grills',        'Grills',         'nonveg', 2),
  ('biriyani',      'Biriyani',       'nonveg', 3),
  ('kebabs',        'Kebabs',         'nonveg', 4),
  ('shawarma',      'Shawarma',       'nonveg', 5),
  ('burgers',       'Burgers',        'mixed',  6),
  ('wraps',         'Wraps',          'mixed',  7),
  ('rice-dishes',   'Rice Dishes',    'mixed',  8),
  ('soups',         'Soups',          'mixed',  9),
  ('salads',        'Salads',         'veg',    10),
  ('mezze',         'Mezze',          'veg',    11),
  ('breads',        'Breads',         'veg',    12),
  ('desserts',      'Desserts',       'veg',    13);

-- Add menu items (sample - customize as needed)
INSERT INTO menu_items (category_slug, name, price, type, sort_order) VALUES
  -- MANDI
  ('mandi', 'Chicken Mandi',     350, 'nonveg', 1),
  ('mandi', 'Mutton Mandi',      450, 'nonveg', 2),
  ('mandi', 'Fish Mandi',        400, 'nonveg', 3),
  ('mandi', 'Mixed Mandi',       499, 'nonveg', 4),
  
  -- GRILLS
  ('grills', 'Chicken Grill Full',  380, 'nonveg', 1),
  ('grills', 'Chicken Grill Half',  200, 'nonveg', 2),
  ('grills', 'Fish Grill',          320, 'nonveg', 3),
  ('grills', 'Prawn Grill',         420, 'nonveg', 4),
  ('grills', 'Mutton Chops',        460, 'nonveg', 5),
  
  -- BIRIYANI
  ('biriyani', 'Chicken Biriyani',  180, 'nonveg', 1),
  ('biriyani', 'Mutton Biriyani',   220, 'nonveg', 2),
  ('biriyani', 'Prawn Biriyani',    250, 'nonveg', 3),
  ('biriyani', 'Fish Biriyani',     220, 'nonveg', 4);
```

### 2. Environment Variables

The `.env.local` file is already configured with your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=https://thcxqsojqnrostrnapwp.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_bfsF7VgDxtk3GFgJqSXXbg_YaShbLcH
```

### 3. Run Development Server

The server is already running at `http://localhost:3000`

```bash
npm run dev
```

### 4. Access the Menu

- **Landing Page:** http://localhost:3000
- **Full Menu:** http://localhost:3000/menu

---

## 🛠️ Admin Panel

### Accessing Admin Panel

1. Click the ⚙ gear icon at bottom-left of the menu page
2. Enter password: `majlis2024`
3. Access two tabs:
   - **🥘 Special Offer** - Manage special deals
   - **📋 Menu Items** - Edit prices, add/delete items

### Features

- ✅ Edit special offer prices in real-time
- ✅ Add new special offers
- ✅ Delete special offers
- ✅ Edit menu item prices
- ✅ Add new menu items to any category
- ✅ Delete menu items
- ✅ Preview before publishing
- ✅ Confirmation modal for publish actions
- ✅ All changes sync to Supabase instantly

---

## 🎨 Features Implemented

### Landing Page
- ✅ Full-screen hero image with slow zoom animation
- ✅ Elegant gradient overlay
- ✅ Royal typography (Cormorant Garamond)
- ✅ Gold CTA button → Navigate to menu
- ✅ Restaurant info (location, delivery, phone)
- ✅ Smooth fade-up animations

### Menu Page
- ✅ Sticky category navigation with horizontal scroll
- ✅ Active category highlight on scroll
- ✅ Smooth scroll to sections on tab click
- ✅ Special offer banner with 3 default deals
- ✅ Islamic geometric pattern background
- ✅ Card-based menu items with corner accents
- ✅ Veg/Non-veg badges
- ✅ Hover effects and animations
- ✅ Back to top button (appears after 300px)
- ✅ Responsive footer

### Admin Panel
- ✅ Password protection (majlis2024)
- ✅ Side drawer animation
- ✅ Two-tab interface
- ✅ Real-time price editing
- ✅ Add/delete items
- ✅ Preview & publish workflow
- ✅ Success feedback ("✓ Published!")
- ✅ Session-based authentication

---

## 🌐 Deployment to Vercel

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Majlis Restaurant"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to vercel.com
   - Import your GitHub repository
   - Environment variables will auto-detect from `.env.local`
   - Click Deploy

3. **Production URL**
   - You'll get a URL like: `https://majlis-restaurant.vercel.app`
   - Generate QR code at qr-code-generator.com

---

## 📱 Tech Stack

- **Framework:** Next.js 16.2.1 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS
- **Database:** Supabase (PostgreSQL)
- **Fonts:** Cormorant Garamond + Nunito (Google Fonts)
- **Images:** Unsplash via next/image
- **Deployment:** Vercel

---

## 🎯 Key Files to Customize

### Menu Items
Edit `lib/defaults.ts` to change default menu items and prices

### Special Offers
Use the admin panel or edit SQL seed data

### Colors & Theme
Edit CSS variables in `app/globals.css`:
```css
:root {
  --background: #0B0A0E;
  --primary: #8B5E3C;
  --accent: #D4A853;
  --accent-light: #F0C97A;
  /* ... */
}
```

### Restaurant Info
Update in these files:
- `components/LandingPage.tsx` - Hero section
- `components/Footer.tsx` - Footer contact info
- `app/layout.tsx` - Metadata title & description

---

## 🔧 Troubleshooting

### CSS Import Error
If you see CSS import errors, restart the dev server:
```bash
Ctrl+C
npm run dev
```

### Supabase Connection Issues
- Check your internet connection
- Verify Supabase URL and anon key in `.env.local`
- Ensure RLS policies are set up correctly
- The app falls back to default data if Supabase is unreachable

### Images Not Loading
- Check `next.config.js` has Unsplash in `remotePatterns`
- Ensure images are from allowed domains

---

## 📞 Support

For issues or questions about this implementation, refer to the original project requirements or check the Next.js documentation.

---

**Built with ❤️ for Majlis Restaurant**  
*Every Meal Tells a Story*
