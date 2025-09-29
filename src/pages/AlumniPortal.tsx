import React, { useState } from 'react';
import { User, CreditCard as Edit, Calendar, Heart, PlusCircle, MapPin, Briefcase } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { mockAlumni } from '../data/mockData';

const AlumniPortal: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const [isEditing, setIsEditing] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  const [profileData, setProfileData] = useState(mockAlumni[0]); // Using first alumni as current user

  const [eventForm, setEventForm] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    type: 'workshop' as const
  });

  const handleSaveProfile = () => {
    dispatch({ type: 'UPDATE_ALUMNI', payload: profileData });
    setIsEditing(false);
  };

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    const newEvent = {
      id: `EVT${Date.now()}`,
      ...eventForm,
      organizer: profileData.name
    };
    dispatch({ type: 'ADD_EVENT', payload: newEvent });
    setEventForm({
      title: '',
      description: '',
      date: '',
      location: '',
      type: 'workshop'
    });
    setShowEventForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Alumni Portal</h1>
          <p className="text-gray-600">Manage your profile and connect with your network</p>
        </div>

        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <User className="h-5 w-5 mr-2" />
              My Profile
            </h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
            >
              <Edit className="h-4 w-4" />
              <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <img
                src={profileData.profilePicture}
                alt={profileData.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-sm text-gray-600">Alumni ID: {profileData.id}</p>
            </div>

            <div className="md:col-span-2">
              {isEditing ? (
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={profileData.name}
                      onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Profession"
                    value={profileData.profession}
                    onChange={(e) => setProfileData({...profileData, profession: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    value={profileData.location}
                    onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                  <textarea
                    placeholder="Bio"
                    rows={3}
                    value={profileData.bio || ''}
                    onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    onClick={handleSaveProfile}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">{profileData.name}</h3>
                  <div className="flex items-center text-gray-600">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>{profileData.profession}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{profileData.location}</span>
                  </div>
                  <p className="text-gray-600">{profileData.bio}</p>
                  <div className="flex space-x-4 text-sm">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      Class of {profileData.batch}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                      {profileData.department}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <button
            onClick={() => setShowEventForm(true)}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left"
          >
            <Calendar className="h-8 w-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Organize Event</h3>
            <p className="text-sm text-gray-600">Create workshops, reunions, or webinars</p>
          </button>

          <a
            href="/donate"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left block"
          >
            <Heart className="h-8 w-8 text-red-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Make Donation</h3>
            <p className="text-sm text-gray-600">Support your institute's growth</p>
          </a>

          <a
            href="/search"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left block"
          >
            <User className="h-8 w-8 text-green-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Connect</h3>
            <p className="text-sm text-gray-600">Network with alumni and students</p>
          </a>
        </div>

        {/* Event Creation Modal */}
        {showEventForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Create Event</h3>
              <form onSubmit={handleCreateEvent} className="space-y-4">
                <input
                  type="text"
                  placeholder="Event Title"
                  value={eventForm.title}
                  onChange={(e) => setEventForm({...eventForm, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <textarea
                  placeholder="Description"
                  rows={3}
                  value={eventForm.description}
                  onChange={(e) => setEventForm({...eventForm, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <input
                  type="date"
                  value={eventForm.date}
                  onChange={(e) => setEventForm({...eventForm, date: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={eventForm.location}
                  onChange={(e) => setEventForm({...eventForm, location: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <select
                  value={eventForm.type}
                  onChange={(e) => setEventForm({...eventForm, type: e.target.value as any})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="workshop">Workshop</option>
                  <option value="reunion">Reunion</option>
                  <option value="webinar">Webinar</option>
                  <option value="meetup">Meetup</option>
                </select>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowEventForm(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Create Event
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Recent Events */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {state.events.slice(0, 3).map((event) => (
              <div key={event.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{event.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                      <span>📅 {event.date}</span>
                      <span>📍 {event.location}</span>
                      <span>👤 {event.organizer}</span>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    event.type === 'workshop' ? 'bg-blue-100 text-blue-800' :
                    event.type === 'reunion' ? 'bg-purple-100 text-purple-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {event.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniPortal;