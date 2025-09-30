import React from "react";
import { Link } from "react-router-dom";
import Midsection from "./Midsection";

const Prefooter: React.FC = () => {
  // Links for right-side menu
  const links = [
    { href: "/terms", text: "Terms of Service", icon: "📄" },
    { href: "/responsible", text: "Responsible Social Gaming", icon: "🎯" },
    { href: "/privacy", text: "Privacy Policy", icon: "🔒" },
    { href: "/contact", text: "Contact Us", icon: "📞" },
    { href: "/disclaimer", text: "Disclaimer", icon: "⚠️" },
    { href: "/about", text: "About Us", icon: "🏢" }
  ];

  return (
    <>
      <Midsection/>
      <section className="bg-black text-white py-16 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Left Side - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Ensuring All Players Are Responsible
                </h2>
                <div className="flex items-center gap-4">
                  <Link
                    to="/responsible"
                    className="bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 font-bold py-3 px-8 rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    GO TO RESPONSIBLE SOCIAL GAMING
                  </Link>
                  <div className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md">
                    18+
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Learn more on our dedicated Responsible Social Gaming page. This is a free social casino focused on entertainment. No real money is involved, and it is not possible to win cash prizes.
              </p>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Disclaimer:
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>The website is developed exclusively for free entertainment purposes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>All games on the site are self-developed and created solely for entertainment.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Games are intended for individuals aged 18 and above.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Our social casino games do not involve real money and provide no opportunity to win cash prizes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Progress in games is not an indicator of skill in real-money gambling.</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-gray-700">
                  <p className="text-gray-300 text-center font-medium">
                    We encourage responsible gaming and emphasize that the games on SocialDemo are intended solely for entertainment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Links */}
          <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800 h-fit">
            <h3 className="text-xl font-bold text-white mb-6">Important Links</h3>
            <div className="space-y-4">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="flex items-center gap-3 text-gray-300 hover:text-amber-500 transition-all duration-300 group py-2 px-3 rounded-lg hover:bg-gray-800"
                >
                  <span className="text-lg">{link.icon}</span>
                  <span className="font-medium group-hover:translate-x-1 transition-transform">
                    {link.text}
                  </span>
                </Link>
              ))}
            </div>

            {/* Additional Info Box */}
            <div className="mt-8 p-4 bg-gray-800 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white">Need Help?</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Contact our customer support team if you have questions about responsible gaming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Prefooter;
