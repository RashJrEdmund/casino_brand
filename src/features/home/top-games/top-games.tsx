import { Suspense } from "react";
import { getTopGames } from "../api/games.endpoints";
import { GameCard, GameCardShimmer } from "./game-card";

async function GamesCards() {
  const TopGames = await getTopGames();

  return (
    <>
      {
        TopGames?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))
      }
    </>
  );
};

export default function TopGames() {
  return (
    <div id="games" className="w-full h-fit py-4 lg:pt-21 bg-app-purple-400">
      <div className="w-full max-w-app-dynamic-max-w min-h-app-section-min-h mx-auto flex flex-col items-center gap-8">
        <div className="w-full text-center">
          <h2 className="font-extrabold text-3xl md:text-5xl">
            Top Awesome <span className="text-app-gold-500">Casino</span> Games
          </h2>

          <p className="md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique adipisci repellat tempore unde voluptatem quisquam!</p>
        </div>

        <div className="w-full grid grid-auto-fill-400 items-start justify-around gap-4">
          <Suspense fallback={<GameCardShimmer />} >
            <GamesCards />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
