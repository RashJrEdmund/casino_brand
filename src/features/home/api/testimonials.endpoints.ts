import { waitAndResolve } from "@/lib/utils";
import type { Testimony } from "./types";
import { APP_PROFILES } from "@/components/primitive";

const TestimonialDummyData: Testimony[] = [
  {
    id: "1",
    profilePic: APP_PROFILES.aang,
    name: "Avatar Aang",
    favoriteGamer: "Wheel of Fortune",
    expression: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nostrum vero suscipit amet labore eligendi, eaque dolorum delectus deleniti exercitationem!",
    rating: 5,
    updatedAt: "2 hours ago",
  },
  {
    id: "2",
    profilePic: APP_PROFILES.madara,
    name: "Madara Uchiha",
    favoriteGamer: "Poker",
    expression: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nostrum vero suscipit amet labore eligendi, eaque dolorum delectus deleniti exercitationem!",
    rating: 5,
    updatedAt: "7 hours ago",
  }
];

const getTestimonials = (): Promise<Testimony[]> => {
  return waitAndResolve(TestimonialDummyData, 4000);
};

export {
  getTestimonials,
};
