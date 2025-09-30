import { Link } from "react-router-dom";
import { useState } from "react";

const games = [
  {
    id: 1,
    name: "Frukt Bonanza",
    category: "Slots",
    players: "2.3k",
    icon: "🍓",
    gradient: "from-red-500 to-pink-600",
    image: "/Sweet-Rush-Bonanza_339x180-1.webp",
    features: ["Free Spins", "Bonus Rounds", "High Volatility"]
  },
  {
    id: 2,
    name: "777 Rush",
    category: "Slots",
    players: "1.8k",
    icon: "🍀",
    gradient: "from-green-500 to-emerald-600",
    image: "/777-Rush_667x414_NB-339x180-1.webp",
    features: ["Classic Slots", "Lucky 7s", "Multiplier Wilds"]
  },
  {
    id: 3,
    name: "Bigger Barn House Bonanza",
    category: "Slots",
    players: "3.1k",
    icon: "💎",
    gradient: "from-blue-500 to-purple-600",
    image: "/Bigger-Barn-House-Bonanza_339x18.webp",
    features: ["Progressive Features", "Farm Theme", "Big Wins"]
  }
];

export default function GameSection() {
  const [hoveredGame, setHoveredGame] = useState<number | null>(null);

  return (
    <section 
      className="relative py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
      style={{backgroundImage: "url('https://socialboynu.site/static/media/bgImage.011a7dce8280424afbc0.011a7dce8280424afbc0.png')"}}
    >
      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95 pointer-events-none"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-purple-900/10 to-blue-900/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6 shadow-lg">
            <span className="text-2xl">🎮</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            POPULAR SPILL
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Oppdag vårt utvalg av morsomme kasinospill – alle gratis å spille!
          </p>
          <div className="flex justify-center items-center space-x-4 mt-6">
            <div className="flex items-center space-x-2 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">{games.reduce((acc, game) => acc + parseFloat(game.players), 0)}k+ Spillere Online</span>
            </div>
          </div>
        </div>

        {/* Enhanced Games Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {games.map((game, index) => (
            <div
              key={game.id}
              className="group relative"
              onMouseEnter={() => setHoveredGame(game.id)}
              onMouseLeave={() => setHoveredGame(null)}
            >
              {/* Game Card */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-700 hover:border-purple-500/50 overflow-hidden">
                
                {/* Game Image with Overlay */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={game.image} 
                    alt={game.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  
                  {/* Popular Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      🔥 Popular
                    </span>
                  </div>
                  
                  {/* Players Count */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-sm font-semibold flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>{game.players} online</span>
                    </span>
                  </div>

                  {/* Game Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${game.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                      <span className="text-xl">{game.icon}</span>
                    </div>
                  </div>
                </div>

                {/* Game Content */}
                <div className="p-6">
                  {/* Game Info */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                        {game.name}
                      </h3>
                      <span className="text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
                        {game.category}
                      </span>
                    </div>
                    
                    {/* Game Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {game.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="text-xs text-gray-300 bg-gray-700/50 px-2 py-1 rounded-full border border-gray-600"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Play Button */}
                  <Link
                    to={game.id === 1 ? "/game" : game.id === 2 ? "/game2" : game.id === 3 ? "/game3" : "#"}
                    className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-6 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center group/btn"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span>SPILL GRATIS</span>
                      <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">🎮</span>
                    </div>
                    <div className="text-xs opacity-80 mt-1">
                      INGEN EKTE PENGER NØDVENDIG
                    </div>
                  </Link>
                </div>

                {/* Hover Effect Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${game.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              </div>

              {/* Animated Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${game.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md group-hover:blur-xl -z-10 ${
                hoveredGame === game.id ? 'animate-pulse' : ''
              }`}></div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="text-center">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">🎯 Spill Ansvarlig</h3>
            <p className="text-gray-300 mb-4">
              Alle spill er 100% gratis og kun til underholdning. Ingen ekte penger eller premier.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>18+ Aldersgrense</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Ingen Registrering</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Øyeblikkelig Spilling</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
}