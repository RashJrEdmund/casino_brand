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
  )
};

export default function TopGames() {
  return (
    <div className="w-full h-fit py-4 lg:pt-21 bg-app-purple-400">
      <div className="w-full max-w-app-dynamic-max-w min-h-app-section-min-w mx-auto grid grid-auto-fill-400 items-start justify-around gap-4">
        <Suspense fallback={<GameCardShimmer />} >
          <GamesCards />
        </Suspense>
      </div>
    </div>
  );
};
