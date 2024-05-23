"use client"; // making component a client component so as to use browser and react hooks to track navigation, and update the display state of the nav list

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

  const handleRoute = (route: Route) => {
    setActiveRoute(route);

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
    <ul className="w-full items-center justify-end gap-4 hidden sm:flex">
      {
        NavBarList.map(({ href, text }) => (
          <li key={text} className="font-semibold text-xl  p-0">
            <Link
              href={href}
              onClick={() => handleRoute(text)}
              className={`w-full m-0 p-0 ${activeRoute === text ? "text-app-gold-500" : ""}`}
            >
              {text}
            </Link>
          </li>
        ))
      }
    </ul>
  );
}

export {
  NavLinks
};
