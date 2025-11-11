// pages/AboutPage.tsx
import React from 'react';
import { Award, Users, Briefcase, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const milestones = [
    {
      year: '2004',
      title: 'Gilbert\'s Fine Food Founded',
      description: 'Kevin and Esther establish their bakery in Dunedin, beginning a 20-year journey in food excellence'
    },
    {
      year: '2016-2021',
      title: 'Industry Leadership',
      description: 'Kevin serves as President of Baking New Zealand, championing vocational training and industry standards'
    },
    {
      year: '2022',
      title: 'Public Service',
      description: 'Kevin elected as Dunedin City Councillor, bringing business expertise to community governance'
    },
    {
      year: '2024',
      title: 'International Recognition',
      description: 'Kevin becomes first New Zealander invited as jury member for Coupe du Monde de la Boulangerie'
    },
    {
      year: '2025',
      title: 'The Gilbert\'s Group',
      description: 'Launch of parent company uniting Appetite Journeys, Elevate, and The F&B Apprentice'
    }
  ];

  const expertise = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Business Leadership',
      items: ['20+ years business ownership', '9 years board governance experience', 'Institute of Directors member', 'Strategic planning & financial management']
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Industry Excellence',
      description: 'Pushing boundaries in food, hospitality, and professional development',
      items: ['Bachelor of Culinary Arts', 'Qualified baker & chef', 'International competition judge', 'Industry advocate & assessor']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Perspective',
      items: ['Swiss-born with NZ citizenship', 'International hospitality experience', 'Fluent in multiple languages', 'Cross-cultural expertise']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'People Development',
      items: ['Trained multiple apprentices', 'World Skills NZ expert', 'Guest lecturer & demonstrator', 'Mentorship & coaching']
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-br from-slate-900 to-emerald-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl text-slate-200">
              Built on decades of experience, driven by a passion for excellence
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-slate-700 leading-relaxed mb-6">
            The Gilbert's Group represents the culmination of over three decades of dedication to food, hospitality, and business excellence. What began as a single bakery in Dunedin has evolved into a family of companies, each focused on creating meaningful connections and lasting value.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Kevin and Esther Gilbert bring complementary expertise that spans continents and industries. Kevin's journey from baker and chef to business owner, board president, and city councillor has provided deep insights into operations, governance, and community leadership. Esther's Swiss heritage and hospitality expertise create authentic cultural bridges and unforgettable experiences.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Together, they've built a reputation for quality, integrity, and innovation—values that now unite Appetite Journeys, Elevate, and The F&B Apprentice under The Gilbert's Group umbrella.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="bg-slate-100 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Meet the Founders</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Kevin */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-40 h-40 bg-slate-300 rounded-full mx-auto mb-6"></div>
              <h3 className="text-3xl font-bold text-center text-slate-900 mb-2">Kevin Gilbert</h3>
              <p className="text-center text-emerald-600 font-semibold mb-6">Founder & Director</p>
              
              <div className="space-y-4 text-slate-700">
                <p className="leading-relaxed">
                  Kevin has spent his life immersed in the food and hospitality industry, progressing from apprentice baker to business owner, industry leader, and governance expert.
                </p>
                <p className="leading-relaxed">
                  His tenure as President of Baking New Zealand and current role as Dunedin City Councillor demonstrate his commitment to industry advancement and community service. As the first New Zealander invited to judge at the prestigious Coupe du Monde de la Boulangerie, Kevin brings world-class expertise to every venture.
                </p>
              </div>
            </div>

            {/* Esther */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-40 h-40 bg-slate-300 rounded-full mx-auto mb-6"></div>
              <h3 className="text-3xl font-bold text-center text-slate-900 mb-2">Esther Gilbert</h3>
              <p className="text-center text-emerald-600 font-semibold mb-6">Co-Founder & Director</p>
              
              <div className="space-y-4 text-slate-700">
                <p className="leading-relaxed">
                  Born and raised in Switzerland, Esther brings an authentic local perspective that transforms tourist experiences into genuine cultural connections. Her deep understanding of Swiss traditions, combined with fluency in German, French, Italian, and English, creates seamless bridges between cultures.
                </p>
                <p className="leading-relaxed">
                  With decades of hospitality experience, Esther ensures every interaction reflects warmth, professionalism, and attention to detail—values that permeate all Gilbert's Group companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section>
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Our Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertise.map((area, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mr-4">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{area.title}</h3>
              </div>
              <ul className="space-y-3">
                {area.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-emerald-600 mr-3 mt-1">•</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-slate-100 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Our Journey</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-600 md:left-1/2"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-8 w-4 h-4 bg-emerald-600 rounded-full md:left-1/2 md:-ml-2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="text-emerald-600 font-bold text-2xl mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h3>
                      <p className="text-slate-700">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;