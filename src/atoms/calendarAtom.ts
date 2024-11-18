"use client";
import { addDays } from "date-fns";
import { atom } from "jotai";
import { DateRange } from "react-day-picker";

export const calendarDateAtom = atom<DateRange | undefined>({
  from: new Date(),
  to: addDays(new Date(), 0),
});