import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/events', label: 'Events' },
    { to: '/about', label: 'About' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/logo.jpeg"
              alt="Pewa Doctors"
              className="w-10 h-10 object-contain"
            />
            <div className="leading-tight">
              <p className="font-extrabold text-sm text-slate-800 tracking-tight">Padma Doctor</p>
              <p className="font-extrabold text-sm text-blue-600 tracking-tight">Association</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="ml-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm">
              Contact Us
            </button>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
