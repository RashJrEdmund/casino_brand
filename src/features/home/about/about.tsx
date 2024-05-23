import { Button } from "@/components/atoms/Button";
import { SPINNING_WHEEL } from "@/components/primitive";
import Image from "next/image";

export default function About() {
  return (
    <div id="about" className="w-full h-fit py-4 lg:pt-21 bg-app-purple-500">
      <div className="w-full max-w-app-dynamic-max-w min-h-app-section-min-h mx-auto flex items-start justify-around gap-4">
        <div className="hidden lg:inline-block w-full max-w-[500px] shrink relative">
          <Image
            src={SPINNING_WHEEL.pointer}
            alt="spinning wheel pointer"
            width={20}
            height={20}
            className="bg-god absolute top-0 left-1/2 z-[5] translate-x-[-50%]"
          />

          <Image
            src={SPINNING_WHEEL.wheel}
            width={600}
            height={600}
            alt="wheel of fortune image"
            className="w-full max-w-app-dynamic-max-w animate-spin-300"
          />
        </div>

        <div className="w-full flex flex-col items-center justify-start">
          <h2 className="font-extrabold text-center mx-auto lg:mx-0 text-3xl md:text-5xl leading-8 md:leading-[4.5rem] pb-6">
            About our <span className="text-app-gold-500">Casino brand</span>
          </h2>

          <p className="leading-6 lg:leading-10 lg:text-xl max-w-[900px] break-all">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eveniet quaerat dolorum pariatur quia quos aspernatur nihil vitae. Optio tempora, esse inventore consectetur animi laudantium eos? Totam provident possimus dolores quos id, itaque eius odio cumque in quod! Consectetur ducimus autem quo expedita quas, consequuntur animi placeat aliquid rerum voluptatibus.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptates at, deserunt delectus fuga autem dignissimos numquam odit aspernatur officia?
          </p>

          <Button className="w-full mx-auto lg:mx-0 md:max-w-[450px] mt-8 text-white">
            Join Us Now
          </Button>
        </div>
      </div>
    </div>
  );
}
