// pages/OurCompaniesPage.tsx
import React from 'react';
import { Compass, TrendingUp, GraduationCap, ExternalLink, CheckCircle } from 'lucide-react';

const OurCompaniesPage: React.FC = () => {
  const companies = [
    {
      name: 'Appetite Journeys',
      icon: <Compass className="w-12 h-12" />,
      tagline: 'Culinary Adventures Through Switzerland',
      description: 'Appetite Journeys offers intimate, small-group food and wine tours through Switzerland, led by Swiss-born hosts with deep local knowledge and culinary expertise.',
      color: 'from-alpine-green to-emerald-700',
      features: [
        'Maximum 12 guests per tour for personalized experiences',
        'Expert guides born and raised in Switzerland',
        'Access to artisan producers and hidden gems',
        'Hands-on culinary experiences and tastings',
        'UNESCO World Heritage sites and scenic train journeys',
        'Carefully curated accommodations and dining'
      ],
      services: [
        'Multi-day culinary tours',
        'Chocolate and cheese factory visits',
        'Vineyard tours and wine tastings',
        'Traditional Swiss cuisine experiences',
        'Alpine adventures and cultural immersion'
      ],
      link: 'https://appetitejourneys.nz',
      externalLink: true
    },
    {
      name: 'Elevate',
      icon: <TrendingUp className="w-12 h-12" />,
      tagline: 'Business Advisory & Governance Excellence',
      description: 'Elevate provides strategic business advisory and governance expertise, drawing on decades of operational experience and proven leadership across industries.',
      color: 'from-slate-700 to-slate-900',
      features: [
        '20+ years operational business experience',
        '9 years board-level governance expertise',
        'Institute of Directors member',
        'Public and private sector experience',
        'Financial acumen and strategic planning',
        'Hands-on, practical approach'
      ],
      services: [
        'Board advisory and development',
        'Strategic business planning',
        'Governance training and support',
        'Operational efficiency consulting',
        'Financial management guidance',
        'Succession planning'
      ],
      link: '#',
      externalLink: false
    },
    {
      name: 'The F&B Apprentice',
      icon: <GraduationCap className="w-12 h-12" />,
      tagline: 'Professional Development in Food & Beverage',
      description: 'The F&B Apprentice delivers comprehensive training and mentorship programs for aspiring and current food and beverage professionals, building the next generation of industry leaders.',
      color: 'from-blue-700 to-blue-900',
      features: [
        'Hands-on training from industry experts',
        'Real-world operational experience',
        'Mentorship from qualified professionals',
        'Industry-recognized qualifications',
        'Career pathway guidance',
        'Ongoing professional support'
      ],
      services: [
        'Apprenticeship programs',
        'Professional development workshops',
        'Industry assessment and moderation',
        'Career mentorship',
        'Skills training and certification',
        'Industry placement support'
      ],
      link: '#',
      externalLink: false
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-br from-slate-900 via-emerald-800 to-slate-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Companies</h1>
            <p className="text-xl md:text-2xl text-slate-200">
              Three distinct ventures united by a commitment to excellence
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto text-center">
        <p className="text-xl text-slate-700 leading-relaxed">
          Each company under The Gilbert's Group umbrella operates independently while sharing our core values of excellence, integrity, and authentic connection. Together, they represent diverse expertise across culinary tourism, business leadership, and professional development.
        </p>
      </section>

      {/* Company Details */}
      <section className="space-y-16">
        {companies.map((company, index) => (
          <div key={index} className={`${index % 2 === 1 ? 'bg-slate-50' : ''} -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12`}>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Company Header Card */}
                <div className={`bg-gradient-to-br ${company.color} text-white rounded-2xl p-8 shadow-2xl`}>
                  <div className="mb-6">{company.icon}</div>
                  <h2 className="text-4xl font-bold mb-3">{company.name}</h2>
                  <p className="text-lg opacity-90 mb-6">{company.tagline}</p>
                  <p className="text-base leading-relaxed opacity-95 mb-8">{company.description}</p>
                  
                  <a
                    href={company.link}
                    className="inline-flex items-center bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                    target={company.externalLink ? '_blank' : undefined}
                    rel={company.externalLink ? 'noopener noreferrer' : undefined}
                  >
                    {company.externalLink ? 'Visit Website' : 'Coming Soon'}
                    {company.externalLink && <ExternalLink className="ml-2 w-4 h-4" />}
                  </a>
                </div>

                {/* Features & Services */}
                <div className="space-y-8">
                  {/* Key Features */}
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">What Sets Us Apart</h3>
                    <ul className="space-y-3">
                      {company.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Services */}
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Services Offered</h3>
                    <ul className="space-y-2">
                      {company.services.map((service, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-emerald-600 mr-3">•</span>
                          <span className="text-slate-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Synergy Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Stronger Together</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="opacity-95">
              While each company operates independently, they benefit from shared resources, complementary expertise, and a unified commitment to excellence. A client working with Elevate might discover Appetite Journeys as the perfect team-building experience. An F&B Apprentice graduate could find career opportunities through our extensive industry network.
            </p>
            <p className="opacity-95">
              This synergy creates value that extends beyond any single venture, providing clients with access to a comprehensive ecosystem of expertise and opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
          Whether you're seeking culinary adventures, business guidance, or professional development, we're here to help you achieve your goals.
        </p>
        <a
          href="/contact"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  );
};

export default OurCompaniesPage;