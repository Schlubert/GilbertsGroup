import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Award, Users, Target } from 'lucide-react';

const HomePage: React.FC = () => {
  const companies = [
    {
      name: 'Appetite Journeys',
      logo: `images/logos/appetite-journeys-logo.png`,
      useLogo: true,
      tagline: 'Culinary Adventures Through Switzerland',
      description: 'Intimate food and wine tours exploring Switzerland\'s finest culinary traditions, led by a Swiss-born host and culinary expert - Esther and Kevin Gilbert.',
      keyFeatures: ['Small groups (max 12)', 'Expert Swiss guides', 'Authentic experiences'],
      link: 'https://appetitejourneys.nz/',
      image: `images/companies/appetite-journeys-hero.jpg`,
      isExternal: true,
      status: 'Book Now',
      color: 'from-emerald-600 to-emerald-800',
      hoverColor: 'hover:from-emerald-700 hover:to-emerald-900'
    },
    {
      name: 'Elevate',
      logo: `images/logos/elevate-logo.png`,
      useLogo: true,
      tagline: 'Business Advisory & Governance Excellence',
      description: 'Strategic guidance for businesses and boards in New Zealand and beyond, leveraging decades of operational experience and governance expertise.',
      keyFeatures: ['Board advisory', 'Strategic planning', 'Operational excellence'],
      link: 'https://www.elevates.nz/',
      image: `images/companies/elevate-hero.jpg`,
      isExternal: true,
      status: 'Learn More',
      color: 'from-slate-700 to-slate-900',
      hoverColor: 'hover:from-slate-800 hover:to-black'
    },
    {
      name: "Gilbert's Fine Food",
      logo: `images/logos/GFF-logo.jpg`,
      useLogo: true,
      tagline: 'Ingredient supply and food writing',
      description: "Gilbert's Fine Food continues to provide high-quality ingredients to the home cook and food professionals alike. With the first recipe book in production, Gilbert's Fine Food is ensuring that the legacy of culinary knowledge gets passed on to all that want to learn.",
      keyFeatures: ['Ingredient sourcing', 'Food writing', 'Publishing'],
      link: 'https://www.gilberts.nz/gilberts-fine-food/',
      image: `images/companies/fb-apprentice-hero.jpg`,
      isExternal: true,
      status: 'Find out More',
      color: 'from-blue-700 to-blue-900',
      hoverColor: 'hover:from-blue-800 hover:to-blue-950'
    }
  ];

  const trustIndicators = [
    {
      icon: <Award className="w-8 h-8 text-emerald-600" />,
      title: 'Industry Leadership',
      description: 'International recognition across culinary tourism, business advisory, and hospitality training in New Zealand'
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      title: 'Client-Centered Approach',
      description: 'Building lasting relationships with businesses, tourists, and hospitality professionals throughout the world'
    },
    {
      icon: <Target className="w-8 h-8 text-emerald-600" />,
      title: 'Proven Track Record',
      description: 'Decades of success in food service, governance, and professional development'
    }
  ];

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "The Gilbert's Group",
          "url": "https://www.gilbertsgroup.nz",
          "logo": "https://www.gilbertsgroup.nz/images/gilberts-group-logo.svg",
          "description": "The Gilbert's Group is a family of companies in New Zealand specializing in culinary tourism, business advisory, and professional development. Led by Kevin and Esther Gilbert in Dunedin.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dunedin",
            "addressRegion": "Otago",
            "addressCountry": "NZ"
          },
          "founder": [
            {
              "@type": "Person",
              "name": "Kevin Gilbert",
              "jobTitle": "Founder & Director"
            },
            {
              "@type": "Person",
              "name": "Esther Gilbert",
              "jobTitle": "Co-Founder & Director"
            }
          ],
          "owns": [
            {
              "@type": "Organization",
              "name": "Appetite Journeys",
              "url": "https://appetitejourneys.nz"
            },
            {
              "@type": "Organization",
              "name": "Elevate Business Advisory"
            },
            {
              "@type": "Organization",
              "name": "Gilbert's Fine Food"
            }
          ]
        })}
      </script>

      <div className="space-y-0">
        <section className="relative h-[45vh] -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
          <div className="relative h-full flex items-center justify-center px-4">
            <div className="text-center text-white max-w-5xl">
              <div className="flex flex-col items-center">
                <img
                  src="images/GG-logo.png"
                  alt="Gilbert's Group Logo"
                  className="max-w-[320px] w-full my-8"
                />
              </div>           
              <p className="text-xl md:text-2xl mb-10 text-slate-200 max-w-4xl mx-auto leading-relaxed">
                A Dunedin-based family of companies bringing decades of expertise in culinary tourism, 
                business advisory, and hospitality professional development.
              </p>
            </div>
          </div>
        </section>

        <section id="companies" className="py-8 px-2 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-slate-900 mb-4">
                Our New Zealand Companies
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Three distinct ventures based in Dunedin, each a leader in its field, united by our commitment to excellence and service
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {companies.map((company, index) => (
                <article
                  key={index}
                  className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200"
                  itemScope
                  itemType="https://schema.org/Organization"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={company.image}
                      alt={`${company.name} - ${company.tagline}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      itemProp="image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-slate-900">
                        {company.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    {company.useLogo ? (
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="h-24 w-auto mx-auto mb-4"
                      />
                    ) : (
                      <h3 className="text-3xl font-bold mb-2 text-slate-900">{company.name}</h3>
                    )}
                    <p className="text-sm text-emerald-600 font-medium mb-4">
                      {company.tagline}
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-6" itemProp="description">
                      {company.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {company.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={company.link}
                      target={company.isExternal ? '_blank' : undefined}
                      rel={company.isExternal ? 'noopener noreferrer' : undefined}
                      className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${company.color} ${company.hoverColor} text-white px-6 py-4 rounded-lg font-semibold transition-all transform group-hover:scale-105 shadow-lg`}
                      itemProp="url"
                      aria-label={`Visit ${company.name} website`}
                    >
                      {company.status === 'Book Now' ? 'Visit & Book' : company.status === 'Find out More' ? 'Go to Webpage' : 'Visit Website'}
                      <ExternalLink className="ml-2 w-5 h-5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

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

        <section className="py-4 bg-slate-50" aria-label="Why choose Gilbert's Group">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="p-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {indicator.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{indicator.title}</h3>
                  <p className="text-slate-600">{indicator.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Meet Kevin & Esther Gilbert
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Based in Dunedin, New Zealand, Kevin and Esther Gilbert bring complementary expertise spanning continents and industries. Their combined experience in food, hospitality, business leadership, and governance creates a unique foundation for excellence across all three companies.
                </p>
                <ul className="space-y-3 mb-8" role="list">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">50+ years combined experience in food and hospitality management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">Proven governance and board advisory experience in New Zealand</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">International industry recognition and certifications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">Technical expertise combined with decades of lived experience</span>
                  </li>
                </ul>
                <Link
                  to="/about"
                  className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  Learn More About the Founders
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <figure className="bg-slate-100 rounded-xl p-6 text-center">
                  <img 
                    src="images/team/kevin.jpg" 
                    alt="Kevin Gilbert - Founder and Director of The Gilbert's Group"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    loading="lazy"
                  />
                  <figcaption>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Kevin Gilbert</h3>
                    <p className="text-sm text-slate-600">Founder & Director</p>
                  </figcaption>
                </figure>
                <figure className="bg-slate-100 rounded-xl p-6 text-center">
                  <img 
                    src="images/team/esther.jpg" 
                    alt="Esther Gilbert - Co-Founder and Director of The Gilbert's Group"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    loading="lazy"
                  />
                  <figcaption>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Esther Gilbert</h3>
                    <p className="text-sm text-slate-600">Co-Founder & Director</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-slate-900 to-emerald-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Our Business Philosophy</h2>
            <blockquote className="text-xl leading-relaxed mb-8 opacity-95">
              <p>"Excellence isn't an act, it's a habit. We believe in doing things right, building lasting relationships, 
              and creating value that extends beyond any single transaction."</p>
            </blockquote>
            <Link
              to="/philosophy"
              className="inline-flex items-center bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Our Values
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        <section className="py-10 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Connect?</h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Whether you're interested in Swiss culinary adventures, business governance guidance, or professional development in hospitality, we're here to help you achieve your goals.
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
    </>
  );
};

export default HomePage;