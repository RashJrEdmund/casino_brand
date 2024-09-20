import "./nav-bar.css";
import { ImageLogo } from "@/components/atoms/ImgLogo";
import Link from "next/link";
import { NavLinks } from "./nav-links";

export default function Navbar() {
  return (
    <nav className="nav-bar fixed">
      <div className="nav-bar__container">
        <Link href="/">
          <ImageLogo />
        </Link>

        <NavLinks />
      </div>
    </nav>
  );
}
