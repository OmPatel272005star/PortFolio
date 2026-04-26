import React from 'react'
import { skills } from '../../data/personal'
import SectionWrapper from '../../components/ui/SectionWrapper'

function SkillGrid({ title, items }) {
  return (
    <div className="mb-5">
      <p
        className="mb-2 text-gray-500"
        style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.42rem', lineHeight: 2 }}
      >
        ── {title} ──
      </p>
      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 xl:grid-cols-10 gap-2">
        {items.map((skill) => (
          <div
            key={skill.name}
            className="aspect-square border-2 border-black bg-white shadow-brutal-xs flex flex-col items-center justify-center gap-2 p-2"
          >
            <div
              className="w-15 h-15 border-2 border-black flex items-center justify-center"
              style={{ backgroundColor: skill.color }}
            >
              {skill.icon ? (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-7 h-7 object-contain"
                  style={{
                    filter:
                      skill.name === 'Express.js' ||
                      skill.name === 'Kafka' ||
                      skill.name === 'GitHub'
                        ? 'invert(1)'
                        : 'none',
                  }}
                />
              ) : (
                <span
                  style={{
                    fontSize: '11px',
                    color: 'white',
                    fontFamily: "'Press Start 2P', cursive",
                    lineHeight: 1,
                    textAlign: 'center',
                  }}
                >
                  {skill.name.slice(0, 2).toUpperCase()}
                </span>
              )}
            </div>
            <p
              className="text-center text-black"
              style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.37rem', lineHeight: 1.8 }}
            >
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SkillsPage() {
  return (
    <div>
      <SectionWrapper badge="TECH STACK" title="SKILLS">
        <div className="card-brutal">
          <SkillGrid title="LANGUAGES" items={skills.languages} />
          <SkillGrid title="FRAMEWORKS & FRONTEND" items={skills.frameworks} />
          <SkillGrid title="DATABASES" items={skills.databases} />
          <SkillGrid title="DEVOPS & TOOLS" items={skills.devops} />
          <SkillGrid title="CS CONCEPTS" items={skills.concepts} />
        </div>
      </SectionWrapper>
    </div>
  )
}
