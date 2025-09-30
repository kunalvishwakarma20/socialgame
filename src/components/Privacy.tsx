import React from 'react';
import Prefooter from './Prefooter';

const Privacy: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* H1: Primary SEO focus: Privacy, GDPR, and Social Casino */}
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            SocialDemo Privacy Policy: GDPR Compliance for Free Social Casino Games
          </h1>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 space-y-8 text-gray-700 text-lg">
            
            {/* Introduction and Core Principle */}
            <section className="space-y-4">
              <p>
                This Privacy Policy details how SocialDemo AS handles and protects user information collected through our free-to-play social gaming platform. Our commitment is to transparency and strict adherence to data protection laws, particularly GDPR (General Data Protection Regulation).
              </p>
              <p className="font-semibold text-gray-800">
                ⭐ Important Note: SocialDemo exclusively offers free online slots and casino-style games. Since we facilitate no real money gambling or purchases, we never collect financial data.
              </p>
            </section>

            {/* Section 1: Data Collection - Anonymous Focus */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">🧾 1. Non-Personal and Anonymous Data Collection</h2>
              <p>
                We prioritize user privacy by limiting data collection strictly to anonymous, non-identifiable metrics used solely for improving our social gaming experience. This anonymous usage data includes:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Device and browser characteristics (for technical optimization).</li>
                <li>Duration and frequency of platform visits.</li>
                <li>Pages viewed and user flow (for improving game accessibility).</li>
              </ul>
              <p>
                We absolutely do not collect Personally Identifiable Information (PII), such as names, addresses, or email accounts (unless voluntarily provided for direct contact).
              </p>
            </div>

            {/* Section 2: Cookies and Tracking */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">🍪 2. Cookie Usage and Analytics</h2>
              <p>
                We utilize minimal, performance-based cookies to measure site traffic and enhance website stability. These cookies help us:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Analyze website performance (using tools like Google Analytics).</li>
                <li>Ensure smooth functionality of our free online casino games.</li>
              </ul>
              <p>
                You retain full control over cookies and can manage or delete them through your browser settings at any time.
              </p>
            </div>

            {/* Section 3: Data Processing & Security */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">🧠 3. Data Storage, Security, and GDPR</h2>
              <p>
                All data collected is processed and stored in compliance with the GDPR and remains exclusively within the EEA (European Economic Area).
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Data Security: We implement industry-standard security measures (encryption, firewalls) to prevent unauthorized access or loss.</li>
                <li>Data Sharing: We never sell user data. Data is only shared with essential third-party service providers (e.g., cloud hosting) under strict confidentiality agreements necessary for platform operation.</li>
              </ul>
            </div>

            {/* Section 4: User Rights */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">🧑‍⚖️ 4. Your Rights Under the GDPR</h2>
              <p>As a user, you have the right to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Access: Request a copy of any anonymous data we hold about you.</li>
                <li>Rectification/Erasure: Correct inaccurate data or invoke the "right to be forgotten" (data deletion).</li>
                <li>Objection: Object to specific processing activities.</li>
              </ul>
              <p>To exercise any of these rights related to your SocialDemo data, please contact us directly at the email address provided below.</p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">📬 5. Contact Information</h2>
              <p>For questions about this Privacy Policy or our data practices:</p>
              <p>SocialDemo AS</p>
              <p>📧 E-mail: <a href="mailto:meister@gmail.com" className="text-blue-600 underline">meister@gmail.com</a></p>
              <p>📍 Dronning Eufemias gate 16, 0191 Oslo, Norway</p>
              <p>📞 Phone: +47 22 83 70 10</p>
            </div>
          </div>
        </div>
      </div>
      <Prefooter />
    </>
  );
};

export default Privacy;