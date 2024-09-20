import { Button } from "@/components/atoms/Button";
import { APP_ICONS } from "@/components/primitive";
import Image from "next/image";
import Link from "next/link";

function MoreCTA() {
  return (
    <div className="lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2 flex flex-wrap lg:flex-nowrap items-center justify-around gap-4 w-full max-w-[min(1300px,_95vw)] mx-auto mt-4">
      {
        [1, 2, 3].map((n) => (
          <div key={n} className="w-full md:w-[350px] flex text-center justify-around gap-2 bg-app-purple-500 px-3 py-2 rounded-2xl shadow-lg cursor-pointer">
            <Image
              width={100}
              height={100}
              alt="action photo"
              src={APP_ICONS.wheelOfFortune}
            />
            <div className="w-full flex flex-col items-start text-left">
              <h3 className="font-bold text-xl">
                Lorem, ipsum dolor.
              </h3>

              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolores.
              </p>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default function Banner() {
  return (
    <div className="lg:relative w-full h-fit pt-20 mt-8 pb-21">
      <div className="w-full max-w-app-dynamic-max-w mx-auto lg:py-4 flex flex-col-reverse md:flex-row items-center justify-around">
        <div className="w-full h-full min-h-app-section-min-h flex basis-auto flex-col justify-start gap-8 md:gap-4">
          <h1 className="font-extrabold text-center md:text-left text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-8 sm:leading-[3rem] md:leading-[4.5rem] lg:leading-[7rem] xl:leading-[7rem] max-w-[900px]">
            Win Unlimited Money By Playing Online Casino Games
          </h1>

          <p className="md:text-xl text-center md:text-left ">
            play casino and earn cash, all online, on this platform (the ultimate casino platform)
          </p>

          <Link href="#games" className="w-full md:max-w-[450px] my-8 md:mt-4">
            <Button className="w-full animate-pulse">
              Play Now!
            </Button>
          </Link>
        </div>

        <div className="w-full max-w-[650px] shrink">
          <Image
            src={APP_ICONS.bannerThumb}
            width={500}
            height={500}
            alt="wheel of fortune image"
            className="w-full max-w-app-dynamic-max-w"
          />
        </div>
      </div>

      <MoreCTA />
    </div>
  );
}
