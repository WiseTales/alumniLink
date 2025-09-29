import React, { useState } from 'react';
import { Check, Users, Building, Crown, CreditCard } from 'lucide-react';

const SubscribePage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');
  const [showPayment, setShowPayment] = useState(false);

  const plans = {
    monthly: {
      price: 299,
      period: 'month',
      features: [
        'Up to 1,000 alumni records',
        'Excel data import & export',
        'Basic analytics dashboard',
        'Event management system',
        'Donation tracking',
        'Email support',
        'Mobile-responsive design',
        '5GB data storage'
      ]
    },
    yearly: {
      price: 2990,
      period: 'year',
      originalPrice: 3588,
      savings: 598,
      features: [
        'Unlimited alumni records',
        'Advanced Excel import/export',
        'Advanced analytics & reporting',
        'Event management & automation',
        'Donation tracking & receipts',
        'Priority phone & email support',
        'Custom branding options',
        'Unlimited data storage',
        'API access & integrations',
        'Dedicated account manager'
      ]
    }
  };

  const handleSubscribe = () => {
    setShowPayment(true);
  };

  if (showPayment) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Subscription</h2>
            
            {/* Order Summary */}
            <div className="border border-gray-200 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-gray-900 mb-2">Order Summary</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  AlumniLink {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan
                </span>
                <span className="font-bold text-gray-900">
                  ${plans[selectedPlan].price}/{plans[selectedPlan].period}
                </span>
              </div>
              {selectedPlan === 'yearly' && (
                <p className="text-sm text-green-600 mt-1">
                  Save ${plans.yearly.savings} annually
                </p>
              )}
            </div>

            {/* Institute Information */}
            <div className="space-y-4 mb-6">
              <h3 className="font-medium text-gray-900">Institute Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Institute Name"
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Contact Person"
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Payment Information */}
            <div className="space-y-4 mb-6">
              <h3 className="font-medium text-gray-900">Payment Information</h3>
              <input
                type="text"
                placeholder="Card Number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="grid md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Subscribe Now - ${plans[selectedPlan].price}/{plans[selectedPlan].period}
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              Secure payment processing • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Subscribe to manage your alumni data with AlumniLink. 
            Transform how your institute connects with graduates.
          </p>
        </div>

        {/* Plan Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setSelectedPlan('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                selectedPlan === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setSelectedPlan('yearly')}
              className={`px-6 py-2 rounded-md font-medium transition-colors relative ${
                selectedPlan === 'yearly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Monthly Plan */}
          <div className={`relative bg-white rounded-2xl shadow-sm p-8 ${
            selectedPlan === 'monthly' ? 'ring-2 ring-blue-500' : 'border border-gray-200'
          }`}>
            <div className="text-center mb-8">
              <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">Monthly Plan</h3>
              <div className="mt-4">
                <span className="text-5xl font-bold text-gray-900">${plans.monthly.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mt-2">Perfect for getting started</p>
            </div>

            <ul className="space-y-3 mb-8">
              {plans.monthly.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                setSelectedPlan('monthly');
                handleSubscribe();
              }}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                selectedPlan === 'monthly'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              Get Started
            </button>
          </div>

          {/* Yearly Plan */}
          <div className={`relative bg-white rounded-2xl shadow-sm p-8 ${
            selectedPlan === 'yearly' ? 'ring-2 ring-blue-500' : 'border border-gray-200'
          }`}>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                <Crown className="h-4 w-4 mr-1" />
                Most Popular
              </span>
            </div>

            <div className="text-center mb-8">
              <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">Yearly Plan</h3>
              <div className="mt-4">
                <span className="text-5xl font-bold text-gray-900">${plans.yearly.price}</span>
                <span className="text-gray-600">/year</span>
              </div>
              <div className="mt-2">
                <span className="text-gray-500 line-through">${plans.yearly.originalPrice}</span>
                <span className="text-green-600 font-medium ml-2">
                  Save ${plans.yearly.savings}
                </span>
              </div>
              <p className="text-gray-600 mt-2">Best value for growing institutes</p>
            </div>

            <ul className="space-y-3 mb-8">
              {plans.yearly.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                setSelectedPlan('yearly');
                handleSubscribe();
              }}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                selectedPlan === 'yearly'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Features Comparison */}
        <div className="mt-16 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Choose AlumniLink?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Easy Management</h3>
              <p className="text-gray-600">
                Import alumni data from Excel and generate unique IDs automatically
              </p>
            </div>
            <div className="text-center">
              <Building className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Powerful Analytics</h3>
              <p className="text-gray-600">
                Track donations, event participation, and alumni engagement metrics
              </p>
            </div>
            <div className="text-center">
              <Crown className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Dedicated support team to help you maximize your alumni network
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-gray-600">Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Is there a setup fee?</h3>
              <p className="text-gray-600">No setup fees. You only pay the subscription cost with no hidden charges.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Is my data secure?</h3>
              <p className="text-gray-600">Yes, we use enterprise-grade security with SSL encryption and regular backups.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;