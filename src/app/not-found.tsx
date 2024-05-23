import { Button } from "@/components/atoms/Button";
import { APP_ICONS } from "@/components/primitive";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full min-h-[80vh] flex flex-col items-center justify-center gap-4">
      <Image
        src={APP_ICONS.wheelOfFortune}
        width={500}
        height={500}
        alt="wheel of fortune image"
      />
      <h2 className="font-semibold">Page not found</h2>

      <Button>
        <Link href="/">
          go home
        </Link>
      </Button>
    </main>
  )
};
