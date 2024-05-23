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
    rating: 4,
    updatedAt: "7 hours ago",
  },
  {
    id: "3",
    profilePic: APP_PROFILES.tanjiro,
    name: "Tanjiro",
    favoriteGamer: "Poker",
    expression: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nostrum vero suscipit amet labore eligendi, eaque dolorum delectus deleniti exercitationem!",
    rating: 5,
    updatedAt: "17 hours ago",
  },
  {
    id: "4",
    profilePic: APP_PROFILES.levi,
    name: "Levi Ackerman",
    favoriteGamer: "Wheel of fortune",
    expression: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nostrum vero suscipit amet labore eligendi, eaque dolorum delectus deleniti exercitationem!",
    rating: 5,
    updatedAt: "1 day ago",
  }
];

const getTestimonials = (): Promise<Testimony[]> => {
  return waitAndResolve(TestimonialDummyData, 3000); // intensionally setting load time to 3 seconds to show schema
};

export {
  getTestimonials,
};
