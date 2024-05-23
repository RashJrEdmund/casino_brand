import { type ClassValue, clsx } from "clsx"; // clsx mainly remove the spacings and joins css, and can also take objects
import { twMerge } from "tailwind-merge"; // using twMerge to resolve any conflicting styles.

function cn(...inputs: ClassValue[]) { // cn for class names
  return twMerge(clsx(inputs));
};

// simple function to simulate search
function waitAndResolve<T>(data: T, time = 500) {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, time);
  });
}

export {
  cn,
  waitAndResolve,
}
