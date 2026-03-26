# 🚀 Quick Start Guide - Majlis Restaurant

## ⚡ Current Status

✅ **Development server is running at:** http://localhost:3000  
✅ **Menu page available at:** http://localhost:3000/menu  
✅ **Preview browser is ready** - Click the button in the tool panel to view!

---

## 🔑 Essential Information

### Admin Panel Password
```
majlis2024
```

### Supabase Setup
Run the SQL from `SETUP_GUIDE.md` in your Supabase SQL Editor to set up the database.

---

## 📋 Quick Commands

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Run Production Build
```bash
npm start
```

---

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Background | `#0B0A0E` | Main background |
| Primary | `#8B5E3C` | Warm brown accents |
| Accent | `#D4A853` | Antique gold |
| Light Gold | `#F0C97A` | Highlights |
| Card BG | `#13111A` | Card backgrounds |
| Text | `#EDE3D5` | Main text |
| Muted | `#8A7F72` | Secondary text |
| Veg | `#2E7D32` | Vegetarian badge |
| Non-Veg | `#B71C1C` | Non-vegetarian badge |

---

## ️ File Locations

### To Edit Menu Items
```
lib/defaults.ts
```

### To Edit Special Offers
Use admin panel OR edit SQL seed data in Supabase

### To Change Colors/Theme
```
app/globals.css
```

### To Update Restaurant Info
```
components/LandingPage.tsx  (Hero section)
components/Footer.tsx       (Footer info)
app/layout.tsx              (Metadata)
```

---

## 🌐 Deployment Checklist

- [ ] Run SQL setup in Supabase
- [ ] Test all menu items display correctly
- [ ] Test admin panel functionality
- [ ] Push code to GitHub
- [ ] Deploy on Vercel
- [ ] Add environment variables in Vercel dashboard
- [ ] Test production URL
- [ ] Generate QR code for customers

---

## 🎯 Key Features

### Landing Page
- Full-screen hero image
- Slow zoom animation
- Gold CTA button
- Restaurant info row

### Menu Page
- Sticky category nav
- Smooth scroll navigation
- Active tab highlighting
- Special offer banner
- Islamic pattern background
- Back to top button

### Admin Panel
- Password protected
- Edit special offers
- Manage menu items
- Preview & publish workflow
- Real-time updates

---

## 📱 Testing URLs

- **Home:** http://localhost:3000
- **Menu:** http://localhost:3000/menu
- **Admin:** Click ⚙ icon on menu page

---

## 🐛 Common Issues

### CSS Errors
Restart dev server: `Ctrl+C` then `npm run dev`

### Supabase Not Loading
- Check `.env.local` has correct credentials
- Verify internet connection
- App will use fallback data from `lib/defaults.ts`

### Images Not Showing
- Ensure Unsplash URLs are valid
- Check `next.config.js` image configuration

---

## 📞 Contact Info (Pre-filled)

**Restaurant:** Majlis Restaurant  
**Location:** Near Government Hospital, Kuthuparamba, Kannur  
**Phone:** 98956 89218  
**Delivery:** 3km radius  

---

**Ready to go! 🎉**  
Click the preview button to see your website!
