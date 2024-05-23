import { Button } from "@/components/atoms/Button";
import type { Pricing } from "../api/types";

function SinglePrice({ price }: { price: Pricing }) {
  const { label, cost, term, features } = price;

  return (
    <div
      key={label}
      className="flex flex-col items-center justify-between w-full max-w-[365px] h-fit min-h-[min(60vh,_500px)] py-8 px-2 rounded-2xl bg-app-purple-400 border border-app-gold-500 transition-transform hover:scale-[1.04]"
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

      <Button className="text-white w-[70%] mt-10">
        Purchase Now
      </Button>
    </div>
  );
}

export {
  SinglePrice,
};
