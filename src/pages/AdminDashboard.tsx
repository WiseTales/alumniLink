import React, { useState } from 'react';
import { Upload, Users, Calendar, DollarSign, FileSpreadsheet, CheckCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { Alumni } from '../types';

const AdminDashboard: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const [uploadStep, setUploadStep] = useState<'idle' | 'uploading' | 'success'>('idle');
  const [uploadedData, setUploadedData] = useState<Alumni[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadStep('uploading');
      
      // Simulate Excel processing and alumni ID generation
      setTimeout(() => {
        const mockNewAlumni: Alumni[] = [
          {
            id: `ALM${String(state.alumni.length + 1).padStart(3, '0')}`,
            name: 'Rahul Singh',
            email: 'singh_rahul@email.com',
            batch: '2022',
            department: 'Electrical Engineering',
            location: 'Seattle, WA',
            profession: 'Hardware Engineer at Intel',
            profilePicture: 'https://as1.ftcdn.net/v2/jpg/13/82/76/28/1000_F_1382762871_Lk1aVutKH8Tpcc8vNVRtuoifcH3bA0A2.webp'
          },
          {
            id: `ALM${String(state.alumni.length + 2).padStart(3, '0')}`,
            name: 'Maria Garcia',
            email: 'maria.garcia@email.com',
            batch: '2017',
            department: 'Civil Engineering',
            location: 'Phoenix, AZ',
            profession: 'Project Manager at Construction Corp',
            profilePicture: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
          }
        ];
        
        setUploadedData(mockNewAlumni);
        dispatch({ type: 'ADD_ALUMNI', payload: mockNewAlumni });
        setUploadStep('success');
      }, 2000);
    }
  };

  const stats = [
    {
      title: 'Total Alumni',
      value: state.alumni.length,
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Active Students',
      value: state.students.length,
      icon: Users,
      color: 'bg-green-500'
    },
    {
      title: 'Upcoming Events',
      value: state.events.length,
      icon: Calendar,
      color: 'bg-purple-500'
    },
    {
      title: 'Monthly Revenue',
      value: '$12,450',
      icon: DollarSign,
      color: 'bg-yellow-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your institute's alumni network</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Excel Upload Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <FileSpreadsheet className="h-5 w-5 mr-2" />
            Upload Alumni Data
          </h2>
          
          {uploadStep === 'idle' && (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Upload Excel Sheet
              </h3>
              <p className="text-gray-600 mb-4">
                Upload an Excel file to automatically generate Alumni IDs and import data
              </p>
              <label className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                Choose Excel File
                <input
                  type="file"
                  accept=".xlsx,.xls,.csv"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          )}

          {uploadStep === 'uploading' && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Processing Excel File</h3>
              <p className="text-gray-600">Generating Alumni IDs and importing data...</p>
            </div>
          )}

          {uploadStep === 'success' && (
            <div className="text-center py-8">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Successful!</h3>
              <p className="text-gray-600 mb-6">
                Generated {uploadedData.length} Alumni IDs and imported data
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 max-w-2xl mx-auto">
                <h4 className="font-medium text-gray-900 mb-3">Newly Added Alumni:</h4>
                <div className="space-y-2">
                  {uploadedData.map((alumni) => (
                    <div key={alumni.id} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">{alumni.name}</span>
                      <span className="font-mono text-blue-600">{alumni.id}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setUploadStep('idle');
                  setUploadedData([]);
                }}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Upload More Files
              </button>
            </div>
          )}
        </div>

        {/* Recent Alumni */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Alumni</h2>
          <div className="grid gap-4">
            {state.alumni.slice(0, 6).map((alumni) => (
              <div key={alumni.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-4">
                  <img
                    src={alumni.profilePicture}
                    alt={alumni.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{alumni.name}</h3>
                    <p className="text-sm text-gray-600">{alumni.profession}</p>
                    <p className="text-xs text-blue-600">ID: {alumni.id}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Class of {alumni.batch}</p>
                  <p className="text-sm text-gray-500">{alumni.department}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
