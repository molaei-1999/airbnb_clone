import { IoMdSearch } from "react-icons/io";
import AnyWeekCalender from "./AnyWeekCalender";
import AddGuestsComp from "./AddGuestsComp";

export default function Search() {
  return (
    <ul
      className="flex justify-center items-center text-[14px]
        border border-slate-500/35 truncate text-nowrap rounded-full py-1
        max-w-fit px-1 hover:shadow-md transition duration-200 
        md:ms-[-1rem] lg:ms-[2rem] lg:py-1 lg:px-[6px] lg:text-base xl:ms-[14rem]"
    >
      <li className="capitalize cursor-pointer border-r px-3 border-stone-400 lg:px-5">
        anywhere
      </li>
      <li className="capitalize cursor-pointer border-r px-3 border-stone-400 lg:px-5">
        <AnyWeekCalender />
      </li>
      <AddGuestsComp>
        <li className="capitalize cursor-pointer flex items-center justify-center px-3 lg:px-5">
          add guests
          <div className="bg-[#FF385C] lg:ms-3 p-1 ms-2 rounded-full w-fit hidden lg:block">
            <IoMdSearch size={22} color="white" />
          </div>
        </li>
      </AddGuestsComp>
    </ul>
  );
}
