import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnyWeek from "./AnyWeek";
import { IoSearchOutline } from "react-icons/io5";
import AddGuests from "./AddGuests";
import ClearAllBtn from "./ClearAllBtn";
import { MdOutlineClose } from "react-icons/md";

export default function PopupMenu() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, type: "tween" }}
      className="w-screen h-[90vh] overflow-y-auto
      fixed top-0 right-0 bg-[#f7f7f7] z-40 px-5 py-3"
    >
      {/* header */}
      <div className="flex items-center justify-center mb-2 mt-1">
        <div
          data-close="closePopup"
          className="p-2 border me-auto bg-white border-stone-400 rounded-full"
        >
          <MdOutlineClose data-close="closePopupIcon" size={18} />
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col justify-between">
        <Accordion type="single" collapsible className="w-full">
          {/*  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ delay: 0.05 }}
          >
            <AccordionItem
              className="bg-white rounded-xl shadow-sm py-1 px-4 "
              value="item-1"
            >
              <AccordionTrigger
                aria-hidden="true"
                className="flex justify-between items-center"
              >
                <span>Where</span>
                <span>I'm flexible</span>
              </AccordionTrigger>
              <AccordionContent className="px-2">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          {/*  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ delay: 0.1 }}
          >
            <AccordionItem
              className="bg-white rounded-xl shadow-sm py-1 px-4 mt-2"
              value="item-2"
            >
              <AccordionTrigger
                aria-hidden="true"
                className="flex justify-between items-center"
              >
                <span>When</span>
                <span>Add dates</span>
              </AccordionTrigger>
              <AccordionContent className="px-2">
                <p className="font-semibold text-xl mt-1 mb-2">
                  When's your trip?
                </p>
                <AnyWeek />
              </AccordionContent>
            </AccordionItem>
          </motion.div>

          {/*  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ delay: 0.15 }}
          >
            <AccordionItem
              className="bg-white rounded-xl shadow-sm py-1 px-4 mt-2"
              value="item-3"
            >
              <AccordionTrigger
                aria-hidden="true"
                className="flex justify-between items-center"
              >
                <span>When</span>
                <span>Add dates</span>
              </AccordionTrigger>
              <AccordionContent className="px-2">
                <p className="font-semibold text-xl mt-1 mb-2">Who's coming?</p>
                <AddGuests />
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          {/*  */}
        </Accordion>
      </div>
      {/*  */}
      <div className="fixed w-screen px-5 right-0 bottom-0 z-50 bg-[#f7f7f7] pt-5 pb-3">
        <div className="flex items-center justify-between">
          <ClearAllBtn />
          <button
            className="bg-[#e51d54] rounded-xl text-white px-3 py-1
              flex items-center justify-center space-x-1"
          >
            <IoSearchOutline size={20} />
            <span>Search</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
