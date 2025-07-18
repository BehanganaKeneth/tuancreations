import React, { useState } from 'react';
import { Play, Users, Clock, Star, BookOpen, Video, Calendar, User } from 'lucide-react';

const LearningPlatform = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isLiveSession, setIsLiveSession] = useState(false);

  const courses = [
    {
      id: 1,
      title: 'AI & Machine Learning Fundamentals',
      instructor: 'Ainamani Dickson',
      duration: '8 weeks',
      students: 245,
      rating: 4.8,
      level: 'Beginner',
      category: 'AI/ML',
      description: 'Learn the fundamentals of artificial intelligence and machine learning with practical African use cases.',
      nextSession: '2025-01-15 14:00',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Mobile App Development with React Native',
      instructor: 'Irene Nakiyingi',
      duration: '10 weeks',
      students: 189,
      rating: 4.9,
      level: 'Intermediate',
      category: 'Software',
      description: 'Build cross-platform mobile applications that solve real African problems.',
      nextSession: '2025-01-16 16:00',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Digital Media Production & Storytelling',
      instructor: 'Cissyln Musiimenta',
      duration: '6 weeks',
      students: 156,
      rating: 4.7,
      level: 'Beginner',
      category: 'Media',
      description: 'Master the art of digital storytelling and media production for African audiences.',
      nextSession: '2025-01-17 10:00',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'IoT Solutions for Smart Cities',
      instructor: 'Keneth Behangana',
      duration: '12 weeks',
      students: 98,
      rating: 4.6,
      level: 'Advanced',
      category: 'IoT',
      description: 'Design and implement IoT solutions for African smart city initiatives.',
      nextSession: '2025-01-18 13:00',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'Cybersecurity for African Enterprises',
      instructor: 'Rwoth Ofwono',
      duration: '8 weeks',
      students: 134,
      rating: 4.8,
      level: 'Intermediate',
      category: 'Security',
      description: 'Protect African businesses with comprehensive cybersecurity strategies.',
      nextSession: '2025-01-19 15:00',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'Aerospace Engineering Basics',
      instructor: 'Praise Asiimire',
      duration: '14 weeks',
      students: 67,
      rating: 4.9,
      level: 'Advanced',
      category: 'Aerospace',
      description: 'Introduction to aerospace engineering with focus on African space initiatives.',
      nextSession: '2025-01-20 11:00',
      image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const liveSession = {
    title: 'Building AI Models for Agricultural Prediction',
    instructor: 'Dr. Amara Okafor',
    participants: 45,
    duration: '2 hours',
    description: 'In this live session, we\'ll build a machine learning model to predict crop yields using African agricultural data.'
  };

  const LiveSessionInterface = () => (
    <div className="bg-gray-900 text-white p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-red-400 font-semibold">LIVE</span>
        </div>
        <button
          onClick={() => setIsLiveSession(false)}
          className="text-gray-400 hover:text-white"
        >
          Exit Session
        </button>
      </div>
      
      <div className="aspect-video bg-gray-800 rounded-lg mb-6 flex items-center justify-center">
        <div className="text-center">
          <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-400">Live video stream would appear here</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h3 className="text-xl font-semibold mb-4">{liveSession.title}</h3>
          <p className="text-gray-300 mb-4">{liveSession.description}</p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{liveSession.instructor}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>{liveSession.participants} participants</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{liveSession.duration}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Live Chat</h4>
          <div className="space-y-3 text-sm">
            <div className="bg-gray-700 p-2 rounded">
              <span className="text-green-400">John:</span> Great explanation of neural networks!
            </div>
            <div className="bg-gray-700 p-2 rounded">
              <span className="text-blue-400">Sarah:</span> Can you share the dataset link?
            </div>
            <div className="bg-gray-700 p-2 rounded">
              <span className="text-purple-400">Mike:</span> This is exactly what we need in Kenya
            </div>
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full bg-gray-700 text-white px-3 py-2 rounded text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );

  if (isLiveSession) {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-7xl mx-auto">
          <LiveSessionInterface />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">TUAN Digital Academy</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Learn cutting-edge technology skills from expert African trainers through live, 
              interactive sessions designed for the African context.
            </p>
            <button
              onClick={() => setIsLiveSession(true)}
              className="inline-flex items-center px-8 py-4 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="w-3 h-3 bg-white rounded-full animate-pulse mr-3"></div>
              Join Live Session
            </button>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {['All', 'AI/ML', 'Software', 'Media', 'IoT', 'Security', 'Aerospace'].map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-700 hover:border-gray-600 hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                      course.level === 'Beginner' ? 'bg-gray-700 text-white' :
                      course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                      {course.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{course.instructor}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students} students</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center space-x-1 text-green-600">
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>Next: {new Date(course.nextSession).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold">
                    <button className="flex-1 bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors text-sm font-semibold">
                      Enroll Now
                    </button>
                    <button className="flex items-center justify-center w-12 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <BookOpen className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose TUAN Digital Academy?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Interactive Sessions</h3>
              <p className="text-gray-600">Real-time learning with expert instructors and peer interaction</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert African Trainers</h3>
              <p className="text-gray-600">Learn from industry leaders who understand the African context</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practical Projects</h3>
              <p className="text-gray-600">Build real solutions for African challenges and opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Certification Programs</h3>
              <p className="text-gray-600">Earn recognized certifications that advance your career</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningPlatform;