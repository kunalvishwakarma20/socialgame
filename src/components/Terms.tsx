import React from 'react';
import Prefooter from './Prefooter';

const Terms: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-black py-16 px-6 text-white">
        <div className="max-w-4xl mx-auto">
          {/* H1 with Primary SEO Keyword */}
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Socialdemo™: Official Terms of Service for Free Social Casino Games
          </h1>

          <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800 space-y-6 text-gray-200 text-lg">

            {/* Introduction */}
            <p>
              Welcome to the Socialdemo social gaming platform. By accessing or utilizing our website and free online slots and casino-style games, you acknowledge and agree to abide by these official terms. If you do not accept these Social Gaming Platform Rules, you must not use our service.
            </p>

            {/* Section 1 */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">🎮 1. About Our Free Social Casino Games</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Socialdemo exclusively provides 100% free social casino games for entertainment purposes.</li>
                <li>There is absolutely no possibility for real money gambling, betting, purchasing virtual items with real money, or winning physical prizes/cash.</li>
                <li>This service does not constitute an online casino or gambling operation under Norwegian or international law.</li>
                <li>All virtual credits, scores, and rewards are for recreational use only and hold no financial value.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">🔞 2. Mandatory Age Restriction for Users</h2>
              <p>
                The Socialdemo platform is strictly intended for individuals who are 18 years or older.
                Your usage of this website serves as a binding confirmation that you meet the legal age requirement for social gaming in your jurisdiction.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">💳 3. Policy on Payments: No Real Money Gambling</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>💸 We do not accept deposits or facilitate any real-world financial transfers.</li>
                <li>🛒 Our platform has no payment processing or micro-transaction solutions.</li>
                <li>🎁 Users cannot cash out, win, or claim real money or physical goods.</li>
              </ul>
              <p>Socialdemo is a completely free-to-play social gaming service. No feature on our platform involves the use, exchange, or wagering of real currency.</p>
            </div>

            {/* Section 4 */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">🧠 4. Commitment to Responsible Social Gaming</h2>
              <p>
                We advocate for all users to engage in responsible social gaming and maintain a balanced approach to play.
                If you or someone you know requires support regarding problem gambling behavior, we recommend contacting{' '}
                <a href="https://www.hjelpelinjen.no" className="text-purple-400 underline ml-1 hover:text-purple-500" target="_blank" rel="noopener noreferrer">
                  www.hjelpelinjen.no
                </a>, a free and confidential support line in Norway, or seeking similar resources in your region.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">🔐 5. Privacy, Data Collection, and Cookies</h2>
              <p>To continuously enhance the user experience, we utilize cookies and collect anonymous, non-personal usage statistics. For a comprehensive overview, please consult our dedicated Privacy Policy page.</p>
            </div>

            {/* Section 6 */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">🔁 6. Modifications to Socialdemo Terms of Service</h2>
              <p>We reserve the right to revise these terms without explicit prior notification. Your continued use of the Socialdemo platform following any modifications indicates your full acceptance of the updated terms.</p>
            </div>

            {/* Section 7 */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">📬 7. Contact Information for Terms Inquiries</h2>
              <p>For any questions or clarification regarding these Free Social Casino Games Terms, please reach out to our team:</p>
              <p>Socialdemo AS (Oslo, Norway)</p>
              <p>📍 Dronning Eufemias gate 16, 0191 Oslo, Norway</p>
              <p>📧 E-mail: <a href="mailto:Socialdemo@gmail.com" className="text-purple-400 underline hover:text-purple-500">Socialdemo@gmail.com</a></p>
              <p>📞 Phone: +47 22 83 70 10</p>
            </div>

          </div>
        </div>
      </div>
      <Prefooter />
    </>
  );
};

export default Terms;
