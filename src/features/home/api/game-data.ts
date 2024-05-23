import type { Game } from "./types";
import { APP_ICONS } from "@/components/primitive";

const DummyGames: Game[] = [
  {
    id: "game-one",
    title: "Wheel of Fortune",
    stake: "$1,000",
    coverImage: APP_ICONS.wheelOfFortune,
  },
  {
    id: "game-two",
    title: "Slot Machine",
    stake: "$500",
    coverImage: APP_ICONS.slotMachine,
  },
  {
    id: "game-three",
    title: "Jackpot Wheel Of Fortune",
    stake: "$2,000",
    coverImage: APP_ICONS.jackpotWheelOfFortune,
  },
  {
    id: "game-four",
    title: "Poker",
    stake: "$2,000",
    coverImage: APP_ICONS.poker1,
  },
  {
    id: "game-five",
    title: "Dice Role",
    stake: "$1,500",
    coverImage: APP_ICONS.dice1,
  },
  {
    id: "game-six",
    title: "Pool",
    stake: "$1,500",
    coverImage: APP_ICONS.pool1,
  },
  {
    id: "game-seven",
    title: "Poker",
    stake: "$2,000",
    coverImage: APP_ICONS.poker1,
  },
  {
    id: "game-eight",
    title: "Dice Role",
    stake: "$1,500",
    coverImage: APP_ICONS.dice2,
  },
];

const getTopGames = (): Game[] => {
  return DummyGames;
};

export {
  getTopGames,
};
