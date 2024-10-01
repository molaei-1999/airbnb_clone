"use client";
import { FiSearch } from "react-icons/fi";
import PopupMenu from "./PopupMenu";
import { popupAtom } from "@/atoms/showPopupAtom";
import { useAtom } from "jotai";
import { AnimatePresence } from "framer-motion";
import { MouseEvent } from "react";

export default function MobileNav() {
  let [show, setShow] = useAtom(popupAtom);

  let handleClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    let target = e.target as HTMLElement;
    let isTargetElm = target.getAttribute("data-close");
    let targetElmParent = target.parentElement?.getAttribute("data-close");

    if (isTargetElm === "closePopup" || isTargetElm === "closePopupIcon") {
      setShow((prev) => (prev = false));
    } else if (targetElmParent === "closePopupIcon") {
      setShow((prev) => (prev = false));
    } else {
      setShow((prev) => (prev = true));
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
