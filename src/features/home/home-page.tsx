import Banner from "./banner/banner";
import About from "./about/about";
import TopGames from "./top-games/top-games";
import Pricing from "./pricing/pricing";
import Testimonials from "./testimonials/testimonials";
export function HomePage() {
  return (
    <main id="home" className="w-full h-fit min-h-screen flex flex-col items-center justify-start">
      <Banner />

      <About />

      <TopGames />

      <Pricing />

      <Testimonials />
    </main>
  );
}
