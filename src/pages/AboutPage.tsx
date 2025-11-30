// pages/AboutPage.tsx
import React from 'react';
import { Award, Users, Briefcase, Globe } from 'lucide-react';
import { getImagePath } from './utils/paths' ;

const AboutPage: React.FC = () => {
  {/*const milestones = [
    {
      year: '2006',
      title: "Gilbert's Fine Food Founded",
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
      description: 'Launch of parent company uniting Appetite Journeys, Elevate, and Gilbert's Fine Food'
    }
  ];
  */}

  const expertise = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Business Leadership',
      items: ['20+ years business ownership', '25+ years combined board governance experience', 'Institute of Directors member', 'Strategic planning & financial management']
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Industry Excellence',
      description: 'Pushing boundaries in food, hospitality, and professional development',
      items: ['Bachelor of Applied Management','Bachelor of Culinary Arts', 'NZQA/City & Guilds qualified baker & chef','International competition judge', 'Industry advocate & assessor']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Perspective',
      items: ['International business experience', 'Fluent in multiple languages', 'Cross-cultural expertise', '10+ years of multi-national Organisation senior management experience']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'People Development',
      items: ['Apprentice training and assessing', 'Coach and mentor for national hi  gh-performance team', 'Guest lecturer & demonstrator', 'Mentorship & coaching']
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[30vh] -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-br from-slate-900 to-emerald-900">
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
          <p className="text-xl text-slate-700 leading-relaxed mb-6">
            Kevin and Esther Gilbert bring complementary expertise that spans continents and industries. Kevin's journey from baker and chef to business owner, industry president, board chair, and city councillor has provided deep insights into operations, governance, and community leadership.</p>
          <p className="text-xl text-slate-700 leading-relaxed mb-6"> Esther's long history developing and overseeing business systems, human resources, and customer experiences in hospitality and retail brings a thorough understanding of what is required to create a strong business structure that supports growth and excellence. 
          </p>
          <p className="text-xl text-slate-700 leading-relaxed">
            Together, they've built a reputation for quality, integrity, and innovation—values that now unite Appetite Journeys, Elevate, and Gilbert's Fine Food under The Gilbert's Group umbrella.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="bg-slate-100 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Meet the Founders</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Esther */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <img
              src={getImagePath('team/esther.jpg')} 
              alt="Esther Gilbert"
              className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg mb-6" />
              <h3 className="text-3xl font-bold text-center text-slate-900 mb-2">Esther Gilbert</h3>
              <p className="text-center text-emerald-600 font-semibold mb-6">Co-Founder & Director</p>
              
              <div className="space-y-4 text-slate-700">
                <p className="leading-relaxed">
                  Detail focused and people-oriented, Esther brings a wealth of experience in business systems, human resources, and customer service within the hospitality and retail sectors. Her expertise lies in creating efficient operations that enhance business performance, employee satisfaction, and customer experiences.
                </p>
                <p className="leading-relaxed">
                  With decades of Senior Management under her belt, Esther has a deep understanding of the challenges businesses face and the strategies needed to overcome them. Her insights into organizational development and team dynamics are invaluable assets to The Gilbert's Group.
                </p>
                <p className="leading-relaxed">
                  Her ability with languages (she speaks four) and cross-cultural communication means that she can connect with a diverse range of clients and partners, further strengthening the group's global perspective.
                </p>
              </div>
            </div>
            {/* Kevin */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <img
              src={getImagePath('team/kevin.jpg')} 
              alt="Kevin Gilbert"
              className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg mb-6" />
              <h3 className="text-3xl font-bold text-center text-slate-900 mb-2">Kevin Gilbert</h3>
              <p className="text-center text-emerald-600 font-semibold mb-6">Co-Founder & Director</p>
              
              <div className="space-y-4 text-slate-700">
                <p className="leading-relaxed">
                  Kevin has spent his life immersed in business management with a focus on food service, hospitality, and professional development. From his early days as a baker and chef to owning and operating Gilbert's Fine Food for over 20 years, Kevin has honed his skills in delivering quality and excellence.
                </p>
                <p className="leading-relaxed">
                  Beyond business ownership, Kevin has held significant leadership roles including President of Baking New Zealand and Dunedin City Councillor. His expertise in governance, strategic planning, and community engagement informs the vision and direction of The Gilbert's Group.
                </p>
                <p className="leading-relaxed">
                  He understands the complexity and pressures of running successful businesses and is passionate about sharing his knowledge to help others thrive.
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
      {/*
      <section className="bg-slate-100 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Our Journey</h2>
          
          <div className="relative">
            {/* Timeline line
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-600 md:left-1/2"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot 
                  <div className="absolute left-8 w-4 h-4 bg-emerald-600 rounded-full md:left-1/2 md:-ml-2 z-10"></div>
                  
                  {/* Content 
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
      </section>*/}
    </div>
  );
};

export default AboutPage;