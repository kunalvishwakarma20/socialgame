import React from 'react';

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ 
        backgroundImage: "url('https://cdn.leonardo.ai/users/4a6b6ec0-ba43-41ce-a8bd-46b891811dcb/generations/2114e80d-644b-419d-997a-5b0efc4a54fc/segments/4:4:1/Lucid_Origin_createa_an_imahge_same_like_this_with_differnet_c_3.jpg')" 
      }}
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-4">
          #1 SOCIAL
        </h1>
        <h2 className="text-6xl md:text-8xl font-black text-white mb-8">
          CASINO
        </h2>

        {/* Call to Action */}
        <p className="text-2xl md:text-3xl font-bold text-white mb-8">
          READY TO PLAY – COMPLETELY FREE AND JUST FOR FUN!
        </p>

        <a
          href="https://www.playngo.com/games"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-800 transition-all transform hover:scale-105 shadow-2xl"
        >
          Play Now
        </a>
      </div>
    </section>
  );
}
