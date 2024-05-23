import { getTestimonials } from "../api/testimonial-data";
import { Testimonial } from "./testimonial";

export default async function Testimonials() {
  const testimonials = getTestimonials();

  return (
    <div id="testimonials" className="w-full h-fit py-8 pb-16 mt-8 bg-app-purple-400">
      <div className="w-full max-w-app-dynamic-max-w min-h-app-section-min-h mx-auto flex flex-col items-center gap-8">
        <div className="w-full text-center">
          <h2 className="font-extrabold text-3xl md:text-5xl">
            What <span className="text-app-gold-500">Casino Game Players</span> Say
          </h2>

          <p className="md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique adipisci repellat tempore unde voluptatem quisquam!</p>
        </div>

        <div className="w-full flex flex-wrap items-start justify-evenly gap-4 gap-y-8  mt-8">
          {
            testimonials.map((testimony) => (
              <Testimonial key={testimony.id} testimony={testimony} />
            ))
          }
        </div>
      </div>
    </div>
  );
};
