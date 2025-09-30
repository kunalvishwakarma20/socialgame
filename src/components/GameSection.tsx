import { Link } from "react-router-dom";

const games = [
  {
    id: 1,
    name: "",
    category: "Slots",
    players: "2.3k",
    icon: "🍓",
    gradient: "from-red-400 to-pink-500",
    image: "https://socialboynu.site/static/media/donuts.d0e2c5abf27d2ce5b2fa.png"
  },
  {
    id: 2,
    name: " ",
    category: "Slots",
    players: "1.8k",
    icon: "🍀",
    gradient: "from-green-400 to-emerald-500",
    image: "https://socialboynu.site/static/media/FooterImage.c235541338f62efbe9a3.png"
  },
  {
    id: 3,
    name: "",
    category: "Slots",
    players: "3.1k",
    icon: "💎",
    gradient: "from-blue-400 to-purple-500",
    image: "https://socialboynu.site/static/media/donuts.d0e2c5abf27d2ce5b2fa.png"
  }
];

export default function GameSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-70 to-white overflow-hidden" style={{backgroundImage:"url('https://socialboynu.site/static/media/bgImage.011a7dce8280424afbc0.011a7dce8280424afbc0.png')"}}>
      {/* Black overlay with 50% opacity */}
      <div className="absolute inset-0 bg-black opacity-95 pointer-events-none"></div>

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 bg-[url('')] pointer-events-none"
        style={{ backgroundSize: '200px 200px' }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            POPULAR SPILL
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Explore our selection of fun casino games – all free to play!
          </p>
        </div>

        {/* Games Grid - Stacked Vertically */}
        <div className="grid grid-cols-1 gap-8 mb-16 max-w-2xl mx-auto">
          {games.map((game) => (
            <div
              key={game.id}
              className="group relative bg-black/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Game Card Background with Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Game Info */}
              <div className="p-6 text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{game.name}</h3>
                <Link
                  to={game.id === 1 ? "/game" : game.id === 2 ? "/game2" : game.id === 3 ? "/game3" : "#"}
                  className="w-full inline-block bg-emerald-400 text-white font-bold py-12 px-6 rounded-full hover:bg-emerald-500 transition-all transform hover:scale-105 text-5xl">
                  Play Free
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
