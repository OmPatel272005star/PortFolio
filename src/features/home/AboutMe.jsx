import React from 'react'
import { personal } from '../../data/personal'
import { BookOpen } from "lucide-react";

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

      {/* My Story */}
      <div>
        {/* <h3
          className="mb-4 text-black flex items-center gap-2"
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '0.6rem',
            lineHeight: 2
          }}
        >
          <BookOpen size={16} strokeWidth={2.5} />
          My Interest
        </h3> */}

        {personal.story.split('\n\n').map((para, i) => (
          <p
            key={i}
            className="font-mono text-sm text-gray-700 leading-relaxed mb-4"
          >
            {para}
          </p>
        ))}

        {/* Social links */}
        {/* <div className="flex gap-3 mt-4 flex-wrap">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="btn-yellow text-xs"
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
        </div> */}
      </div>

    </div>
  )
}