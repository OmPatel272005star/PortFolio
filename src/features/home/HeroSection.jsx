import React from 'react'
import { personal, infoCards } from '../../data/personal'
import AvatarSVG from '../../data/avatarSVG';

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
          <div >

            {/* Inner dashed frame */}
            <div >

              {/* YOUR IMAGE */}
              <AvatarSVG/>
            </div>

            {/* Corner Badge */}
            {/*  */}
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
