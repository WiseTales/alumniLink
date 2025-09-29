import React, { useState } from 'react';
import { Heart, CreditCard, CheckCircle } from 'lucide-react';

const DonatePage: React.FC = () => {
  const [donationForm, setDonationForm] = useState({
    amount: '',
    purpose: 'Scholarship Fund',
    isRecurring: false,
    paymentMethod: 'card'
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate donation processing
    setTimeout(() => {
      setShowSuccess(true);
    }, 1500);
  };

  const donationPurposes = [
    'Scholarship Fund',
    'Infrastructure Development',
    'Research & Innovation',
    'Student Activities',
    'Library Resources',
    'Sports & Recreation',
    'Emergency Fund',
    'General Development'
  ];

  const suggestedAmounts = [100, 250, 500, 1000, 2500, 5000];

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Thank You!
            </h2>
            <p className="text-gray-600 mb-6">
              Your donation of ${donationForm.amount} to {donationForm.purpose} has been successfully processed.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              You will receive a receipt via email shortly.
            </p>
            <button
              onClick={() => {
                setShowSuccess(false);
                setDonationForm({
                  amount: '',
                  purpose: 'Scholarship Fund',
                  isRecurring: false,
                  paymentMethod: 'card'
                });
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Make Another Donation
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Support Your Institute
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your contribution helps build a brighter future for current and future students. 
            Every donation makes a meaningful impact.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-600 mb-2">$2.4M</h3>
            <p className="text-gray-600">Raised this year</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <h3 className="text-3xl font-bold text-green-600 mb-2">1,250</h3>
            <p className="text-gray-600">Students supported</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <h3 className="text-3xl font-bold text-purple-600 mb-2">78%</h3>
            <p className="text-gray-600">Alumni participation</p>
          </div>
        </div>

        {/* Donation Form */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Amount Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Donation Amount
              </label>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                {suggestedAmounts.map(amount => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setDonationForm({...donationForm, amount: amount.toString()})}
                    className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                      donationForm.amount === amount.toString()
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  placeholder="Custom amount"
                  value={donationForm.amount}
                  onChange={(e) => setDonationForm({...donationForm, amount: e.target.value})}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            {/* Purpose Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Donation Purpose
              </label>
              <select
                value={donationForm.purpose}
                onChange={(e) => setDonationForm({...donationForm, purpose: e.target.value})}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                {donationPurposes.map(purpose => (
                  <option key={purpose} value={purpose}>{purpose}</option>
                ))}
              </select>
            </div>

            {/* Recurring Donation */}
            <div className="flex items-center">
              <input
                id="recurring"
                type="checkbox"
                checked={donationForm.isRecurring}
                onChange={(e) => setDonationForm({...donationForm, isRecurring: e.target.checked})}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="recurring" className="ml-2 text-sm text-gray-700">
                Make this a recurring monthly donation
              </label>
            </div>

            {/* Payment Information */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Information</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      placeholder="12345"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
              >
                <CreditCard className="h-5 w-5 mr-2" />
                Donate ${donationForm.amount || '0'}
                {donationForm.isRecurring && '/month'}
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">
                Your donation is secure and tax-deductible
              </p>
            </div>
          </form>
        </div>

        {/* Impact Statement */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Recent Achievements</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• New computer lab equipped for 100 students</li>
                <li>• 50 scholarships awarded to deserving students</li>
                <li>• Library resources expanded with digital access</li>
                <li>• Research lab upgraded with latest equipment</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Upcoming Projects</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• New student center construction</li>
                <li>• Faculty development programs</li>
                <li>• Campus sustainability initiatives</li>
                <li>• Innovation and startup incubator</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;