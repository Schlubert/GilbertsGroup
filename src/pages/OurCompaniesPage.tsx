// pages/OurCompaniesPage.tsx
import React from 'react';
import { ExternalLink, CheckCircle, ArrowRight } from 'lucide-react';

const OurCompaniesPage: React.FC = () => {
  const companies = [
    {
      name: 'Appetite Journeys',
      logo: 'images/logos/appetite-journeys-logo.png',
      tagline: 'Culinary Adventures Through Switzerland',
      description:
        'Appetite Journeys offers intimate, small-group food and wine tours through Switzerland, led by Swiss-born hosts with deep local knowledge and culinary expertise.',
      image: 'images/companies/appetite-journeys-hero.jpg',
      overlayOpacity: 'bg-black/40',
      features: [
        'Maximum 12 guests per tour for personalized experiences',
        'Expert guides born and raised in Switzerland',
        'Access to artisan producers and hidden gems',
        'Hands-on culinary experiences and tastings',
        'UNESCO World Heritage sites and scenic train journeys',
        'Carefully curated accommodations and dining',
      ],
      link: 'https://appetitejourneys.nz',
      externalLink: true,
    },
    {
      name: 'Elevate',
      logo: 'images/logos/elevate-logo.png',
      tagline: 'Business Advisory & Governance Excellence',
      description:
        'Elevate provides strategic business advisory and governance expertise, drawing on decades of operational experience and proven leadership across industries.',
      image: 'images/companies/elevate-hero.jpg',
      overlayOpacity: 'bg-black/45',
      features: [
        '20+ years operational business experience',
        '25+ years combined board-level governance expertise',
        'Institute of Directors member',
        'Public and private sector experience',
        'Financial acumen and strategic planning',
        'Hands-on, practical approach',
        'Strategic business planning',
        'Governance training and support',
        'Operational efficiency consulting',
        'Financial management guidance',
      ],
      link: 'https://schlubert.github.io/Elevate/',
      externalLink: true,
    },
    {
      name: "Gilbert's Fine Food",
      logo: 'images/logos/GFF-logo.png',
      tagline: 'Ingredient supply and food education',
      description:
        "Gilbert's Fine Food continues to provide high-quality ingredients to the home cook and food professionals alike. With the first recipe book in production, Gilbert's Fine Food is ensuring that the legacy of culinary knowledge gets passed on to all that want to learn.",
      image: 'images/companies/fb-apprentice-hero.jpg',
      overlayOpacity: 'bg-black/40',
      features: [
        'Quality ingredients for home cooks and professionals',
        'Ingredients sourced from local and international suppliers',
        'Recipe book in production',
        'Online recipe database',
        'Available for masterclass/public speaking engagements',
      ],
      link: '/gilberts-fine-food',
      externalLink: false,
    },
  ];

  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="relative h-[30vh] -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-br from-slate-900 via-emerald-800 to-slate-900">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Companies</h1>
            <p className="text-xl md:text-2xl text-slate-200">
              Three distinct ventures united by a commitment to excellence
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto text-center">
        <p className="text-xl text-slate-700 leading-relaxed">
          Each company under The Gilbert's Group umbrella operates independently while sharing our core
          values of excellence, integrity, and authentic connection. Together, they represent diverse
          expertise across culinary tourism, business leadership, and professional development.
        </p>
      </section>

      {/* COMPANY SECTIONS */}
      <section className="space-y-20">
        {companies.map((company, index) => (
          <div
            key={index}
            className={`
              ${index % 2 === 1 ? 'bg-slate-50' : ''}
              relative overflow-hidden
              -mx-4 sm:-mx-6 lg:-mx-8
              px-4 sm:px-6 lg:px-8 py-6
            `}
          >
            <div className="max-w-6xl mx-auto relative z-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* ----- IMAGE & OVERLAY CARD ----- */}
                <div className="relative rounded-2xl shadow-2xl overflow-hidden">

                  {/* Background Image */}
                  <img
                    src={company.image}
                    alt={`${company.name} background`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* DARK OVERLAY */}
                  <div className={`absolute inset-0 ${company.overlayOpacity}`} />

                  {/* TOP MASK (OVER IMAGE ONLY) */}
                  <div
                    className="absolute top-0 left-0 right-0 pointer-events-none z-20"
                    style={{
                      height: '70%', // Adjust percentage here (30%, 40%, 50%, 60%, etc.)
                      background:
                        'linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)',
                    }}
                  />

                  {/* CONTENT */}
                  <div className="relative z-30 text-white p-8">
                    <img src={company.logo} alt={`${company.name} logo`} className="h-24 w-auto mb-6 drop-shadow-2xl" />
                    <p className="text-lg opacity-90 mb-6">{company.tagline}</p>
                    <p className="text-base leading-relaxed opacity-95 mb-8">{company.description}</p>

                    <a
                      href={company.link}
                        className="inline-flex items-center bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                        target={company.externalLink ? '_blank' : undefined}
                        rel={company.externalLink ? 'noopener noreferrer' : undefined}
                      >
                        {company.externalLink ? 'Visit Website' : 'Visit Webpage'}
                        {company.externalLink ? (
                          <ExternalLink className="ml-2 w-4 h-4" />
                        ) : (
                          <ArrowRight className="ml-2 w-4 h-4" />
                        )}
                      </a>
                  </div>
                </div>

                {/* ----- FEATURES LIST ----- */}
                <div className="space-y-8">
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
                </div>

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* SYNERGY */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-6 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Stronger Together</h2>
          <div className="space-y-2 text-lg leading-relaxed">
            <p className="opacity-95">
              While each company operates independently, they benefit from shared resources,
              complementary expertise, and a unified commitment to excellence. A client working with
              Elevate might discover Appetite Journeys as the perfect team-building experience.
            </p>
            <p className="opacity-95">
              This synergy creates value that extends beyond any single venture, providing clients with
              access to a comprehensive ecosystem of expertise and opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pb-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
          Whether you're seeking culinary adventures, business guidance, or professional development,
          we're here to help you achieve your goals.
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
