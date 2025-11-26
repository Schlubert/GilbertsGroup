// pages/OurPhilosophyPage.tsx
import React from 'react';
import { Heart, Compass, Users, Lightbulb, Shield, Handshake } from 'lucide-react';

const OurPhilosophyPage: React.FC = () => {
  const principles = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Passion Drives Excellence',
      description: 'We believe that genuine passion for what we do translates into exceptional results. Whether guiding culinary adventures, advising businesses, or sharing decades of earned knowledge and experience, our enthusiasm is the foundation of everything we create.',
      color: 'bg-rose-100 text-rose-600'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'People First, Always',
      description: 'Our success is measured by the positive impact we have on people—our clients, partners, and communities. We prioritize meaningful relationships built on trust, respect, and mutual growth.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Integrity Above All',
      description: 'Honesty and transparency guide every decision we make. We hold ourselves to the highest ethical standards, knowing that our reputation is built one interaction at a time.',
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: 'Innovation Meets Tradition',
      description: 'We respect the wisdom of time-honored practices while embracing new ideas and approaches. This balance allows us to honour heritage while staying relevant and forward-thinking.',
      color: 'bg-amber-100 text-amber-600'
    },
    {
      icon: <Compass className="w-10 h-10" />,
      title: 'Authentic Experiences Matter',
      description: 'We believe in creating genuine connections and real experiences, not superficial transactions. Whether it\'s a tour, consultation, or education session, authenticity is at the heart of what we offer.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: <Handshake className="w-10 h-10" />,
      title: 'Long-Term Partnerships',
      description: 'We\'re not interested in quick wins. Our focus is on building lasting relationships that create ongoing value for everyone involved. Your success is our success.',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  const approach = [
    {
      title: 'Quality Over Quantity',
      description: 'We deliberately keep our operations small and focused. From limiting tour groups to 12 guests to providing personalized business advisory, we choose depth over breadth every time.'
    },
    {
      title: 'Continuous Learning',
      description: 'The world evolves, and so do we. We actively seek new knowledge, stay current with industry trends, and adapt our approaches while staying true to our core values.'
    },
    {
      title: 'Give Back',
      description: 'We\'re committed to elevating our industries and communities. Through advocacy, training, and mentorship, we invest in the next generation and support positive change.'
    },
    {
      title: 'Transparency',
      description: 'We communicate openly about what we can deliver, our processes, and our pricing. No hidden agendas, no surprises—just honest, straightforward partnership.'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative h-[30vh] -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Philosophy</h1>
            <p className="text-xl md:text-2xl text-slate-200">
              The principles and values that guide everything we do
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xl text-slate-700 leading-relaxed">
            At The Gilbert's Group, our philosophy isn't just words on a page—it's the DNA of how we operate. These beliefs shape our decisions, guide our actions, and define our relationships with clients, partners, and communities.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section>
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Our Core Principles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className={`w-20 h-20 ${principle.color} rounded-full flex items-center justify-center mb-6`}>
                {principle.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{principle.title}</h3>
              <p className="text-slate-700 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-slate-100 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">How We Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approach.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold text-emerald-600 mb-4">{item.title}</h3>
                <p className="text-slate-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy in Action */}
      <section>
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Philosophy in Action</h2>
        
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="bg-gradient-to-r from-alpine-green to-emerald-700 text-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Appetite Journeys</h3>
            <p className="text-lg leading-relaxed opacity-95">
              Our culinary tours exemplify our philosophy through small group sizes (max 12), authentic local connections, and a focus on meaningful cultural exchange rather than superficial tourism. Every element is designed to create lasting memories and genuine understanding.
            </p>
          </div>

          <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Elevate</h3>
            <p className="text-lg leading-relaxed opacity-95">
              Our business advisory services reflect our commitment to long-term partnerships. We don't just provide recommendations—we walk alongside clients, offering hands-on guidance grounded in real operational experience and proven governance principles.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">The F&B Apprentice</h3>
            <p className="text-lg leading-relaxed opacity-95">
              Our industry focused initiative embodies our passion for professional development and giving back. Whether through recipes and techniques or career mentorship, we invest in the next generation of hospitality professionals with integrity and dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Commitment to You</h2>
          <p className="text-xl leading-relaxed mb-8 opacity-95">
            When you work with The Gilbert's Group, you're not just hiring a service provider—you're partnering with people who genuinely care about your success. We bring passion, expertise, and integrity to every interaction, because that's not just our philosophy—it's who we are.
          </p>
          <p className="text-2xl font-semibold">
            "Excellence isn't an act, it's a habit." — Aristotle
          </p>
        </div>
      </section>
    </div>
  );
};

export default OurPhilosophyPage;