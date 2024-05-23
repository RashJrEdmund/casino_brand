import { Button } from "@/components/atoms/Button";
import { APP_ICONS } from "@/components/primitive";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full h-fit py-4 lg:pt-21 bg-app-purple-500">
      <div className="w-full max-w-app-dynamic-max-w min-h-app-section-min-w mx-auto flex items-start justify-around gap-4">
        <div className="w-full">
          <h2 className="font-extrabold text-3xl md:text-5xl leading-8 md:leading-[4.5rem] pb-6">
            About our <span className="text-app-gold-500">Casino brand</span>
          </h2>

          <p className="lg:font-semibold leading-6 lg:leading-10 text-xl max-w-[900px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eveniet quaerat dolorum pariatur quia quos aspernatur nihil vitae. Optio tempora, esse inventore consectetur animi laudantium eos? Totam provident possimus dolores quos id, itaque eius odio cumque in quod! Consectetur ducimus autem quo expedita quas, consequuntur animi placeat aliquid rerum voluptatibus.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptates at, deserunt delectus fuga autem dignissimos numquam odit aspernatur officia?
          </p>

          <Button className="w-full md:max-w-[450px] mt-8 text-white">
            Join Us Now
          </Button>
        </div>

        <div className="hidden lg:inline-block w-full max-w-[500px] shrink">
          <Image
            src={APP_ICONS.wheelOfFortune}
            width={600}
            height={600}
            alt="wheel of fortune image"
            className="w-full max-w-app-dynamic-max-w"
          />
        </div>
      </div>
    </div>
  );
}
