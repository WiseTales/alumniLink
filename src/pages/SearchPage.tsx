import React, { useState } from 'react';
import { Search, Filter, User, MapPin, Briefcase, Calendar } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const SearchPage: React.FC = () => {
  const { state } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    batch: '',
    department: '',
    location: '',
    profession: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  const filteredAlumni = state.alumni.filter(alumni => {
    const matchesQuery = 
      alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumni.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumni.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumni.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilters = 
      (!filters.batch || alumni.batch.includes(filters.batch)) &&
      (!filters.department || alumni.department.toLowerCase().includes(filters.department.toLowerCase())) &&
      (!filters.location || alumni.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.profession || alumni.profession.toLowerCase().includes(filters.profession.toLowerCase()));

    return matchesQuery && matchesFilters;
  });

  const departments = [...new Set(state.alumni.map(a => a.department))];
  const batches = [...new Set(state.alumni.map(a => a.batch))];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Search Alumni</h1>
          <p className="text-gray-600">Find and connect with alumni from your institute</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, profession, department, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid md:grid-cols-4 gap-4">
                <select
                  value={filters.batch}
                  onChange={(e) => setFilters({...filters, batch: e.target.value})}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Batches</option>
                  {batches.map(batch => (
                    <option key={batch} value={batch}>Class of {batch}</option>
                  ))}
                </select>
                <select
                  value={filters.department}
                  onChange={(e) => setFilters({...filters, department: e.target.value})}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Departments</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Location"
                  value={filters.location}
                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Profession"
                  value={filters.profession}
                  onChange={(e) => setFilters({...filters, profession: e.target.value})}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found {filteredAlumni.length} alumni{searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Alumni Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((alumni) => (
            <div key={alumni.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={alumni.profilePicture}
                  alt={alumni.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{alumni.name}</h3>
                  <p className="text-sm text-blue-600">{alumni.profession}</p>
                  <p className="text-xs text-gray-500">ID: {alumni.id}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                  <span>Class of {alumni.batch}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-2 text-gray-400" />
                  <span>{alumni.department}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                  <span>{alumni.location}</span>
                </div>
              </div>

              {alumni.bio && (
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {alumni.bio}
                </p>
              )}

              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                <User className="h-4 w-4 mr-2" />
                View Profile
              </button>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredAlumni.length === 0 && (
          <div className="text-center py-12">
            <User className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No alumni found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters to find more results.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;