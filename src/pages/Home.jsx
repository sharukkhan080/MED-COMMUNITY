import { Link } from 'react-router-dom'
import { Calendar, MapPin, ArrowRight, Star } from 'lucide-react'
import { events, getEventStatus, statusConfig } from '../data/events'
import { doctors } from '../data/doctors'

function StatCard({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-white">{value}</div>
      <div className="text-blue-100 text-sm mt-1">{label}</div>
    </div>
  )
}

function EventCard({ event }) {
  const status = getEventStatus(event.date)
  const sc = statusConfig[status]

  return (
    <a
      href={`/events/${event.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 card-hover flex flex-col gap-3 min-w-[300px] max-w-[300px] cursor-pointer"
    >
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold w-fit ${sc.badge}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
        {status}
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
    </a>
  )
}

export default function Home() {
  const featured = events.filter(e => e.featured)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Association branding */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/logo.jpeg" alt="Pewa Doctors" className="w-16 h-16 object-contain drop-shadow-lg" />
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Padma Doctor Association
            </h1>
          </div>
          <p className="text-blue-200 text-base mb-12">Empowering India's Medical Community</p>

          {/* Original hero content */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            India's #1 Platform for Medical Professionals
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            Events by Doctors,<br />
            <span className="text-cyan-200">for Doctors</span>
          </h2>
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

      {/* Popular Doctors */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="text-center mb-8 px-4">
          <h2 className="text-2xl font-bold text-slate-900">Our Top Doctors</h2>
          <p className="text-slate-500 text-sm mt-1">Trusted specialists from across India</p>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-5 marquee-track" style={{ width: 'max-content', paddingLeft: '1.25rem' }}>
            {[...doctors, ...doctors].map((doc, i) => (
              <a
                key={i}
                href={`/doctors/${doc.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex flex-col items-center text-center w-52 shrink-0 hover:shadow-md hover:border-blue-200 transition-all cursor-pointer"
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-blue-100"
                />
                <p className="font-semibold text-slate-900 text-sm leading-snug">{doc.name}</p>
                <p className="text-blue-600 text-xs font-medium mt-1">{doc.specialization}</p>
                <p className="text-slate-400 text-xs mt-1 line-clamp-2">{doc.hospital}</p>
                <div className="flex items-center gap-1 mt-2">
                  <Star size={11} className="text-amber-400 fill-amber-400" />
                  <span className="text-xs font-semibold text-slate-700">{doc.rating}</span>
                </div>
              </a>
            ))}
          </div>
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
    </div>
  )
}
