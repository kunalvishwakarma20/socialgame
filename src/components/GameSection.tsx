import { Link } from "react-router-dom";

const games = [
  {
    id: 1,
    name: "Frukt Bonanza",
    category: "Slots",
    players: "2.3k",
    icon: "🍓",
    gradient: "from-red-400 to-pink-500",
    image: "/Sweet-Rush-Bonanza_339x180-1.webp"
  },
  {
    id: 2,
    name: "777 Rush ",
    category: "Slots",
    players: "1.8k",
    icon: "🍀",
    gradient: "from-green-400 to-emerald-500",
    image: "/777-Rush_667x414_NB-339x180-1.webp"
  },
  {
    id: 3,
    name: "Bigger Barn House Bonanza",
    category: "Slots",
    players: "3.1k",
    icon: "💎",
    gradient: "from-blue-400 to-purple-500",
    image: "/Bigger-Barn-House-Bonanza_339x18.webp"
  }
];

export default function GameSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 bg-[url('/cubes.png')] pointer-events-none"
        style={{ backgroundSize: '200px 200px' }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            POPULAR SPILL
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our selection of fun casino games – all free to play!
          </p>
        </div>

        {/* Games Grid - Stacked Vertically */}
        <div className="grid grid-cols-1 gap-8 mb-16 max-w-2xl mx-auto">
          {games.map((game) => (
            <div
              key={game.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Game Card Background with Image */}
              <div className="relative overflow-hidden ">
                <img 
                  src={game.image} 
                  alt={game.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Game Info */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{game.name}</h3>
                <Link
                  to={game.id === 1 ? "/game" : game.id === 2 ? "/game2" : game.id === 3 ? "/game3" : "#"}
                  className="w-full inline-block bg-green-500 text-white font-bold py-3 rounded-xl hover:bg-green-600 transition-all transform hover:scale-105"
                >
                  SPILL GRATIS, INGEN EKTE PENGER NØDVENDIG
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
