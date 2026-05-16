import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Star, Award, Calendar, MapPin, Clock, Globe, Stethoscope, BookOpen } from 'lucide-react'
import { doctors } from '../data/doctors'

export default function DoctorDetail() {
  const { id } = useParams()
  const doctor = doctors.find(d => d.id === Number(id))

  if (!doctor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-slate-400 px-4">
        <p className="text-2xl font-bold mb-2">Doctor not found</p>
        <p className="text-sm mb-6">This profile may have been removed or the link is invalid.</p>
        <Link to="/" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-blue-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-28 h-28 rounded-full object-cover border-4 border-white/30 shadow-xl shrink-0"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl md:text-4xl font-extrabold">{doctor.name}</h1>
              <p className="text-cyan-200 text-lg font-medium mt-1">{doctor.specialization}</p>
              <p className="text-blue-100 text-sm mt-1 flex items-center gap-1.5 justify-center sm:justify-start">
                <MapPin size={14} /> {doctor.hospital}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-4 justify-center sm:justify-start">
                <span className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold">
                  <Star size={13} className="fill-amber-300 text-amber-300" /> {doctor.rating} Rating
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold">
                  {doctor.experience} Experience
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold">
                  {doctor.consultationFee} Consultation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">

        {/* About */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8">
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-4">
            <Stethoscope size={18} className="text-blue-600" /> About
          </h2>
          <p className="text-slate-600 leading-relaxed">{doctor.bio}</p>
        </div>

        {/* Qualifications + Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-4">
              <BookOpen size={18} className="text-violet-600" /> Qualifications
            </h2>
            <ul className="space-y-2">
              {doctor.qualifications.map((q, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 shrink-0" />
                  {q}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-5">
            <div>
              <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-3">
                <Globe size={18} className="text-emerald-600" /> Languages
              </h2>
              <div className="flex flex-wrap gap-2">
                {doctor.languages.map(lang => (
                  <span key={lang} className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-700 mb-2">Available Days</h3>
              <div className="flex flex-wrap gap-2">
                {doctor.availableDays.map(day => (
                  <span key={day} className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                    {day}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8">
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-4">
            <Award size={18} className="text-amber-500" /> Achievements & Recognition
          </h2>
          <ul className="space-y-3">
            {doctor.achievements.map((a, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Star size={12} className="fill-amber-400 text-amber-400" />
                </div>
                <p className="text-sm text-slate-700">{a}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Upcoming Meets */}
        {doctor.meetings.length > 0 && (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8">
            <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-5">
              <Calendar size={18} className="text-blue-600" /> Upcoming Meets & Events
            </h2>
            <div className="space-y-4">
              {doctor.meetings.map((meet, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                    <Calendar size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{meet.title}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><Calendar size={11} /> {meet.date}</span>
                      <span className="flex items-center gap-1"><Clock size={11} /> {meet.time}</span>
                      <span className="flex items-center gap-1"><MapPin size={11} /> {meet.location}</span>
                    </div>
                    <span className="inline-block mt-2 bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {meet.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
