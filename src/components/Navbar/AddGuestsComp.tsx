import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import React from "react";
import Counting from "../MobileNav/Counting";

const guestsList = [
  { id: 1, age: "Ages 13 or above", who: "Adults" },
  { id: 2, age: "Ages 2 - 12", who: "Children" },
  { id: 3, age: "Under 2", who: "Infants" },
  { id: 4, age: "Bringing a service animal", who: "Pets" },
];

const CustomAddGuest = () => {
  return (
    <>
      {guestsList.map((guest) => {
        return (
          <div
            key={guest.id}
            className={`flex items-center justify-between mt-4 pb-2
            ${guest.id !== 4 && "border-b border-stone-400/50 pb-5"}`}
          >
            {/*  */}
            <div className="me-10">
              <p className="font-semibold mb-[2px] text-base">{guest.who}</p>
              <p className="font-light text-stone-700 text-[14px]">
                {guest.age}
              </p>
            </div>
            {/*  */}
            <Counting people={guest.who} />
            {/*  */}
          </div>
        );
      })}
    </>
  );
};

export default function AddGuestsComp({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>{children}</MenubarTrigger>
        <MenubarContent className="px-5 py-3">
          <CustomAddGuest />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
