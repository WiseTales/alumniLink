import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, LogIn } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const LoginPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<'admin' | 'alumni' | 'student'>('admin');
  const [email, setEmail] = useState('');
  const { dispatch } = useAppContext();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock login logic
    const mockUsers = {
      admin: { id: 'admin1', name: 'Admin User', role: 'admin' as const },
      alumni: { id: 'alum1', name: 'Sarah Johnson', role: 'alumni' as const },
      student: { id: 'stu1', name: 'Alex Kumar', role: 'student' as const }
    };

    const user = mockUsers[selectedRole];
    dispatch({ type: 'SET_USER', payload: user });

    // Navigate to appropriate dashboard
    switch (selectedRole) {
      case 'admin':
        navigate('/admin');
        break;
      case 'alumni':
        navigate('/alumni');
        break;
      case 'student':
        navigate('/student');
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="bg-blue-600 p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>
          <p className="mt-2 text-gray-600">Access your AlumniLink account</p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Account Type
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'admin', label: 'Admin' },
                { value: 'alumni', label: 'Alumni' },
                { value: 'student', label: 'Student' }
              ].map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setSelectedRole(value as any)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg border ${
                    selectedRole === value
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  } transition-colors`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder={`Enter ${selectedRole} email`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <LogIn className="h-4 w-4 mr-2" />
            Sign In as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Demo credentials: Use any email and password for testing
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;