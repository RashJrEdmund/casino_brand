import { Button } from "@/components/atoms/Button";
import { APP_ICONS } from "@/components/primitive";
import Image from "next/image";

function MoreCTA() {
  return (
    <div className="lg:absolute bottom-0 left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2 flex flex-wrap lg:flex-nowrap items-center justify-around gap-4 w-full max-w-[min(1224px,_97vw)] mt-8 mx-auto">
      {
        [1, 2, 3].map((n) => (
          <div key={n} className="w-full md:w-[350px] flex text-center justify-around gap-2 bg-app-purple-500 px-3 py-2 rounded-2xl">
            <Image
              width={100}
              height={100}
              alt="action photo"
              src={APP_ICONS.wheelOfFortune}
            />

            <div className="w-full flex flex-col items-start text-left">
              <h3 className="font-bold text-xl">
                Sign Up First & Login
              </h3>

              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolores.
              </p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default function Banner() {
  return (
    <div className="relative w-full h-fit pt-20 mt-4 pb-20">
      <div className="w-full max-w-app-dynamic-max-w mx-auto flex items-center justify-around">
        <div className="w-full h-full min-h-[40vh] flex basis-auto flex-col justify-start gap-8 md:gap-4">
          <h1 className="font-extrabold text-xl sm:text-3xl md:text-5xl lg:text-7xl leading-8 sm:leading-[3rem] md:leading-[4.5rem] lg:leading-[7rem] xl:leading-[7rem] max-w-[900px]">
            Win Unlimited Money By Playing Online Casino Games
          </h1>

          <p className="md:text-xl">
            play casino and earn cash, all online, on this platform (the ultimate casino platform)
          </p>

          <Button className="w-full md:max-w-[450px] mt-4 animate-pulse">
            Play Now!
          </Button>
        </div>

        <div className="w-full max-w-[650px] shrink hidden md:inline">
          <Image
            src={APP_ICONS.wheelOfFortune}
            width={500}
            height={500}
            alt="wheel of fortune image"
            className="w-full max-w-app-dynamic-max-w"
          />
        </div>
      </div>

      <MoreCTA />
    </div>
  )
}