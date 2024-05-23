import { Button } from "@/components/atoms/Button";
import { ImageLogo } from "@/components/atoms/ImgLogo";

export default function Footer() {
  return (
    <footer className="bg-app-purple-500 w-full h-fit">
      <div className="md:min-h-[min(400px,_40vh)] w-full max-w-app-dynamic-max-w py-8 mx-auto flex flex-wrap md:flex-nowrap items-start justify-between gap-4">
        <div className="w-full flex items-start justify-around gap-4">
          <div>
            <ImageLogo className="mb-4" />

            <p className="max-w-[400px] break-all text-center sm:text-left sm:font-semibold text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti atque accusantium blanditiis quibusdam molestias natus ipsum odit, sed praesentium facilis.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-8 items-center justify-start">
          <h2 className="font-semibold sm:text-xl">Subscribe to our newsletter</h2>

          <form className="w-full max-w-[400px] rounded-2xl border border-app-gold-500 flex flex-nowrap">
            <input
              placeholder="Enter Your Email Address"
              className="w-full border-0 bg-transparent p-2 md:p4 py-4 md:py-5 outline-none rounded-[inherit]"
            />

            <Button className="rounded-[inherit] px-5">Subscribe</Button>
          </form>
        </div>
      </div>

      <hr className="w-full max-w-app-dynamic-max-w border-app-gold-500 mx-auto my-4" />

      <div className="w-full max-w-app-dynamic-max-w mx-auto pt-2 pb-4 flex items-center justify-between">

        <h2 className="text-app-gold-500 font-semibold text-xl">Casino brand</h2>

        <ul className="flex flex-nowrap items-center gap-4">
          {
            ["Security", "Terms", "Privacy"].map((list) => (
              <li key={list}>
                {list}
              </li>
            ))
          }
        </ul>

      </div>
    </footer>
  );
};
