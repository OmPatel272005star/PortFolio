import React, { useState, useEffect } from 'react'
import { personal } from '../../data/personal'
import SectionWrapper from '../../components/ui/SectionWrapper'
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react'


const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const MY_EMAIL            = import.meta.env.VITE_MY_EMAIL;

export default function ContactPage() {
  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [sent, setSent]       = useState(false)
  const [sending, setSending] = useState(false)
  const [errMsg, setErrMsg]   = useState('')
  const [ejsReady, setEjsReady] = useState(false)

  const notConfigured = !EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID
  // Load EmailJS SDK once
  useEffect(() => {
    if (window.emailjs) { setEjsReady(true); return }
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
    script.async = true
    script.onload = () => {
      window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })
      setEjsReady(true)
    }
    script.onerror = () => console.warn('EmailJS failed to load')
    document.head.appendChild(script)
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = () => {
    if (!form.name.trim())    return 'Please enter your name.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
                              return 'Please enter a valid email address.'
    if (!form.message.trim()) return 'Please write a message.'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrMsg('')
   
    const err = validate()
    if (err) { setErrMsg(err); return }

    if (notConfigured) {
      setErrMsg('EmailJS is not configured yet.')
      return
    }

    setSending(true)
    try {
      await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email:   MY_EMAIL,
          from_name:  form.name.trim(),
          from_email: form.email.trim(),
          subject:    `Portfolio Contact from ${form.name.trim()}`,
          message:    form.message.trim(),
          reply_to:   form.email.trim(),
        }
      )
      setSent(true)
    } catch (error) {
      console.error('EmailJS error:', error)
      setErrMsg(`Send failed. Email directly: ${MY_EMAIL}`)
    } finally {
      setSending(false)
    }
  }

  const reset = () => {
    setForm({ name: '', email: '', message: '' })
    setSent(false)
    setErrMsg('')
  }

  const contactInfo = [
    { icon: <Mail/>, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: <MapPin/>, label: 'Location', value: personal.location, href: null },
    { icon: <Phone/>, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: <Github/>, label: 'GitHub', value: 'github.com/om-patel', href: personal.github },
    { icon: <Linkedin/>, label: 'LinkedIn', value: 'linkedin.com/in/om-patel', href: personal.linkedin },
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
                <button onClick={reset} className="btn-yellow text-xs">
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

                {/* EmailJS not configured warning */}
                {notConfigured && (
                  <div className="font-mono text-xs text-yellow-700 bg-yellow-50 border-2 border-yellow-400 p-2">
                    ⚙️ EmailJS not configured yet — paste your Service ID, Template ID &amp; Public Key into ContactPage.jsx.
                  </div>
                )}

                {/* Error */}
                {errMsg && (
                  <div className="font-mono text-xs text-red-700 bg-red-50 border-2 border-red-400 p-2">
                    ⚠️ {errMsg}
                  </div>
                )}

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
                  <label className="font-mono text-xs text-gray-500 block mb-1">Your EMAIL ID</label>
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

                <button
                  type="submit"
                  disabled={sending || notConfigured}
                  className="btn-yellow text-xs self-start"
                >
                  {sending ? '⏳ SENDING...' : '▶ SEND MESSAGE'}
                </button>
              </form>
            )}
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}