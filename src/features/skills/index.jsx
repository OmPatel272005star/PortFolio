import React from 'react'
import { skills } from '../../data/personal'
import SectionWrapper from '../../components/ui/SectionWrapper'

function SkillGrid({ title, items }) {
  return (
    <div className="mb-6">
      <p
        className="mb-3 text-gray-500"
        style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.5rem', lineHeight: 2 }}
      >
        ── {title} ──
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
        {items.map((skill) => (
          <div
            key={skill.name}
            className="aspect-square border-2 border-black bg-white shadow-brutal-xs flex flex-col items-center justify-center gap-2 p-2"
          >
            <div
              className="w-10 h-10 border-2 border-black flex items-center justify-center text-xl"
              style={{ backgroundColor: skill.color }}
            >
              {skill.icon}
            </div>
            <p
              className="text-center text-black"
              style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.38rem', lineHeight: 1.8 }}
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
