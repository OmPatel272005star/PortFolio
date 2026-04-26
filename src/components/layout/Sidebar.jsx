import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navLinks, personal } from '../../data/personal'
import { X } from 'lucide-react'
import { Download } from "lucide-react";

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation()

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="sidebar-overlay lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-50 bg-[#f3f4f6]
          border-r-2 border-black
          w-64
          transform transition-transform duration-200
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:h-auto lg:z-auto
          flex flex-col
          overflow-y-auto
        `}
      >
        {/* Mobile close button */}
        <div className="flex justify-end p-2 lg:hidden">
          <button
            onClick={onClose}
            className="border-2 border-black bg-white p-1 shadow-brutal-xs"
          >
            <X size={16} />
          </button>
        </div>

        {/* Profile box */}
        <div className="p-4 border-b-2 border-black">
          {/* Avatar */}
          <div className="relative border-2 border-black shadow-brutal bg-[#facc15] p-2 w-full aspect-square">

            {/* Inner dashed frame */}
            <div className="border-2 border-dashed border-black w-full h-full flex items-center justify-center overflow-hidden">

              {/* YOUR IMAGE */}
              <img
                src="/src/data/profile_photo.png" // <-- put your image here
                alt="Om Patel"
                className="w-full h-full object-cover grayscale contrast-125"
              />

            </div>

            {/* Corner Badge */}
            
          </div>

          {/* Name */}
          {/* <p
            className="font-bold text-sm text-black mb-1"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.65rem', lineHeight: 1.8 }}
          >
            {personal.name}
          </p> */}

          {/* Role */}
          {/* <p className="font-mono text-xs text-gray-600 mb-2">
            {personal.role}
          </p> */}

          {/* Availability */}
          {/* <div className="flex items-center gap-2 border-2 border-black bg-white px-2 py-1">
            <span className="w-2 h-2 bg-[#22c55e] border border-black inline-block flex-shrink-0"></span>
            <span className="font-mono text-xs text-[#166534] font-bold">{personal.availability}</span>
          </div> */}
        </div>

        {/* Navigation */}
        <nav className="flex flex-col p-3 gap-1 flex-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `nav-item text-xs flex items-center gap-2 ${isActive ? 'active' : ''}`
              }
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Resume button */}
        <div className="p-4 border-t-2 border-black">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition"
          >
            <Download size={18} />
            <span>RESUME</span>
          </a>
        </div>
      </aside>
    </>
  )
}
