import { Button } from "@/components/atoms/Button";
import type { Pricing } from "../api/types";

const features = [
  "Up to 10 players per game",
  "Customizable game timer",
  "Editable Score averaging",
  "Printable results Page",
]

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
]


export default function Pricing() {
  return (
    <div className="w-full h-fit py-8 pb-16 mt-16 bg-app-purple-500">
      <div className="w-full max-w-app-dynamic-max-w min-h-app-section-min-w mx-auto flex flex-col items-center gap-8">
        <div className="w-full text-center">
          <h2 className="font-extrabold text-3xl md:text-5xl">
            Our <span className="text-app-gold-500">Pricing</span>
          </h2>

          <p className="md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique adipisci repellat tempore unde voluptatem quisquam!</p>
        </div>

        <div className="w-full flex flex-wrap items-start justify-evenly gap-4 mt-8">
          {
            PriceTiers.map(({ label, cost, term, features }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-between w-full max-w-[350px] h-fit min-h-[min(60vh,_500px)] py-8 px-2 rounded-2xl bg-app-purple-400 border border-app-gold-500 transition-transform hover:scale-[1.04]"
              >
                <div className="w-[80%] flex flex-col gap-4 items-center justify-center">
                  <div className="bg-app-purple-500 w-full flex flex-col items-center justify-center text-center gap-4 p-6 rounded-2xl font-extrabold text-3xl">
                    <h4>{label}</h4>

                    <p className="text-app-gold-500">
                      {cost} <br />
                      <span className="font-semibold text-lg">{term}</span>
                    </p>
                  </div>

                  <p className="break-all leading-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cum accusantium voluptatem iusto sit maiores.
                  </p>

                  {
                    features.map(feat => (
                      <>
                        <hr className="w-full border-app-gold-500" />

                        <p key={feat}>{feat}</p>
                      </>
                    ))
                  }

                </div>
                {/* {JSON.stringify(tier)} */}
                <Button className="text-white w-[70%] mt-10">
                  Purchase Now
                </Button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
