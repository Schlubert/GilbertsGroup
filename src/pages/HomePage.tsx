// pages/HomePage.tsx - Enhanced Version
import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, TrendingUp, GraduationCap, ArrowRight, ExternalLink, Award, Users, Target, ChevronRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const companies = [
    {
      name: 'Appetite Journeys',
      icon: <Compass className="w-12 h-12" />,
      tagline: 'Culinary Adventures Through Switzerland',
      description: 'Intimate food and wine tours exploring Switzerland\'s finest culinary traditions, led by Swiss-born hosts.',
      keyFeatures: ['Small groups (max 12)', 'Expert Swiss guides', 'Authentic experiences'],
      link: 'https://appetitejourneys.nz',
      isExternal: true,
      status: 'Live',
      color: 'from-emerald-600 to-emerald-800',
      hoverColor: 'hover:from-emerald-700 hover:to-emerald-900'
    },
    {
      name: 'Elevate',
      icon: <TrendingUp className="w-12 h-12" />,
      tagline: 'Business Advisory & Governance',
      description: 'Strategic guidance for businesses and boards, leveraging decades of operational experience and governance expertise.',
      keyFeatures: ['Board advisory', 'Strategic planning', 'Operational excellence'],
      link: '/contact',
      isExternal: false,
      status: 'Enquire Now',
      color: 'from-slate-700 to-slate-900',
      hoverColor: 'hover:from-slate-800 hover:to-black'
    },
    {
      name: 'The F&B Apprentice',
      icon: <GraduationCap className="w-12 h-12" />,
      tagline: 'Professional Development & Training',
      description: 'Comprehensive training programs for food and beverage professionals, building the next generation of hospitality leaders.',
      keyFeatures: ['Hands-on training', 'Industry mentorship', 'Career pathways'],
      link: '/contact',
      isExternal: false,
      status: 'Enquire Now',
      color: 'from-blue-700 to-blue-900',
      hoverColor: 'hover:from-blue-800 hover:to-blue-950'
    }
  ];

  const stats = [
    { number: '30+', label: 'Years Experience' },
    { number: '3', label: 'Business Ventures' },
    { number: '100%', label: 'Committed to Excellence' }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section - Refined */}
      <section className="relative h-[75vh] -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djhoOHYtOGgtOHptLTQtNHY4aC04di04aDh6bTAtMTJ2OGgtOFYwaDh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center text-white max-w-5xl">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img 
                src="/logo-gilberts.png" 
                alt="The Gilbert's Group Logo" 
                className="h-24 md:h-32 w-auto drop-shadow-2xl"
              />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The Gilbert's Group
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-emerald-400 font-semibold">
              Excellence Across Industries
            </p>
            <p className="text-xl md:text-2xl mb-10 text-slate-200 max-w-4xl mx-auto leading-relaxed">
              A family of companies bringing decades of expertise in culinary tourism, 
              business advisory, and professional development.
            </p>

            {/* Stats Bar */}
            <div className="flex justify-center gap-12 mb-10 flex-wrap">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-1">{stat.number}</div>
                  <div className="text-sm text-slate-300 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="#companies"
                className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-2xl"
              >
                Explore Our Companies
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <Link
                to="/about"
                className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-white/50 rotate-90" />
        </div>
      </section>

      {/* Companies Section - Card Focus */}
      <section id="companies" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-4">Our Companies</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Three distinct ventures, each a leader in its field, united by our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200"
              >
                {/* Card Header with Status Badge */}
                <div className={`bg-gradient-to-br ${company.color} p-8 text-white relative`}>
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${company.isExternal ? 'bg-white/20 backdrop-blur-sm' : 'bg-white/10'}`}>
                      {company.status}
                    </span>
                  </div>
                  
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {company.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{company.name}</h3>
                  <p className="text-sm opacity-90 font-medium">{company.tagline}</p>
                </div>

                {/* Card Body */}
                <div className="p-8">
                  <p className="text-slate-700 leading-relaxed mb-6">{company.description}</p>
                  
                  {/* Key Features */}
                  <div className="space-y-2 mb-6">
                    {company.keyFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={company.link}
                    target={company.isExternal ? '_blank' : undefined}
                    rel={company.isExternal ? 'noopener noreferrer' : undefined}
                    className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${company.color} ${company.hoverColor} text-white px-6 py-4 rounded-lg font-semibold transition-all transform group-hover:scale-105 shadow-lg`}
                  >
                    {company.isExternal ? 'Visit Website' : 'Get In Touch'}
                    {company.isExternal ? (
                      <ExternalLink className="ml-2 w-5 h-5" />
                    ) : (
                      <ArrowRight className="ml-2 w-5 h-5" />
                    )}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Learn More Link */}
          <div className="text-center mt-12">
            <Link
              to="/companies"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold text-lg group"
            >
              Explore Full Company Details
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Proven Excellence</h3>
              <p className="text-slate-600">International recognition and industry leadership across all ventures</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">People-Focused</h3>
              <p className="text-slate-600">Building lasting relationships and creating meaningful impact</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Results-Driven</h3>
              <p className="text-slate-600">Decades of success creating value for clients and communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Meet the Founders</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Kevin and Esther Gilbert bring complementary expertise spanning continents and industries. Their combined experience in food, hospitality, business leadership, and governance creates a unique foundation for excellence.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2"></div>
                  <span className="text-slate-700">30+ years in food and hospitality</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2"></div>
                  <span className="text-slate-700">Proven governance and board experience</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2"></div>
                  <span className="text-slate-700">International industry recognition</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2"></div>
                  <span className="text-slate-700">Swiss heritage and local expertise</span>
                </li>
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-100 rounded-xl p-6 text-center">
                <div className="w-32 h-32 bg-slate-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Kevin Gilbert</h3>
                <p className="text-sm text-slate-600">Founder & Director</p>
              </div>
              <div className="bg-slate-100 rounded-xl p-6 text-center">
                <div className="w-32 h-32 bg-slate-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Esther Gilbert</h3>
                <p className="text-sm text-slate-600">Co-Founder & Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Teaser */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Philosophy</h2>
          <p className="text-xl leading-relaxed mb-8 opacity-95">
            "Excellence isn't an act, it's a habit. We believe in doing things right, building lasting relationships, 
            and creating value that extends beyond any single transaction."
          </p>
          <Link
            to="/philosophy"
            className="inline-flex items-center bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Explore Our Values
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Connect?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Whether you're interested in culinary adventures, business guidance, or professional development, 
            we're here to help you achieve your goals.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/companies"
              className="inline-flex items-center bg-slate-100 hover:bg-slate-200 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              View All Companies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;