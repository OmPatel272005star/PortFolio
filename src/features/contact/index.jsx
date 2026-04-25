import React, { useState } from 'react'
import { personal } from '../../data/personal'
import SectionWrapper from '../../components/ui/SectionWrapper'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, wire up to a form API (e.g. Formspree, EmailJS)
    setSent(true)
  }

  const contactInfo = [
    { icon: '✉️', label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: '📍', label: 'Location', value: personal.location, href: null },
    { icon: '📞', label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: '🐙', label: 'GitHub', value: 'github.com/om-patel', href: personal.github },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/om-patel', href: personal.linkedin },
  ]

  return (
    <div>
      <SectionWrapper badge="GET IN TOUCH" title="CONTACT">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Left: info */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="card-brutal mb-4">
              <p
                className="text-black mb-4"
                style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.5rem', lineHeight: 2 }}
              >
                LET'S CONNECT
              </p>
              <p className="font-mono text-sm text-gray-600 leading-relaxed mb-4">
                Open to internships, full-time roles, freelance projects, and interesting collaborations.
              </p>
              <div className="flex flex-col gap-3">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-3 border-2 border-black p-2 bg-[#f3f4f6]">
                    <span className="text-lg flex-shrink-0">{info.icon}</span>
                    <div className="min-w-0">
                      <p className="font-mono text-xs text-gray-500">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} target="_blank" rel="noreferrer" className="font-mono text-xs font-bold text-black hover:text-[#22c55e] break-all">
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-mono text-xs font-bold text-black">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="flex-1 card-brutal">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="text-5xl border-2 border-black bg-[#22c55e] w-20 h-20 flex items-center justify-center shadow-brutal">
                  ✓
                </div>
                <p
                  className="text-black"
                  style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.55rem', lineHeight: 2 }}
                >
                  MESSAGE SENT!
                </p>
                <p className="font-mono text-sm text-gray-600">I'll get back to you soon.</p>
                <button onClick={() => setSent(false)} className="btn-yellow text-xs">
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <p
                  className="text-black mb-2"
                  style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.5rem', lineHeight: 2 }}
                >
                  SEND A MESSAGE
                </p>

                <div>
                  <label className="font-mono text-xs text-gray-500 block mb-1">YOUR NAME</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full border-2 border-black p-2 font-mono text-sm bg-white outline-none focus:shadow-brutal-xs"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-gray-500 block mb-1">EMAIL</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full border-2 border-black p-2 font-mono text-sm bg-white outline-none focus:shadow-brutal-xs"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-gray-500 block mb-1">MESSAGE</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Hi Om, I'd like to..."
                    className="w-full border-2 border-black p-2 font-mono text-sm bg-white outline-none focus:shadow-brutal-xs resize-none"
                  />
                </div>

                <button type="submit" className="btn-yellow text-xs self-start">
                  ▶ SEND MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
