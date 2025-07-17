import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Users, Rocket, Brain, Tv, Wifi, GraduationCap } from 'lucide-react';

const HomePage = () => {
  const divisions = [
    { icon: Brain, name: 'Software, AI & Robotics Lab', description: 'Building apps, SaaS tools, AI models, and robotics' },
    { icon: Tv, name: 'Media Studio & TUAN TV', description: 'Films, animations, digital campaigns, and broadcasting' },
    { icon: Wifi, name: 'Telecom & IoT Division', description: 'Infrastructure for connectivity and IoT solutions' },
    { icon: Rocket, name: 'Aerospace & Embedded Systems', description: 'Satellites, UAVs, and space technology' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium mb-6">
              🟢 ENTERPRISE STRATEGY PROPOSAL
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              TUAN Creations Inc.
            </h1>
            <p className="text-2xl md:text-3xl text-green-600 font-semibold mb-4">
              The United African Nation
            </p>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Building the United African Nation in Technology. A Pan-African ICT innovation 
              enterprise designed to unify and transform the continent's digital economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/enrollment"
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Join Our Mission
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <Globe className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To be the strategic hub of Africa's digital economy and transformation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <Rocket className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700">
                To uncover Africa's digital potential by building innovation capacity, connecting 
                ecosystems, and delivering Africa-first solutions across multiple sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Divisions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Innovation Divisions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multi-division enterprise providing complete, interoperable services across Africa's digital stack
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {divisions.map((division, index) => {
              const Icon = division.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <Icon className="w-12 h-12 text-green-600 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{division.name}</h4>
                  <p className="text-gray-600">{division.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/divisions"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              View All Divisions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            "Africa Inspired!" — Join the Movement
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Whether you're an investor, partner, student, or client, there's a place for you 
            in building Africa's digital future.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link
              to="/enrollment?type=investor"
              className="bg-white text-green-600 px-6 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Become an Investor
            </Link>
            <Link
              to="/enrollment?type=partner"
              className="bg-white text-green-600 px-6 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Partner with Us
            </Link>
            <Link
              to="/enrollment?type=student"
              className="bg-white text-green-600 px-6 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Join as Student
            </Link>
            <Link
              to="/enrollment?type=client"
              className="bg-white text-green-600 px-6 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Hire Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Platform Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <GraduationCap className="w-16 h-16 text-green-600 mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                TUAN Digital Academy
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Access our live learning platform where expert trainers teach cutting-edge 
                technology skills. From AI and robotics to media production and aerospace engineering.
              </p>
              <Link
                to="/learning"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Explore Learning Platform
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Live Interactive Sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Expert African Trainers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Practical Project-Based Learning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Certification Programs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;