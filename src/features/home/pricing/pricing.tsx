import type { Pricing } from "../api/types";
import { SinglePrice } from "./single-price";

const features = [
  "Up to 10 players per game",
  "Customizable game timer",
  "Editable Score averaging",
  "Printable results Page",
];

const PriceTiers: Pricing[] = [
  {
    label: "Basic",
    cost: "$ 25.00",
    term: "per month",
    features,
  },
  {
    label: "Standard",
    cost: "$ 45.00",
    term: "per month",
    features,
  },
  {
    label: "Premium",
    cost: "$ 50.00",
    term: "per month",
    features,
  }
];

export default function Pricing() {
  return (
    <div id="pricing" className="w-full h-fit py-8 pb-16 mt-16 bg-app-purple-500">
      <div className="w-full max-w-app-dynamic-max-w min-h-app-section-min-h mx-auto flex flex-col items-center gap-8">
        <div className="w-full text-center">
          <h2 className="font-extrabold text-3xl md:text-5xl">
            Our <span className="text-app-gold-500">Pricing</span>
          </h2>

          <p className="md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique adipisci repellat tempore unde voluptatem quisquam!</p>
        </div>

        <div className="w-full flex flex-wrap items-start justify-evenly gap-4 gap-y-8 mt-8">
          {
            PriceTiers.map((price) => (
              <SinglePrice
                key={price.label}
                price={price}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};
