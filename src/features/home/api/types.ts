interface Game {
  id: string;
  title: string;
  stake: string;
  coverImage: string;
};

interface Pricing {
  label: "Basic" | "Standard" | "Premium",
  cost: string;
  term: "per month" | "per year",
  features: string[];
}

interface Testimony {
  id: string;
  profilePic: string,
  name: string;
  favoriteGamer: string;
  expression: string;
  rating: number;
  updatedAt: string;
}

export type {
  Game,
  Pricing,
  Testimony,
};
