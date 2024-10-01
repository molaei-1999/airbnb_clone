import webLogo from "@/public/images/webIcon.png";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import avatar from "@/public/images/avatar.png";

export default function Login() {
  return (
    <div className="flex justify-center items-center w-fit ms-auto xl:ms-0 lg:space-x-1">
      <p
        className="cursor-pointer transition duration-200 bg-white
        hover:bg-stone-300/25 px-2 py-1 text-[14px]
        rounded-full truncate text-nowrap
        lg:px-5 lg:py-2 lg:text-base"
      >
        Airbnb your home
      </p>
      <div
        className="w-fit lg:p-3 p-2 lg:me-2 me-1 rounded-full
          transition duration-200 bg-white hover:bg-stone-300/25"
      >
        <Image
          alt="web logo navbar"
          src={webLogo}
          height={100}
          width={100}
          className="h-[20px] w-[20px] lg:h-[22px] lg:w-[22px] cursor-pointer"
        />
      </div>
      <div
        className="flex justify-center items-center space-x-1
          max-w-fit px-2 py-1 border border-slate-500/35 rounded-full
          transition duration-[0.2s] shadow-none hover:shadow-md
          lg:px-3 lg:py-2"
      >
        <MdMenu size={21} />
        <Image
          alt="user avatar navbar"
          src={avatar}
          height={100}
          width={100}
          className="h-6 w-6 lg:h-7 lg:w-7"
        />
      </div>
    </div>
  );
}
