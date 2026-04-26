import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import { Menu } from 'lucide-react'
import { personal } from '../../data/personal'

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex flex-col">
      {/* Header */}
      <header className="w-full border-b-2 border-black bg-white sticky top-0 z-30">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left: hamburger (mobile) + logo */}
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden border-2 border-black bg-white p-1 shadow-brutal-xs"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              <Menu size={18} />
            </button>
            <span
              className="text-black font-bold"
              style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.6rem', lineHeight: 2 }}
            >
              &lt;OM.DEV /&gt;
            </span>
          </div>

          {/* Right: buttons */}
          <div className="flex items-center gap-2">
            <Link to="/" className="btn-white text-xs hidden sm:block">
              Home
            </Link>
            <a
              href="mailto:opatel272005@gmail.com"
              className="btn-red text-xs"
            >
              Hire Me
            </a>
          </div>
        </div>
      </header>

      {/* Body: sidebar + content */}
      <div className="flex flex-1 min-h-0">
        {/* Sidebar (desktop: static, mobile: overlay) */}
        <div className="hidden lg:block w-64 flex-shrink-0 border-r-2 border-black min-h-screen">
          <Sidebar isOpen={true} onClose={() => {}} />
        </div>

        {/* Mobile sidebar */}
        <div className="lg:hidden">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </div>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
