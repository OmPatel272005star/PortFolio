import React from 'react'
import { personal, whatIDo } from '../../data/personal'

export default function AboutMe() {
  return (
    <div className="card-brutal">
      {/* Divider label */}
      <div className="border-b-2 border-black mb-6 pb-3">
        <span
          style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.55rem', lineHeight: 2 }}
          className="text-gray-500"
        >
          ── MORE ABOUT ME ──
        </span>
      </div>

      {/* Two columns: My Story + What I Do */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* LEFT: My Story */}
        <div className="flex-1">
          <h3
            className="mb-4 text-black"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.6rem', lineHeight: 2 }}
          >
            📖 MY STORY
          </h3>
          {personal.story.split('\n\n').map((para, i) => (
            <p
              key={i}
              className="font-mono text-sm text-gray-700 leading-relaxed mb-4"
            >
              {para}
            </p>
          ))}

          {/* Social links */}
          <div className="flex gap-3 mt-4 flex-wrap">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="btn-black text-xs"
            >
              ↗ GITHUB
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-white text-xs"
            >
              ↗ LINKEDIN
            </a>
          </div>
        </div>

        {/* RIGHT: What I Do */}
        <div className="flex-1">
          <h3
            className="mb-4 text-black"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.6rem', lineHeight: 2 }}
          >
            ⚡ WHAT I DO
          </h3>

          <div className="flex flex-col gap-3">
            {whatIDo.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-3 border-2 border-black bg-white p-3 shadow-brutal-xs"
              >
                {/* Icon box */}
                <div
                  className="w-10 h-10 flex-shrink-0 flex items-center justify-center border-2 border-black text-lg"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <p
                    className="font-bold text-black mb-1"
                    style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.45rem', lineHeight: 2 }}
                  >
                    {item.title}
                  </p>
                  <p className="font-mono text-xs text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t-2 border-black mt-6 pt-4 flex gap-3 flex-wrap">
        <a href="mailto:opatel272005@gmail.com" className="btn-yellow text-xs">
          ✦ HIRE ME
        </a>
        <a href="#" className="btn-white text-xs">
          VIEW RESUME →
        </a>
      </div>
    </div>
  )
}
