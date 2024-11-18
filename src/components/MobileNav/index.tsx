"use client";
import { FiSearch } from "react-icons/fi";
import PopupMenu from "./PopupMenu";
import { popupAtom } from "@/atoms/showPopupAtom";
import { useAtom } from "jotai";
import { AnimatePresence } from "framer-motion";
import { MouseEvent } from "react";

export default function MobileNav() {
  const [show, setShow] = useAtom(popupAtom);

  const handleClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    const target = e.target as HTMLElement;
    const isTargetElm = target.getAttribute("data-close");
    const targetElmParent = target.parentElement?.getAttribute("data-close");

    if (isTargetElm === "closePopup" || isTargetElm === "closePopupIcon") {
      setShow(false);
    } else if (targetElmParent === "closePopupIcon") {
      setShow(false);
    } else {
      setShow( true);
    }
  };

  return (
    <div
      onClick={(event) => handleClick(event)}
      className="md:hidden flex items-center justify-start space-x-3
        border border-stone-400/25 rounded-full shadow-md px-4 py-2 overflow-hidden"
    >
      <FiSearch size={22} />
      <div>
        <p className="font-semibold text-[14px]">Where to?</p>
        <div
          className="flex items-center justify-start space-x-2 text-[13px]
            truncate text-nowrap"
        >
          <span>Anywhere &#x2022;</span>
          <span>Any week &#x2022;</span>
          <span>Add guests</span>
        </div>
      </div>
      <AnimatePresence mode="wait">{show && <PopupMenu />}</AnimatePresence>
    </div>
  );
}
