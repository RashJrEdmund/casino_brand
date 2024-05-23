import Image from "next/image";
import type { Testimony } from "../api/types";
import { APP_ICONS } from "@/components/primitive";

function TestimonialShimmer() {
  return (
    <>
      {
        Array.from({ length: 2 }, (_, i) => i).map((num) => (
          <div key={num} className="w-full sm:min-w-[360px] max-w-[600px] flex flex-col gap-4 items-start justify-center  py-10 px-8 rounded-xl bg-[#cfc6c69f] mx-auto animate-pulse">

            <div className="w-full flex items-center justify-start gap-4">
              <div
                className="rounded-full object-cover object-center w-[100px] h-[100px] bg-[#cfc6c6bd]"
              />

              <div className="w-[85%]  bg-[#cfc6c6bd] p-8" />
            </div>

            <div
              className="w-full h-[100px] bg-[#cfc6c6bd]"
            />
          </div>
        ))
      }
    </>
  );
}

function Testimonial({ testimony }: { testimony: Testimony }) {
  const { name, profilePic, favoriteGamer, expression, rating, updatedAt } = testimony;

  return (
    <div className="w-full sm:min-w-[360px] max-w-[600px] flex flex-col gap-4 items-start justify-center bg-app-purple-200 border border-app-gold-500 py-10 px-8 rounded-xl">
      <div className="w-full flex items-center justify-start gap-8">
        <Image
          src={profilePic}
          height={100}
          width={100}
          alt={"Profile photo of " + name}
          className="rounded-full border object-cover object-center max-w-[60px] sm:w-[100px] max-h-[60px] sm:h-[100px]"
        />

        <div>
          <p className="font-semibold sm:text-xl">
            {name}
          </p>

          <p className="font-light sm:font-[unset]">
            loves playing <span className="text-app-gold-500 sm:font-semibold">{favoriteGamer}</span>
          </p>
        </div>
      </div>

      <p className="sm:font-semibold sm:text-xl">
        {expression}
      </p>

      <hr className="w-full border-app-gold-500" />

      <div className="w-full flex items-center justify-between">
        <div className="w-full flex items-center justify-start gap-2">
          {
            Array.from({ length: rating }, (_, i) => i).map((r) => (
              <span key={r}>
                {APP_ICONS.star}
              </span>
            ))
          }
        </div>

        <span className="font-light sm:font-semibold sm:text-xl text-nowrap">
          {updatedAt}
        </span>
      </div>
    </div>
  );
}

export {
  TestimonialShimmer,
  Testimonial,
};
