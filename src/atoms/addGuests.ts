import { atom } from "jotai";

type actionType = {
  type: "inc" | "dec";
  guest: string;
};

export const guestsCountAtom = atom({
  Adults: 0,
  Children: 0,
  Infants: 0,
  Pets: 0,
});

export const addGuestAtom = atom(null, (_, set, action: actionType) => {
  if (action.guest === "Adults") {
    if (action.type === "inc") {
      set(guestsCountAtom, (prev) => {
        return {
          ...prev,
          Adults: prev.Adults + 1,
        };
      });
    } else {
      set(guestsCountAtom, (prev) => {
        return {
          ...prev,
          Adults: prev.Adults - 1,
        };
      });
    }
  }
  if (action.guest === "Children") {
    if (action.type === "inc") {
      set(guestsCountAtom, (prev) => {
        return {
          ...prev,
          Children: prev.Children + 1,
        };
      });
    } else {
      set(guestsCountAtom, (prev) => {
        return {
          ...prev,
          Children: prev.Children - 1,
        };
      });
    }
  }
  if (action.guest === "Infants") {
    if (action.type === "inc") {
      set(guestsCountAtom, (prev) => {
        return {
          ...prev,
          Infants: prev.Infants + 1,
        };
      });
    } else {
      set(guestsCountAtom, (prev) => {
        return {
          ...prev,
          Infants: prev.Infants - 1,
        };
      });
    }
  }
  if (action.guest === "Pets") {
    if (action.type === "inc") {
      set(guestsCountAtom, (prev) => {
        return {
          ...prev,
          Pets: prev.Pets + 1,
        };
      });
    } else {
      set(guestsCountAtom, (prev) => {
        return {
          ...prev,
          Pets: prev.Pets - 1,
        };
      });
    }
  }
});
