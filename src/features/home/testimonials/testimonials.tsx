import { getTestimonials } from "../api/testimonials.endpoints";
import { Testimonial, TestimonialShimmer } from "./testimonial";
import { Suspense } from "react";

async function LoadTestimonials() {
  const testimonials = await getTestimonials();

  return (
    <>
      {
        testimonials.map((testimony) => (
          <Testimonial key={testimony.id} testimony={testimony} />
        ))
      }
    </>
  );
}

export default async function Testimonials() {

  return (
    <div className="w-full h-fit py-8 pb-16 mt-8 bg-app-purple-400">
      <div className="w-full max-w-app-dynamic-max-w min-h-app-section-min-w mx-auto flex flex-col items-center gap-8">
        <div className="w-full text-center">
          <h2 className="font-extrabold text-3xl md:text-5xl">
            What <span className="text-app-gold-500">Casino Gamer Players</span> Say
          </h2>

          <p className="md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique adipisci repellat tempore unde voluptatem quisquam!</p>
        </div>

        <div className="w-full flex flex-wrap items-start justify-evenly gap-4 mt-8">
          <Suspense fallback={<TestimonialShimmer />}>
            <LoadTestimonials />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
