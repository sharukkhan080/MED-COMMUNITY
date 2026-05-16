import { useState } from 'react'
import { Search, Calendar, MapPin } from 'lucide-react'
import { events, getEventStatus, statusConfig } from '../data/events'

function EventCard({ event }) {
  const status = getEventStatus(event.date)
  const sc = statusConfig[status]

  return (
    <a
      href={`/events/${event.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden card-hover flex flex-col cursor-pointer"
    >
      <div className={`h-1 ${status === 'Upcoming' ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 'bg-gradient-to-r from-slate-300 to-slate-400'}`} />
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-start justify-between gap-3">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${sc.badge}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
            {status}
          </span>
          {event.featured && (
            <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>

        <h3 className="font-bold text-slate-900 text-lg leading-snug line-clamp-2">{event.title}</h3>
        <p className="text-slate-500 text-sm line-clamp-2">{event.description}</p>

        <div className="space-y-2 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-slate-400 shrink-0" />
            <span>{event.date} &middot; {event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-slate-400 shrink-0" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Speaker */}
        <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
          <img
            src={event.speaker.image}
            alt={event.speaker.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="text-xs font-semibold text-slate-900">{event.speaker.name}</p>
            <p className="text-xs text-slate-500">{event.speaker.specialization}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {event.tags.map(tag => (
            <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default function Events() {
  const [activeStatus, setActiveStatus] = useState('Upcoming')
  const [search, setSearch] = useState('')

  const filtered = events.filter(e => {
    const matchStatus = getEventStatus(e.date) === activeStatus
    const matchSearch =
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.description.toLowerCase().includes(search.toLowerCase()) ||
      e.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
    return matchStatus && matchSearch
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header — centered */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Medical Events</h1>
        <p className="text-slate-500">
          Browse {events.length} events, conferences, workshops, and scholarships
        </p>
      </div>

      {/* Search + Filters — centered */}
      <div className="mb-8 space-y-4 max-w-2xl mx-auto">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search events, topics, or speakers..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
          />
        </div>

        <div className="flex gap-2 justify-center">
          {['Upcoming', 'Completed'].map(status => (
            <button
              key={status}
              onClick={() => setActiveStatus(status)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeStatus === status
                  ? status === 'Upcoming'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-600 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Results count — centered */}
      <p className="text-sm text-slate-500 mb-6 text-center">
        Showing <span className="font-semibold text-slate-700">{filtered.length}</span>{' '}
        <span className="font-semibold text-blue-600">{activeStatus}</span> events
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-slate-400">
          <Search size={40} className="mx-auto mb-4 opacity-50" />
          <p className="text-lg font-medium">No events found</p>
          <p className="text-sm mt-1">Try adjusting your search or filter</p>
        </div>
      )}
    </div>
  )
}
