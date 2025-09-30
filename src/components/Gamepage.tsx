import Prefooter from "./Prefooter";

export default function Gamepage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center">
      
      {/* Game Title */}
      <div className="text-center mt-8 z-10 relative">
        <h1 className="text-4xl font-bold text-white mb-4">Game Page</h1>
        <p className="text-lg text-white mb-6">Welcome to the game! Play below.</p>
      </div>

      {/* Game iframe full screen */}
      <div className="w-full flex-1">
        <iframe
          id="iframe"
          title="Pragmatic Play Game Fullscreen"
          tabIndex={0}
          frameBorder={0}
          scrolling="no"
          src="https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20swrbon&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD"
          style={{ border: "none", width: "100vw", height: "100vh" }}
        ></iframe>
      </div>

      {/* Prefooter */}
      <div className="w-full">
        <Prefooter />
      </div>
      
    </div>
  );
}
