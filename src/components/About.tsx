import React from 'react';
import Prefooter from './Prefooter'; // Import Prefooter

const About: React.FC = () => {
  return (
    <> {/* Wrap in a Fragment */}
      <div className="min-h-screen bg-black py-16 px-6 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Unveiling SocialDemo: Your Premier Free Social Casino Destination 🌟
          </h1>

          {/* --- Core Value Proposition Section --- */}
          <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800 mb-12">
            <h2 className="text-2xl font-semibold text-center mb-4">
              Pioneering Risk-Free Online Casino Games and Responsible Gaming
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              SocialDemo stands as Norway's leading platform for social gaming, offering an exhilarating yet completely safe alternative to traditional gambling. We create a dynamic space for players who seek the excitement of casino-inspired games but require a 100% free, risk-free, and no real money gaming environment. Our mission is clear: deliver high-quality digital slots and classic table games that are always fun, accessible, and absolutely free!
            </p>
          </div>

          {/* --- Key Differentiators Section (SEO Focus) --- */}
          <h2 className="text-3xl font-bold text-center mb-6">
            Why Choose the Social Gaming Experience at SocialDemo?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-xl bg-purple-700 text-white text-center shadow-lg">
              <p className="text-2xl font-bold">Always Free-to-Play Social Games</p>
            </div>
            <div className="p-6 rounded-xl bg-purple-700 text-white text-center shadow-lg">
              <p className="text-2xl font-bold">Entertainment Only — No Wagers Accepted</p>
            </div>
            <div className="p-6 rounded-xl bg-purple-700 text-white text-center shadow-lg">
              <p className="text-2xl font-bold">Games Without Real Money or Cash Prizes</p>
            </div>
          </div>

          {/* --- Commitment to Players (Trust and Safety) --- */}
          <h2 className="text-3xl font-bold text-center mb-6">
            Building Trust: Our Promise of Safe and Secure Gaming 🛡️
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Principle 1: Gaming Without Pressure */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Dedication to Risk-Free Entertainment</h3>
              <p className="text-gray-300 text-sm">
                We believe the joy of online gaming shouldn't involve financial pressure. Our high-quality platform provides zero chance of financial loss.
              </p>
            </div>
            {/* Principle 2: For Adults (18+) */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Strictly for Adult Gaming (18+)</h3>
              <p className="text-gray-300 text-sm">
                SocialDemo is reserved exclusively for adults. We actively champion responsible gaming protocols and maintain a clear legal distinction from online gambling operations.
              </p>
            </div>
            {/* Principle 3: Safety and Transparency */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Unwavering Data Security and GDPR</h3>
              <p className="text-gray-300 text-sm">
                Your data safety is paramount. We never request or store payment details. All data processing is done anonymously, fully complying with Norwegian law and GDPR.
              </p>
            </div>
          </div>

          {/* --- Contact and Location Section --- */}
          <h2 className="text-3xl font-bold text-center mb-6">
            Connect With the SocialDemo Team 📞
          </h2>
          <div className="bg-gray-900 text-white rounded-xl p-6 shadow-xl">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-bold mb-1">SocialDemo AS</h3>
                <p>Dronning Eufemias gate 16</p>
                <p>0191 Oslo, Norway</p>
              </div>
              <div className="md:text-right">
                <p className="mb-1">Email for Inquiries: <span className="font-semibold">Socialdemo@gmail.com</span></p>
                <p>Telephone: <span className="font-semibold">+47 22 83 70 10</span></p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Prefooter /> {/* Insert Prefooter here */}
    </>
  );
};

export default About;
