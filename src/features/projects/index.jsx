import React from 'react'
import { projects } from '../../data/personal'
import SectionWrapper from '../../components/ui/SectionWrapper'

export default function ProjectsPage() {
  return (
    <div>
      <SectionWrapper badge="WHAT I'VE BUILT" title="PROJECTS">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white border-2 border-black shadow-brutal flex flex-col"
              style={{ borderTop: `6px solid ${proj.color}` }}
            >
              {/* Header */}
              <div className="p-4 border-b-2 border-black">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3
                    className="text-black"
                    style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.55rem', lineHeight: 2 }}
                  >
                    {proj.title}
                  </h3>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-black text-xs flex-shrink-0"
                    style={{ fontSize: '0.6rem', padding: '4px 8px' }}
                  >
                    ↗ GH
                  </a>
                </div>
                <p className="font-mono text-xs text-gray-500">{proj.subtitle}</p>
              </div>

              {/* Points */}
              <div className="p-4 flex-1">
                <ul className="space-y-2">
                  {proj.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 font-mono text-xs text-gray-700">
                      <span className="font-bold text-black flex-shrink-0">▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech badges */}
              <div className="p-4 border-t-2 border-black flex flex-wrap gap-2">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="border-2 border-black px-2 py-0.5 font-mono text-xs bg-[#f3f4f6]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
