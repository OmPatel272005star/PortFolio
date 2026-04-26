import React from 'react'
import { personal, infoCards } from '../../data/personal'

export default function HeroSection() {
  return (
    <div className="card-brutal mb-6">
      {/* Top: two columns on desktop */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* LEFT: text content */}
        <div className="flex-1">
          {/* Badge */}
          <div className="mb-3">
            <span className="section-tag">✦ Open To Work</span>
          </div>

          {/* Heading */}
          <h1
            className="text-black mb-4"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.85rem', lineHeight: 2.2 }}
          >
            I BUILD SYSTEMS THAT DELIVER{' '}
            <span className="text-[#22c55e]">MEASURABLE OUTCOMES</span>
          </h1>

          {/* Bio */}
          <p className="font-mono text-sm text-gray-600 mb-5 leading-relaxed">
            {personal.bio}
          </p>

          {/* Info cards */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            {infoCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.label}
                  className="border-2 border-black bg-white px-3 py-2 flex items-center gap-2 flex-1"
                >
                  <span>
                    <Icon size={18} color="#EA4335" />
                  </span>

                  <div>
                    <p className="font-mono text-xs text-gray-500">{card.label}</p>
                    <p className="font-mono text-xs font-bold break-all">{card.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA buttons */}
          <div className="flex gap-3 flex-wrap">
            {/* <a
              href="mailto:opatel272005@gmail.com"
              className="btn-yellow text-xs"
            >
              ✦ HIRE ME
            </a> */}
            <a
              href="/src/Resume/Resume.pdf"
              target="_blank"
              className="btn-white text-xs"
            >
              VIEW RESUME →
            </a>
          </div>
        </div>

        {/* RIGHT: stamp-style profile visual */}
        <div className="lg:w-56 flex-shrink-0 flex flex-col items-center">
          {/* Main Card */}
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
            <div className="absolute -top-3 -right-3 bg-[#ef4444] border-2 border-black w-10 h-10 flex items-center justify-center shadow-brutal-xs">
              <svg viewBox="0 0 24 24" className="w-6 h-6">
                {/* Saffron */}
                <rect width="24" height="8" y="0" fill="#FF9933" />
                {/* White */}
                <rect width="24" height="8" y="8" fill="#FFFFFF" />
                {/* Green */}
                <rect width="24" height="8" y="16" fill="#138808" />
                {/* Ashoka Chakra */}
                <g transform="translate(12,12)">
                  {/* Outer ring */}
                  <circle r="2.2" fill="none" stroke="#000080" strokeWidth="0.8" />
                  {/* 24 spokes */}
                  {[...Array(24)].map((_, i) => {
                    const angle = (i * 360) / 24;
                    return (
                      <line
                        key={i}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="-2.2"
                        stroke="#000080"
                        strokeWidth="0.4"
                        transform={`rotate(${angle})`}
                      />
                    );
                  })}
                </g>
              </svg>
            </div>
          </div>


          {/* Below stamp */}
          <div className="mt-3 border-2 border-black bg-white px-3 py-1 w-full text-center">
            <p
              style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.4rem', lineHeight: 2 }}
              className="text-gray-500"
            >
              B.TECH IT · 2022–2026
            </p>
            <p
              style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.45rem', lineHeight: 2 }}
              className="text-[#22c55e]"
            >
              CGPA: {personal.cgpa}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
