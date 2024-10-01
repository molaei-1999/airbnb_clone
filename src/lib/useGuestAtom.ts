"use client";

import { guestsCountAtom } from "@/atoms/addGuests";
import { useAtomValue, useSetAtom } from "jotai";

type people = "Adults" | "Children" | "Infants" | "Pets" | string;

export function useGuestAtom(people: people) {
  if (people === "Adults") {
    let Adults = useAtomValue(guestsCountAtom);
    let setter = useSetAtom(guestsCountAtom);

    let increaseFn = () => {
      setter((prev) => {
        return {
          ...prev,
          Adults: prev.Adults + 1,
        };
      });
    };
    let decreaseFn = () => {
      setter((prev) => {
        return {
          ...prev,
          Adults: prev.Adults - 1,
        };
      });
    };

    return { Adults: Adults.Adults, increaseFn, decreaseFn };
  }
  if (people === "Children") {
    let Children = useAtomValue(guestsCountAtom);
    let setter = useSetAtom(guestsCountAtom);

    let increaseFn = () => {
      setter((prev) => {
        return {
          ...prev,
          Children: prev.Children + 1,
        };
      });
    };
    let decreaseFn = () => {
      setter((prev) => {
        return {
          ...prev,
          Children: prev.Children - 1,
        };
      });
    };

    return { Children: Children.Children, increaseFn, decreaseFn };
  }
  if (people === "Infants") {
    let Infants = useAtomValue(guestsCountAtom);
    let setter = useSetAtom(guestsCountAtom);

    let increaseFn = () => {
      setter((prev) => {
        return {
          ...prev,
          Infants: prev.Infants + 1,
        };
      });
    };
    let decreaseFn = () => {
      setter((prev) => {
        return {
          ...prev,
          Infants: prev.Infants - 1,
        };
      });
    };

    return { Infants: Infants.Infants, increaseFn, decreaseFn };
  }
  if (people === "Pets") {
    let Pets = useAtomValue(guestsCountAtom);
    let setter = useSetAtom(guestsCountAtom);

    let increaseFn = () => {
      setter((prev) => {
        return {
          ...prev,
          Pets: prev.Pets + 1,
        };
      });
    };
    let decreaseFn = () => {
      setter((prev) => {
        return {
          ...prev,
          Pets: prev.Pets - 1,
        };
      });
    };

    return { Pets: Pets.Pets, increaseFn, decreaseFn };
  }
}
