import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Building, GraduationCap, DollarSign, Calendar, Search } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">AlumniLink</h1>
            <p className="text-xl mb-8 text-blue-100">
              centralized alumni data management and networking
            </p>
            <p className="text-lg mb-12 text-blue-100 max-w-3xl mx-auto">
              A comprehensive platform for educational institutions to manage alumni records, 
              facilitate networking, organize events, and streamline donation processes.
            </p>
            <Link
              to="/subscribe"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Connecting Communities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AlumniLink brings together institutes, alumni, and students in one powerful platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* For Institutes */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Institutes</h3>
              <p className="text-gray-600 mb-6">
                Manage alumni records, organize events, and track donations.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Excel-based data import
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Automated alumni ID generation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Event management & analytics
                </li>
              </ul>
            </div>

            {/* For Alumni */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Alumni</h3>
              <p className="text-gray-600 mb-6">
                Connect, network, and give back to your institute.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Profile management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Networking & events
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Donation portal
                </li>
              </ul>
            </div>

            {/* For Students */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Students</h3>
              <p className="text-gray-600 mb-6">
                Interact with alumni and build valuable connections.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Alumni search & networking
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Event participation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Mentorship opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Meet some of our accomplished alumni
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: 'Alisha Fatima',
                role: 'Software Engineer at Google',
                batch: 'Class of 2022',
                image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
              },
              {
                name: 'Rohit Yadav',
                role: 'Product Manager at Microsoft',
                batch: 'Class of 2018',
                image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
              },
              {
                name: 'Muskan Srivastava',
                role: 'Marketing Director',
                batch: 'Class of 2020',
                image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
              },
              {
                name: 'Samir Khushwaha',
                role: 'Senior Engineer at Tesla',
                batch: 'Class of 2017',
                image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
              }
            ].map((alumni, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-gray-900 mb-1">{alumni.name}</h3>
                <p className="text-sm text-blue-600 mb-1">{alumni.role}</p>
                <p className="text-xs text-gray-500">{alumni.batch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Subscription Plans
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your institute
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Monthly Plan</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">
                $299<span className="text-lg text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Up to 1,000 alumni records
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Excel data import
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Event management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Donation tracking
                </li>
              </ul>
              <Link
                to="/subscribe"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl border-2 border-blue-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Yearly Plan</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">
                $2,990<span className="text-lg text-gray-600">/year</span>
              </div>
              <p className="text-green-600 font-medium mb-4">Save $598 annually</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Unlimited alumni records
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Advanced analytics
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Priority support
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Custom integrations
                </li>
              </ul>
              <Link
                to="/subscribe"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Alumni Network?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of institutes already using AlumniLink to strengthen their alumni connections
          </p>
          <Link
            to="/subscribe"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Request Demo Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
