import { useParams, Link } from 'react-router-dom'
import { Calendar, MapPin, Clock, ArrowLeft, Tag } from 'lucide-react'
import { events, getEventStatus, statusConfig, typeConfig } from '../data/events'

export default function EventDetail() {
  const { id } = useParams()
  const event = events.find(e => e.id === Number(id))

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-slate-400 px-4">
        <p className="text-2xl font-bold mb-2">Event not found</p>
        <p className="text-sm mb-6">This event may have been removed or the link is invalid.</p>
        <Link to="/events" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
          <ArrowLeft size={16} /> Back to Events
        </Link>
      </div>
    )
  }

  const status = getEventStatus(event.date)
  const sc = statusConfig[status]
  const tc = typeConfig[event.type] || {}

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back link */}
      <Link
        to="/events"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-600 mb-8 transition-colors"
      >
        <ArrowLeft size={16} /> Back to Events
      </Link>

      {/* Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Accent bar */}
        <div className={`h-2 bg-gradient-to-r ${tc.gradient || 'from-blue-500 to-cyan-400'}`} />

        <div className="p-8 space-y-6">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${sc.badge}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
              {status}
            </span>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${tc.badge || 'bg-slate-100 text-slate-600'}`}>
              {event.type}
            </span>
            {event.featured && (
              <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
            {event.title}
          </h1>

          {/* Description */}
          <p className="text-slate-600 text-base leading-relaxed">{event.description}</p>

          {/* Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-t border-b border-slate-100">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <Calendar size={16} className="text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Date</p>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">{event.date}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <Clock size={16} className="text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Time</p>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">{event.time}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:col-span-2">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <MapPin size={16} className="text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Location</p>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">{event.location}</p>
              </div>
            </div>
          </div>

          {/* Speaker */}
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-3">Speaker</p>
            <div className="flex items-center gap-4">
              <img
                src={event.speaker.image}
                alt={event.speaker.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-slate-100"
              />
              <div>
                <p className="font-bold text-slate-900">{event.speaker.name}</p>
                <p className="text-sm text-slate-500">{event.speaker.specialization}</p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-3 flex items-center gap-1.5">
              <Tag size={12} /> Topics
            </p>
            <div className="flex flex-wrap gap-2">
              {event.tags.map(tag => (
                <span key={tag} className="text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
