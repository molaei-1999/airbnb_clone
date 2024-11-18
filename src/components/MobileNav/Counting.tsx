"use client";
import { addGuestAtom } from "@/atoms/addGuests";
import { useGuestAtomValue } from "@/lib/useGuestAtom";
import { useSetAtom } from "jotai";
import { GoPlus } from "react-icons/go";
import { HiMiniMinusSmall } from "react-icons/hi2";

type TProps = {
  people: "Adults" | "Children" | "Infants" | "Pets" | string;
};

export default function Counting({ people }: TProps) {
  const guestValue = useGuestAtomValue(people);
  const setGuestValue = useSetAtom(addGuestAtom);

  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        disabled={!guestValue}
        onClick={() => setGuestValue({ guest: people, type: "dec" })}
        className="border border-stone-400 rounded-full p-[6px] bg-none
        disabled:opacity-40 transition duration-200"
      >
        <HiMiniMinusSmall size={17} />
      </button>
      <span className="text-base lg:text-lg">{guestValue}</span>
      <button
        onClick={() => setGuestValue({ guest: people, type: "inc" })}
        className="border border-stone-400 rounded-full p-[6px] bg-none"
      >
        <GoPlus size={17} />
      </button>
    </div>
  );
}
