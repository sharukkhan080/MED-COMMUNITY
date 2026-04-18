import { Link } from 'react-router-dom'
import { Calendar, MapPin, ArrowRight, Award } from 'lucide-react'
import { events, typeConfig } from '../data/events'

function StatCard({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-white">{value}</div>
      <div className="text-blue-100 text-sm mt-1">{label}</div>
    </div>
  )
}

function EventCard({ event }) {
  const config = typeConfig[event.type] || {}
  const pct = Math.round((event.registered / event.seats) * 100)

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 card-hover flex flex-col gap-3 min-w-[300px] max-w-[300px]">
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold w-fit ${config.badge}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
        {event.type}
      </span>

      <h3 className="font-semibold text-slate-900 leading-snug line-clamp-2">{event.title}</h3>

      <div className="space-y-1.5 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <Calendar size={14} />
          {event.date}
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={14} />
          {event.location}
        </div>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <img
          src={event.speaker.image}
          alt={event.speaker.name}
          className="w-7 h-7 rounded-full object-cover"
        />
        <p className="text-xs text-slate-600 font-medium">{event.speaker.name}</p>
      </div>

      <div className="mt-auto">
        <div className="flex justify-between text-xs text-slate-500 mb-1">
          <span>{event.registered} registered</span>
          <span>{pct}% full</span>
        </div>
        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${config.gradient} rounded-full`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const featured = events.filter(e => e.featured)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            India's #1 Platform for Medical Professionals
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Events by Doctors,<br />
            <span className="text-cyan-200">for Doctors</span>
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
            Discover CME conferences, workshops, scholarships, and community discussions curated for India's medical community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/events"
              className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Browse Events
            </Link>
            <Link
              to="/about"
              className="border-2 border-white/40 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-4xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard value="12,000+" label="Registered Doctors" />
          <StatCard value="200+" label="Events This Year" />
          <StatCard value="50+" label="Partner Institutions" />
          <StatCard value="₹2Cr+" label="Scholarships Awarded" />
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Featured Events</h2>
              <p className="text-slate-500 text-sm mt-1">Handpicked by our editorial team</p>
            </div>
            <Link
              to="/events"
              className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:gap-2 transition-all"
            >
              View all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-4">
            {featured.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Category highlights */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Conferences', icon: '🏛️', count: 3 },
              { label: 'Workshops', icon: '🔬', count: 1 },
              { label: 'Webinars', icon: '💻', count: 1 },
              { label: 'Scholarships', icon: '🎓', count: 1 },
              { label: 'Discussions', icon: '💬', count: 2 },
              { label: 'Knowledge', icon: '📚', count: 1 },
            ].map(cat => (
              <Link
                key={cat.label}
                to="/events"
                className="bg-white rounded-2xl p-4 text-center border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
              >
                <div className="text-3xl mb-2">{cat.icon}</div>
                <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{cat.label}</p>
                <p className="text-xs text-slate-400 mt-0.5">{cat.count} events</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-10 text-white text-center">
            <Award size={40} className="mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl font-bold mb-3">Are you an organizer?</h2>
            <p className="text-blue-100 mb-8 max-w-md mx-auto">
              Host your next medical event, workshop, or scholarship on MedCommunity and reach thousands of doctors across India.
            </p>
            <button className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
              Host an Event for Free
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
