import React, { useState } from 'react';
import { User, Search, Calendar, MessageCircle, GraduationCap } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { mockStudents } from '../data/mockData';

const StudentPortal: React.FC = () => {
  const { state } = useAppContext();
  const [studentProfile, setStudentProfile] = useState(mockStudents[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAlumni = state.alumni.filter(alumni =>
    alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    alumni.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
    alumni.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Student Portal</h1>
          <p className="text-gray-600">Connect with alumni and build your network</p>
        </div>

        {/* Student Profile Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-6">
            <img
              src={studentProfile.profilePicture}
              alt={studentProfile.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{studentProfile.name}</h2>
              <div className="flex items-center text-gray-600 mt-1">
                <GraduationCap className="h-4 w-4 mr-2" />
                <span>{studentProfile.department} • Class of {studentProfile.year}</span>
              </div>
              <p className="text-gray-600 mt-2">{studentProfile.bio}</p>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Search className="h-5 w-5 mr-2" />
            Search Alumni
          </h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, profession, or department..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Alumni Results */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredAlumni.slice(0, 6).map((alumni) => (
            <div key={alumni.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center mb-4">
                <img
                  src={alumni.profilePicture}
                  alt={alumni.name}
                  className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                />
                <h3 className="font-semibold text-gray-900">{alumni.name}</h3>
                <p className="text-sm text-blue-600">{alumni.profession}</p>
                <p className="text-xs text-gray-500 mt-1">Class of {alumni.batch}</p>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <span className="font-medium w-20">Dept:</span>
                  <span>{alumni.department}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-20">Location:</span>
                  <span>{alumni.location}</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white text-sm py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <User className="h-4 w-4 mr-1" />
                  View Profile
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 text-sm py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Upcoming Alumni Events
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {state.events.slice(0, 4).map((event) => (
              <div key={event.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{event.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    event.type === 'workshop' ? 'bg-blue-100 text-blue-800' :
                    event.type === 'reunion' ? 'bg-purple-100 text-purple-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {event.type}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <div className="space-x-3">
                    <span>📅 {event.date}</span>
                    <span>📍 {event.location}</span>
                  </div>
                  <span>by {event.organizer}</span>
                </div>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;