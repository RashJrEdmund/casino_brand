import { getTopGames } from "../api/game-data";
import { GameCard } from "./game-card";

export default function TopGames() {
  const TopGames = getTopGames();

  return (
    <div id="games" className="w-full h-fit py-4 lg:pt-21 bg-app-purple-400">
      <div className="w-full max-w-app-dynamic-max-w min-h-app-section-min-h mx-auto flex flex-col items-center gap-8">
        <div className="w-full text-center">
          <h2 className="font-extrabold text-3xl md:text-5xl">
            Top Awesome <span className="text-app-gold-500">Casino</span> Games
          </h2>

          <p className="md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique adipisci repellat tempore unde voluptatem quisquam!</p>
        </div>

        <div className="w-full flex flex-col sm:grid sm:grid-auto-fill-350 xl:grid-auto-fill-370 gap-y-8 items-center justify-center gap-4">
          {
            TopGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))
          }
        </div>
      </div>
    </div>
  );
};
