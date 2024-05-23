import { Button } from "@/components/atoms/Button";
import { type Game } from "../api/types";
import "./game-card.css";

interface Props {
  game: Game;
}

function GameCardShimmer() {
  return (
    <>
      {
        Array.from({ length: 6 }, (_, i) => i).map((num) => (
          <div key={num} className="w-full max-w-[350px] h-[min(65vh,_400px)] rounded-2xl bg-[#cfc6c69f] mx-auto animate-pulse" />
        ))
      }
    </>
  );
}

function GameCard({ game }: Props) {
  return (
    <div
      className="game-card"
      style={{
        backgroundImage: `URL(${game.coverImage})`
      }}
    >
      <div className="game-card__text-container">
        <h4>{game.title}</h4>

        <p className="text-app-gold-500">{game.stake}</p>

        <Button className="text-white px-14">
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
