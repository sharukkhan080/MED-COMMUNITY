import { Link } from 'react-router-dom'
import { Stethoscope, Twitter, Linkedin, Youtube, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Stethoscope size={18} className="text-white" />
              </div>
              MedCommunity
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              India's premier platform for medical professionals — connecting doctors, sharing knowledge, and advancing healthcare together.
            </p>
            <div className="flex gap-3 mt-4">
              {[Twitter, Linkedin, Youtube, Mail].map((Icon, i) => (
                <button key={i} className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Platform links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Platform</h4>
            <ul className="space-y-2 text-sm">
              {['Events', 'Scholarships', 'Webinars', 'Workshops', 'Community'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Careers', 'Contact', 'Privacy Policy', 'Terms of Service'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-sm text-center">
          &copy; {new Date().getFullYear()} MedCommunity. All rights reserved. Built with love for India's medical community.
        </div>
      </div>
    </footer>
  )
}
