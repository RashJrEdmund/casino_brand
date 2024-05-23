"use client"; // making component a client component so as to use browser and react hooks to track navigation, and update the display state of the nav list and also toggle nav bar open or close

import { APP_ICONS } from "@/components/primitive";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Routes = ["Home", "About", "Games", "Pricing", "Testimonials"] as const; // so I can also use to perfectly create another type

type Route = typeof Routes[number];

function NavLinks() {
  const NavBarList = Routes.map((list) => (
    {
      href: "#" + list.toLowerCase(),
      text: list,
    }
  ));

  const [activeRoute, setActiveRoute] = useState<Route>("Home");
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const handleRoute = (route: Route) => {
    setActiveRoute(route);
    setIsNavOpen(false);

    if (typeof Storage === "undefined") return;

    window.sessionStorage.setItem("current_route", route);
  };

  useEffect(() => {
    if (typeof Storage === "undefined") return;

    const currentRoute = window.sessionStorage.getItem("current_route");

    if (!currentRoute) {
      setActiveRoute("Home");
    }
  }, []);

  return (
    <>
      {isNavOpen ? (
        <div className="overlay" onClick={() => setIsNavOpen(false)} />
      ) : null}

      <ul className={`nav-container__nav-links ${isNavOpen ? "__nav-links--active" : ""}`}>
        {
          NavBarList.map(({ href, text }) => (
            <li
              key={text}
              className={`nav-link ${activeRoute === text ? "nav-link--active" : ""}`}
            >
              <Link
                href={href}
                onClick={() => handleRoute(text)}
                className="link"
              >
                {text}
              </Link>
            </li>
          ))
        }
      </ul>

      <Image
        src={isNavOpen ? APP_ICONS.close : APP_ICONS.menu}
        width={40}
        height={40}
        alt="menu icon"
        className="sm:hidden font-bold cursor-pointer"
        onClick={() => setIsNavOpen((prev) => !prev)}
      />
    </>
  );
}

export {
  NavLinks
};
