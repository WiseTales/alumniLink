import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Users, LogOut, User } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const Header: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'SET_USER', payload: null });
    navigate('/');
  };

  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">AlumniLink</h1>
              <p className="text-xs text-gray-600">centralized alumni data management and networking</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/search" className="text-gray-700 hover:text-blue-600 transition-colors">
              Search Alumni
            </Link>
            {state.currentUser && (
              <>
                {state.currentUser.role === 'admin' && (
                  <Link to="/admin" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Admin Dashboard
                  </Link>
                )}
                {state.currentUser.role === 'alumni' && (
                  <Link to="/alumni" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Alumni Portal
                  </Link>
                )}
                {state.currentUser.role === 'student' && (
                  <Link to="/student" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Student Portal
                  </Link>
                )}
                <Link to="/donate" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Donate
                </Link>
              </>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            {state.currentUser ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">
                    {state.currentUser.name}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;