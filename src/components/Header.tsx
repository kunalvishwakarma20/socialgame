import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="relative z-10">
      {/* Info Banner */}
      <div className="bg-yellow-400 px-4 py-2 text-center text-sm text-gray-900">
        <span className="mr-2">🔞</span>
        SocialDemo is a free social casino platform. We do not collect payments, bets, or financial information, and we do not offer gambling or the chance to win real money.
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo Text */}
            <Link to="/" className="text-2xl font-bold text-gray-900">SocialDemo</Link>

            {/* Right: Play Now Button */}
            <Link
              to="/game"
              className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Play Now</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
