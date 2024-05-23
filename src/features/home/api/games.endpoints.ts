import { waitAndResolve } from "@/lib/utils";
import type { Game } from "./types";
import { APP_ICONS } from "@/components/primitive";

const DummyGames: Game[] = [
  {
    id: 'game-one',
    title: 'Wheel of Fortune',
    stake: '$1,000',
    coverImage: APP_ICONS.wheelOfFortune,
  },
  {
    id: 'game-two',
    title: 'dice role',
    stake: '$500',
    coverImage: APP_ICONS.dice,
  },
  {
    id: 'game-three',
    title: 'Slot Gam',
    stake: '$2,000',
    coverImage: APP_ICONS.dice,
  },
  {
    id: 'game-four',
    title: 'Slot Gam',
    stake: '$2,000',
    coverImage: APP_ICONS.dice,
  },
  {
    id: 'game-five',
    title: 'Slot Gam',
    stake: '$1,500',
    coverImage: APP_ICONS.dice,
  }
];

const getTopGames = (): Promise<Game[]> => {
  return waitAndResolve<Game[]>(DummyGames, 4000);
};

export {
  getTopGames,
};
