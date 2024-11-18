"use client";
import { guestsCountAtom } from "@/atoms/addGuests";
import { useAtomValue } from "jotai";

type people = "Adults" | "Children" | "Infants" | "Pets" | string;

export function useGuestAtomValue(people: people) {
  const guest = useAtomValue(guestsCountAtom);

  if (people === "Adults") return guest.Adults;
  if (people === "Children") return guest.Children;
  if (people === "Infants") return guest.Infants;
  if (people === "Pets") return guest.Pets;
}
