'use client'

import { useState, useEffect } from 'react'
import { MenuCategory, MenuItem } from '@/lib/types'
import MenuItemsPane from './MenuItemsPane'

interface AdminDrawerProps {
  categories: MenuCategory[]
  items: MenuItem[]
  onItemsChange: (items: MenuItem[]) => void
  onMenuItemsChange: () => Promise<void>
}

export default function AdminDrawer({
  categories,
  items,
  onItemsChange,
  onMenuItemsChange,
}: AdminDrawerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')

  // Check if already authenticated
  useEffect(() => {
    const authStatus = sessionStorage.getItem('adminAuthenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = () => {
    if (password === 'majlis2024') {
      setIsAuthenticated(true)
      sessionStorage.setItem('adminAuthenticated', 'true')
      setPassword('')
    } else {
      alert('Incorrect password!')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('adminAuthenticated')
    setIsOpen(false)
  }

  return (
    <>
      {/* Admin Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-[#13111A] border border-[rgba(212,168,83,0.28)] text-[#D4A853] flex items-center justify-center hover:bg-[#1A1824] transition-all shadow-lg"
        aria-label="Admin panel"
      >
        ⚙
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#0B0A0E] border-l border-[rgba(212,168,83,0.28)] z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-[rgba(212,168,83,0.28)]">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gradient italic">
              {isAuthenticated ? 'Admin Panel' : 'Admin Login'}
            </h2>
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="text-sm text-[#8A7F72] hover:text-[#D4A853] transition-colors"
              >
                Logout
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 h-[calc(100%-140px)]">
          {!isAuthenticated ? (
            <div className="space-y-4">
              <p className="text-[#8A7F72] text-sm">Enter admin password to access the panel.</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="input-field w-full"
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
              <button onClick={handleLogin} className="btn-primary w-full">
                Login
              </button>
            </div>
          ) : (
            <MenuItemsPane
              categories={categories}
              items={items}
              onItemsChange={onItemsChange}
              onMenuItemsChange={onMenuItemsChange}
            />
          )}
        </div>
      </div>
    </>
  )
}
