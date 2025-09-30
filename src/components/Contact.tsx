import React from 'react';
import Prefooter from './Prefooter';

const Contact: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-black py-16 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          {/* H1: Primary SEO focus: Contact and Social Casino Games */}
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Contact SocialDemo: Support for Free Social Casino Games
          </h1>

          <div className="bg-gray-900 rounded-2xl p-10 shadow-xl border border-gray-800">
            {/* Introductory Text */}
            <p className="text-gray-300 text-xl text-center mb-10 max-w-3xl mx-auto">
              Need assistance with our free online slots, have a query about responsible gaming, or want to discuss a partnership? Our SocialDemo team is ready to help. Reach out using the details below or send us a direct message.
            </p>
            <hr className="mb-8 border-gray-700" />
            
            {/* TWO-COLUMN LAYOUT START */}
            <div className="grid md:grid-cols-2 gap-12">

              {/* COLUMN 1: Direct Contact Details & Quick Info */}
              <div className="space-y-8">
                
                {/* Contact Information (Enhanced Visibility) */}
                <div className="space-y-3 p-6 bg-gray-800 rounded-xl shadow-inner">
                  <h2 className="text-2xl font-bold flex items-center mb-4">
                    <span className="text-purple-500 mr-3">📞</span> Direct Contact Information
                  </h2>
                  <p className="text-gray-300 text-lg">
                    <span className="font-semibold block mb-1">E-mail Support:</span> 
                    <a href="mailto:Socialdemo@gmail.com" className="text-purple-400 underline hover:text-purple-500 transition">Socialdemo@gmail.com</a>
                  </p>
                  <p className="text-gray-300 text-lg">
                    <span className="font-semibold block mb-1">Telephone:</span> 
                    +47 22 83 70 10
                  </p>
                  <p className="text-gray-300 text-lg">
                    <span className="font-semibold block mb-1">Head Office (Oslo, Norway):</span> 
                    SocialDemo AS, Dronning Eufemias gate 16, 0191 Oslo
                  </p>
                </div>

                {/* Opening Hours */}
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold flex items-center">
                    <span className="text-purple-500 mr-3">🕒</span> Office Hours
                  </h2>
                  <ul className="list-disc list-inside text-lg text-gray-300 ml-4">
                    <li>Monday–Friday: 09:00–17:00 (CET)</li>
                    <li>Saturday–Sunday: Closed</li>
                  </ul>
                </div>
                
                {/* Policy Links & Responsible Gaming */}
                <div className="space-y-3 p-6 bg-gray-800 rounded-xl border border-gray-700">
                    <h2 className="text-2xl font-bold flex items-center">
                        <span className="text-purple-500 mr-3">🛡️</span> Key Information
                    </h2>
                    <p className="text-gray-300">
                      We strictly adhere to a No Real Money Gaming policy. For full details on data handling and platform rules, visit our dedicated pages:
                    </p>
                    <p>
                        <a href="/privacy" className="text-purple-400 underline font-semibold hover:text-purple-500">Privacy Policy (GDPR Compliant)</a> | 
                        <a href="/terms" className="text-purple-400 underline font-semibold hover:text-purple-500 ml-2">Terms of Use</a>
                    </p>
                    <p className="mt-4 pt-4 border-t border-gray-700 text-gray-300">
                        For support with problem gaming, please contact the external and confidential resource:
                        <a href="https://www.hjelpelinjen.no" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline font-semibold ml-1 hover:text-purple-500">
                          Hjelpelinjen.no
                        </a>.
                    </p>
                </div>
              </div>

              {/* COLUMN 2: Contact Form (UX Enhanced) */}
              <div className="space-y-4 bg-gray-800 p-8 rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-extrabold text-white mb-6">
                  Send Us a Direct Message 💬
                </h2>
                <form className="space-y-5">
                  <input
                    type="text"
                    placeholder="Your Full Name (Required)"
                    required
                    className="w-full border-b border-gray-600 bg-gray-900 text-white rounded-t-lg p-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-200"
                  />
                  <input
                    type="email"
                    placeholder="Your Professional Email (Required)"
                    required
                    className="w-full border-b border-gray-600 bg-gray-900 text-white rounded-t-lg p-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-200"
                  />
                  <select
                    className="w-full border-b border-gray-600 bg-gray-900 text-gray-400 rounded-t-lg p-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-200"
                  >
                      <option value="">Select Inquiry Type...</option>
                      <option value="technical">Technical Support / Bug Report</option>
                      <option value="partnership">Business & Partnership Inquiry</option>
                      <option value="policy">Terms/Privacy Policy Question</option>
                      <option value="feedback">General Feedback</option>
                  </select>
                  <textarea
                    placeholder="Tell us about your concern. Please be detailed."
                    required
                    className="w-full border border-gray-600 bg-gray-900 text-white rounded-lg p-4 h-40 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-200"
                  />
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition duration-200 shadow-md uppercase tracking-wider"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
              {/* TWO-COLUMN LAYOUT END */}
            </div>
          </div>
        </div>
      </div>
      <Prefooter />
    </>
  );
};

export default Contact;
