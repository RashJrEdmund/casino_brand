import { APP_ICONS } from "@/components/primitive";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-24">
      
      <Image
        src={APP_ICONS.wheelOfFortune}
        width={500}
        height={500}
        alt="wheel of fortune image"
      />

      <Button className="text-app-purple-500 mt-4 bg-app-gold-500">
        hello world
      </Button>
    </div>
  );
}
