import { ImageLogo } from "@/components/atoms/ImgLogo";
import Link from "next/link";

export default function Navbar() {
  const NavBarList = ["Home", "About", "Games", "Testimonials"].map((list) => ({
    href: "/" + (list === "Home" ? "" : list).toLowerCase(),
    text: list,
  }));

  return (
    <nav className="fixed  z-10 top-0 left-0 w-full bg-app-purple-500">
      <div className="flex justify-between w-full max-w-app-dynamic-max-w mx-auto py-4 md:py-6">
        <ImageLogo />

        <ul className="w-full items-center justify-end gap-4 hidden sm:flex">
          {
            NavBarList.map(({ href, text }) => (
              <li key={text} className="font-semibold text-xl">
                <Link href={href} className="w-full">
                  {text}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  );
}
