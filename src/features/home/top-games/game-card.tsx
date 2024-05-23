import { Button } from "@/components/atoms/Button";
import { type Game } from "../api/types";

interface Props {
  game: Game;
}

function GameCardShimmer() {
  return (
    <>
      {
        Array.from({ length: 6 }, (_, i) => i).map((num) => (
          <div key={num} className="w-full max-w-[350px] h-[min(50vh,_400px)] rounded-2xl bg-[#cfc6c69f] mx-auto animate-pulse" />
        ))
      }
    </>
  )
}

function GameCard({ game }: Props) {
  return (
    <div
      className="flex items-end justify-center w-full max-w-[350px] h-[min(50vh,_400px)] rounded-2xl bg-center mx-auto bg-cover border border-app-gold-500"
      style={{
        backgroundImage: `linear-gradient(135deg, #35082b7c, #35082b7c), URL(${game.coverImage})`
      }}
    >
      <div className="flex flex-col items-center justify-center gap-4 mb-14">
        <h4>{game.title}</h4>

        <p className="text-app-gold-500">{game.stake}</p>

        <Button className="text-white">
          Pay Now
        </Button>
      </div>
    </div>
  );
};

export {
  GameCardShimmer,
  GameCard,
};
