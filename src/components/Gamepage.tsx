import Prefooter from "./Prefooter";

export default function Gamepage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      
      {/* Game Title */}
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Game Page</h1>
        <p className="text-lg text-gray-600 mb-6">Welcome to the game! Play below.</p>
      </div>

      {/* Game iframe */}
      <div className="w-full max-w-6xl px-4">
        <iframe
          id="iframe"
          title="Pragmatic Play Game"
          tabIndex={0}
          frameBorder={0}
          scrolling="no"
          src="https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20swrbon&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD"
          style={{ border: "none", width: "100%", height: "600px" }}
        ></iframe>
      </div>

      {/* Prefooter */}
      <div className="w-full mt-12">
        <Prefooter />
      </div>
      
    </div>
  );
}
