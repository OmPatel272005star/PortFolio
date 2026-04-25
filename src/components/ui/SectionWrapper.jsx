import React from 'react'

export default function SectionWrapper({ title, badge, children, className = '' }) {
  return (
    <section className={`mb-8 ${className}`}>
      {(title || badge) && (
        <div className="flex items-center gap-3 mb-4">
          {badge && (
            <span className="section-tag">{badge}</span>
          )}
          {title && (
            <h2
              className="text-black font-bold"
              style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.65rem', lineHeight: 2 }}
            >
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </section>
  )
}
