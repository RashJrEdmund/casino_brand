import Image from "next/image";
import { APP_ICONS } from "../primitive";
import { type ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface ImageLogoProps extends ComponentProps<"image"> {
  height?: number;
  width?: number;
}

function ImageLogo({ className, height, width }: ImageLogoProps) {
  return (
    <Image
      src={APP_ICONS.logo}
      height={height || 110}
      width={width || 110}
      alt="app logo"
      draggable={false}
      className={cn(className || "")}
    />
  );
};

export {
  ImageLogo,
};
