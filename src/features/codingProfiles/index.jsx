import React from 'react'
import { codingProfiles, achievements } from '../../data/personal'
import SectionWrapper from '../../components/ui/SectionWrapper'

const rankColors = {
  Knight: '#f97316',
  Pupil: '#22c55e',
}

export default function CodingPage() {
  return (
    <div>
      <SectionWrapper badge="COMPETITIVE CODING" title="CODING PROFILES">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {codingProfiles.map((profile) => (
            <div
              key={profile.id}
              className="card-brutal"
              style={{ borderTop: `6px solid ${profile.color}` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p
                    className="text-black mb-1"
                    style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.5rem', lineHeight: 2 }}
                  >
                    {profile.platform}
                  </p>
                  <p className="font-mono text-sm text-gray-600">@{profile.handle}</p>
                </div>
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-black"
                  style={{ fontSize: '0.5rem', padding: '4px 8px' }}
                >
                  ↗
                </a>
              </div>

              <div className="flex items-center gap-3 mt-3">
                {profile.rank && (
                  <span
                    className="border-2 border-black px-2 py-1 font-bold font-mono text-xs"
                    style={{ backgroundColor: profile.color }}
                  >
                    {profile.rank}
                  </span>
                )}
                {profile.rating && (
                  <span
                    className="font-bold"
                    style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.8rem' }}
                  >
                    {profile.rating}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper badge="HIGHLIGHTS" title="ACHIEVEMENTS">
        <div className="flex flex-col gap-4">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className="card-brutal flex items-start gap-4 justify-between"
              style={{ borderLeft: `6px solid ${ach.color}` }}
            >
              {/* Left content */}
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 flex-shrink-0 flex items-center justify-center border-2 border-black text-2xl"
                  style={{ backgroundColor: ach.color }}
                >
                  {ach.icon}
                </div>

                <div>
                  <p
                    className="text-black mb-1"
                    style={{
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: '0.5rem',
                      lineHeight: 2,
                    }}
                  >
                    {ach.title}
                  </p>
                  <p className="font-mono text-sm text-gray-600">{ach.detail}</p>
                </div>
              </div>

              {/* Link button */}
              {ach.url && (
                <a
                  href={ach.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-black"
                  style={{ fontSize: '0.5rem', padding: '4px 8px' }}
                >
                  ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
