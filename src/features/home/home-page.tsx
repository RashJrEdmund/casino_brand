import { Button } from "@/components/atoms/Button";
import Banner from "./banner/banner";
import About from "./about/about";
import TopGames from "./top-games/top-games";

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <Banner />

      <About />

      <TopGames />

      {/* <Button className="w-full md:max-w-[450px] mt-4">
        Play Now!
      </Button> */}
    </div>
  );
}
