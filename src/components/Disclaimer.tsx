import React from 'react';
import Prefooter from './Prefooter';

const Disclaimer: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-black py-16 px-6 text-white">
        <div className="max-w-4xl mx-auto">
          {/* H1: Primary SEO focus: Disclaimer for Free Social Casino */}
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Official Disclaimer for SocialDemo Free Social Casino Games
          </h1>

          <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800 space-y-8 text-gray-200 text-lg">
            
            {/* Core Principle Statement (SEO) */}
            <section className="space-y-4">
              <p>
                SocialDemo AS provides this website and all hosted content strictly as a free social gaming platform for entertainment purposes only. By using our service, you acknowledge and agree to the terms outlined in this official Disclaimer.
              </p>
            </section>

            {/* Section 1: No Financial Risk / No Gambling Disclaimer */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">🎮 No Real Money Gambling Policy 💸</h2>
              <p>
                The most fundamental aspect of SocialDemo is our absolute commitment to a no real money environment. Our platform:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
                <li>❌ Does not offer gambling, betting, or wagering with real currency.</li>
                <li>🆓 Is 100% free to play; virtual credits have zero financial value.</li>
                <li>🚫 Does not allow users to win, cash out, or exchange rewards for real money or physical prizes.</li>
              </ul>
              <p className="font-semibold mt-4 text-gray-200">
                We are legally defined as a social casino service and do not operate as an online gambling provider.
              </p>
            </div>

            {/* Section 2: Limitation of Liability and Accuracy */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">🧑‍⚖️ Limitation of Liability and Service Guarantee</h2>
              <p>
                SocialDemo AS provides the free online slots and games "as is" and makes no warranties, express or implied, regarding:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
                <li>Accuracy and Completeness: The correctness, reliability, or completeness of the game outcomes, scores, or content.</li>
                <li>Future Performance: That success in our free-to-play social games translates into success or winnings in any real-money gambling activity.</li>
                <li>Service Availability: The continuous, uninterrupted, or error-free operation of the website and games.</li>
              </ul>
              <p className="text-gray-200">
                Your reliance on the information and use of the service are entirely at your own risk. We are not liable for any losses or damages arising from your use of the platform.
              </p>
            </div>

            {/* Section 3: Responsible Gaming Reminder (SEO) */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">🧠 Responsible Social Gaming Reminder</h2>
              <p>
                We advocate for all users to engage in responsible social gaming. Please ensure your play remains balanced and fun.
              </p>
              <p>
                For external, confidential support related to problem gaming behavior, we encourage you to visit the Norwegian national resource:
                <a href="https://www.hjelpelinjen.no" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline hover:text-purple-500 ml-1">
                  www.hjelpelinjen.no
                </a>.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">📬 Contact Information</h2>
              <p>For questions related to this SocialDemo Disclaimer:</p>
              <p>SocialDemo AS</p>
              <p>📧 <a href="mailto:meister@gmail.com" className="text-purple-400 underline hover:text-purple-500">meister@gmail.com</a></p>
              <p>📍 Dronning Eufemias gate 16, 0191 Oslo, Norway</p>
            </div>
          </div>
        </div>
      </div>
      <Prefooter />
    </>
  );
};

export default Disclaimer;
