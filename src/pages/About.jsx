import { Users, Award, Globe, Heart } from 'lucide-react'

const values = [
  {
    icon: Users,
    title: 'Community First',
    desc: 'We believe in the power of a connected medical community. Every feature we build centers around fostering meaningful connections between healthcare professionals.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Award,
    title: 'Excellence in Education',
    desc: "We partner with India's leading medical institutions to deliver only the highest quality CME events, workshops, and scholarships.",
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    icon: Globe,
    title: 'Accessible Healthcare',
    desc: 'From virtual webinars to in-person conferences, we ensure doctors everywhere in India can access professional development opportunities.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Heart,
    title: 'Physician Wellbeing',
    desc: 'Burnout is real. We actively create spaces for doctors to discuss mental health, share experiences, and support one another beyond clinical work.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
]

const team = [
  {
    name: 'Dr. Ananya Kapoor',
    role: 'Co-Founder & CEO',
    spec: 'Ex-AIIMS, Health Tech Entrepreneur',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Dr. Sameer Joshi',
    role: 'Co-Founder & CTO',
    spec: 'MBBS + IIT Bombay CS',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
  {
    name: 'Dr. Preet Bansal',
    role: 'Head of Events',
    spec: 'Surgeon turned Community Builder',
    image: 'https://randomuser.me/api/portraits/women/20.jpg',
  },
  {
    name: 'Ravi Menon',
    role: 'Head of Design',
    spec: '10+ years in Healthcare UX',
    image: 'https://randomuser.me/api/portraits/men/30.jpg',
  },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Built by doctors,<br />
            <span className="text-cyan-300">powered by community</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Padma Doctors Association was founded in 2022 by a group of Indian doctors who were frustrated by how fragmented and inaccessible medical professional development was. We built the platform we wished existed.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '12,000+', label: 'Doctors Registered' },
            { value: '200+', label: 'Events Hosted' },
            { value: '50+', label: 'Partner Hospitals' },
            { value: '₹2Cr+', label: 'Scholarships Given' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-3xl font-extrabold text-blue-600">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Our Values</h2>
            <p className="text-slate-500 mt-2">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm card-hover">
                <div className={`w-12 h-12 rounded-xl ${v.bg} flex items-center justify-center mb-4`}>
                  <v.icon size={24} className={v.color} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Meet the Team</h2>
            <p className="text-slate-500 mt-2">Doctors and technologists passionate about the future of medicine</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(member => (
              <div key={member.name} className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm card-hover">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="font-bold text-slate-900">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium mt-0.5">{member.role}</p>
                <p className="text-slate-500 text-xs mt-1">{member.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Join 12,000+ doctors on Padma Doctors Association
          </h2>
          <p className="text-slate-500 mb-8">
            Be part of India's fastest-growing medical professional network.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-lg">
            Get Started — It's Free
          </button>
        </div>
      </section>
    </div>
  )
}
