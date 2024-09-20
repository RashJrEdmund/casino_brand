import { Button } from "@/components/atoms/Button";
import { type Game } from "../api/types";
import Link from "next/link";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <div
      className="group relative w-full max-w-[min(365px,_90vw)] min-h-[min(65vh,_400px)] flex flex-col items-center justify-end mx-auto rounded-2xl bg-center bg-cover first-of-type:bg-contain bg-no-repeat bg-app-purple-500 border border-transparent transition duration-300 hover:border-app-gold-500 before:content-[''] before:absolute before:top-0 before:left-0 before:rounded-[inherit] before:w-full before:h-full before:bg-transparent hover:before:bg-game-card-grad"
      style={{
        backgroundImage: `URL(${game.coverImage})`
      }}
    >
      <div className="flex flex-col items-center justify-center gap-2 mb-14 opacity-0 transition duration-300 text-center group-hover:opacity-100 z-[5]">
        <h4 className="font-semibold text-[2rem]">
          {game.title}
        </h4>

        <p className="text-app-gold-500 font-semibold text-[1.3rem] mb-4">
          {game.stake}
        </p>

        <Link href="#pricing" className="w-fit">
          <Button className="text-white px-14">
            Pay Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export {
  GameCard,
};
