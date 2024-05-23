import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ComponentProps<"button"> {
  //
}

function Button({ className, ...restProps }: ButtonProps) {
  return (
    <button
      {...restProps}
      className={cn("w-fit bg-app-gold-500 text-app-purple-500 px-8 py-4 rounded-full font-bold text-nowrap", className || "")}
    />
  );
};

export type {
  ButtonProps,
};

export {
  Button,
};
