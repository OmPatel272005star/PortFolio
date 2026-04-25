import React from 'react'
import { experience } from '../../data/personal'
import SectionWrapper from '../../components/ui/SectionWrapper'

const orderColors = ['#facc15', '#f97316', '#22c55e', '#3b82f6']

export default function ExperiencePage() {
  return (
    <div>
      <SectionWrapper badge="WORK & ACTIVITIES" title="EXPERIENCE">
        <div className="relative">
          {/* Vertical timeline line - hidden on mobile */}
          <div
            className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-black"
            style={{ zIndex: 0 }}
          />

          <div className="flex flex-col gap-6">
            {experience.map((exp, idx) => {
              const color = orderColors[idx] || '#3b82f6'
              return (
                <div key={exp.id} className="flex flex-col sm:flex-row gap-0 sm:gap-4 items-start">

                  {/* Number box */}
                  <div className="flex sm:flex-col items-center gap-3 sm:gap-0 mb-3 sm:mb-0">
                    <div
                      className="w-16 h-16 flex-shrink-0 flex items-center justify-center border-2 border-black shadow-brutal-xs font-bold z-10 relative"
                      style={{ backgroundColor: color, fontFamily: "'Press Start 2P', cursive", fontSize: '1.2rem' }}
                    >
                      {exp.order}
                    </div>
                    {/* Arrow pointing right (desktop only) */}
                    <div
                      className="hidden sm:block w-4 h-0 border-t-2 border-black"
                      style={{ marginTop: 'auto', position: 'absolute', left: '4.5rem', marginTop: '-2rem' }}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 bg-white border-2 border-black shadow-brutal p-4 sm:ml-4"
                    style={{ borderLeft: `6px solid ${color}` }}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3
                          className="text-black mb-1"
                          style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.55rem', lineHeight: 2 }}
                        >
                          {exp.role}
                        </h3>
                        <p className="font-mono text-sm font-bold text-gray-700">{exp.company}</p>
                      </div>
                      <span
                        className="border-2 border-black px-2 py-1 font-mono text-xs bg-white flex-shrink-0 self-start"
                        style={{ backgroundColor: color }}
                      >
                        {exp.duration}
                      </span>
                    </div>

                    {/* Points */}
                    <ul className="space-y-2">
                      {exp.points.map((point, pi) => (
                        <li key={pi} className="flex items-start gap-2 font-mono text-sm text-gray-700">
                          <span className="font-bold text-black flex-shrink-0">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
