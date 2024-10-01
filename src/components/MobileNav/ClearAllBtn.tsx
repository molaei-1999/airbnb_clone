"use client";
import { useSetAtom } from "jotai";
import { guestsCountAtom } from "@/atoms/addGuests";
import { calendarDateAtom } from "@/atoms/calendarAtom";
import { addDays } from "date-fns";

export default function ClearAllBtn() {
  let clearValues = useSetAtom(guestsCountAtom);
  let clearCalendarDate = useSetAtom(calendarDateAtom);

  let handleClick = () => {
    clearValues({
      Adults: 0,
      Children: 0,
      Infants: 0,
      Pets: 0,
    });
    clearCalendarDate({
      from: new Date(),
      to: addDays(new Date(), 0),
    });
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="font-semibold underline bg-none border-0"
      >
        Clear all
      </button>
    </>
  );
}
