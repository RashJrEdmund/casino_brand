import { Button } from "@/components/atoms/Button";
import Banner from "./banner/banner";

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <Banner />

      {/* <Button className="w-full md:max-w-[450px] mt-4">
        Play Now!
      </Button> */}
    </div>
  );
}
