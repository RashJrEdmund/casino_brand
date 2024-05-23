import { ImageLogo } from "@/components/atoms/ImgLogo";
import Link from "next/link";
import { NavLinks } from "./nav-links";

export default function Navbar() {
  return (
    <nav className="fixed  z-10 top-0 left-0 w-full bg-app-purple-500">
      <div className="flex justify-between w-full max-w-app-dynamic-max-w mx-auto py-4 md:py-6">
        <Link href="/">
          <ImageLogo />
        </Link>

        <NavLinks />
      </div>
    </nav>
  );
}
