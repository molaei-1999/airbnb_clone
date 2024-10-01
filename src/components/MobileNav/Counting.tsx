"use client";

import { useGuestAtom } from "@/lib/useGuestAtom";
import { GoPlus } from "react-icons/go";
import { HiMiniMinusSmall } from "react-icons/hi2";

type TProps = {
  people: "Adults" | "Children" | "Infants" | "Pets" | string;
};

export default function Counting({ people }: TProps) {
  let guest = useGuestAtom(people);
  let targetGuest = Object.values(guest!)[0];

  let handleCounting = (type: "inc" | "dec") => {
    if (type === "inc") guest?.increaseFn();
    if (type === "dec") guest?.decreaseFn();
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        disabled={!targetGuest}
        onClick={() => handleCounting("dec")}
        className="border border-stone-400 rounded-full p-[6px] bg-none
        disabled:opacity-40 transition duration-200"
      >
        <HiMiniMinusSmall size={17} />
      </button>
      <span className="text-base lg:text-lg">{Object.values(guest!)[0]}</span>
      <button
        onClick={() => handleCounting("inc")}
        className="border border-stone-400 rounded-full p-[6px] bg-none"
      >
        <GoPlus size={17} />
      </button>
    </div>
  );
}
