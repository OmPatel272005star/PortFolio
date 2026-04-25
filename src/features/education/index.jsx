import React from 'react'
import { education } from '../../data/personal'
import SectionWrapper from '../../components/ui/SectionWrapper'

export default function EducationPage() {
  return (
    <div>
      <SectionWrapper badge="ACADEMIC BACKGROUND" title="EDUCATION">
        <div className="flex flex-col gap-5">
          {education.map((edu, idx) => (
            <div
              key={edu.id}
              className="card-brutal"
              style={{ borderLeft: `6px solid ${edu.color}` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h3
                    className="text-black mb-1"
                    style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.6rem', lineHeight: 2 }}
                  >
                    {edu.institution}
                  </h3>
                  <p className="font-mono text-sm text-gray-700 mb-1">{edu.degree}</p>
                  <p className="font-mono text-xs text-gray-500">{edu.duration}</p>
                </div>
                <div className="flex-shrink-0">
                  <span
                    className="border-2 border-black px-3 py-2 font-bold font-mono text-sm block text-center"
                    style={{ backgroundColor: edu.color }}
                  >
                    {edu.score}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
