"use client";
import { DateRange } from "react-day-picker";
import CustomCalendar from "./CustomCalendar";
import { useAtom } from "jotai";
import { calendarDateAtom } from "@/atoms/calendarAtom";

export default function AnyWeek() {
  const [date, setDate] = useAtom<DateRange | undefined>(calendarDateAtom);

  return (
    <>
      <CustomCalendar
        initialFocus
        mode="range"
        defaultMonth={date?.from}
        selected={date}
        onSelect={setDate}
        numberOfMonths={1}
      />
    </>
  );
}
