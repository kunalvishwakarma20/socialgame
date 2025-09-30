import React from 'react';
import Prefooter from './Prefooter';

const Responsible: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* H1: Primary SEO focus: Responsible Gaming and Social Casino */}
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Commitment to Responsible Social Gaming on SocialDemo
          </h1>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 space-y-8 text-gray-700 text-lg">

            {/* Introductory Statement and Core Value Proposition */}
            <section className="space-y-4">
              <p>
                At SocialDemo, your enjoyment and well-being are our top priorities. We are a free social casino dedicated to providing safe, purely entertaining online casino games where no real money gambling is ever involved. Our policy ensures a fun, risk-free environment for every player.
              </p>
            </section>

            {/* Section 1: Defining Responsible Play */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">💡 Understanding Safe Play and Boundaries</h2>
              <p>
                Responsible gaming simply means keeping your play balanced. Even with 100% free-to-play social games, it's important that your time spent with us remains a positive pastime and does not interfere with your personal life, school, or work.
              </p>
            </div>
            
            {/* Section 2: Key Platform Principles (Core Safety) */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">✅ SocialDemo's Core Principles: No Real Money</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>🚫 Zero Financial Risk: We offer free online slots and table games with no real currency stakes, purchases, or deposits required.</li>
                <li>🏆 No Winnings or Prizes: Virtual credits have no monetary value and cannot be exchanged for cash, goods, or services.</li>
                <li>🔞 Strict Age Restriction: The platform is strictly for users who are 18 years or older. This is a mandatory rule for all users.</li>
              </ul>
            </div>

            {/* Section 3: Self-Regulation and Tips */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">⏰ Responsible Gaming Habits for Entertainment</h2>
              <p>To ensure your experience remains positive, we encourage you to follow these safe social gaming tips:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Time Management: Set clear time limits for your sessions and take regular breaks.</li>
                <li>Purpose of Play: Remember you are playing for relaxation and entertainment—not to chase high scores or rankings.</li>
                <li>Stay Balanced: Balance online gaming with physical activities, social interactions, and other hobbies.</li>
              </ul>
            </div>


            {/* Section 4: External Help/Support Resources (Norwegian focus kept) */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">🆘 Seeking Support: When to Reach Out</h2>
              <p>
                While our games carry no gambling risk, if you feel any game—free or otherwise—is becoming compulsive or causing distress, support is available.
              </p>
              <p className="font-semibold">
                For confidential, professional counseling in Norway, please contact:
              </p>
              <p>
                🔗 Hjelpelinjen.no (The Help Line):{' '}
                <a href="https://www.hjelpelinjen.no" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  www.hjelpelinjen.no
                </a>
              </p>
              <p>📞 Phone: 800 800 40 (Available 24/7)</p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">📩 Contact SocialDemo</h2>
              <p>For any questions regarding our Responsible Gaming Policy or platform operation, please contact our team:</p>
              <p>SocialDemo AS (Oslo, Norway)</p>
              <p>📧 <a href="mailto:meister@gmail.com" className="text-blue-600 underline">meister@gmail.com</a></p>
              <p>📍 Dronning Eufemias gate 16, 0191 Oslo, Norway</p>
              <p>📞 +47 22 83 70 10</p>
            </div>
          </div>
        </div>
      </div>
      <Prefooter />
    </>
  );
};

export default Responsible;