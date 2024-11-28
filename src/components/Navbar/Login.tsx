import webLogo from "@/public/images/webIcon.png";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import avatar from "@/public/images/avatar.png";
import KindeLogin from "./authComponents/KindeLogin";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Login() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  const isUserAuthenticated = await isAuthenticated();

  return (
    <div className="flex justify-center items-center w-fit ms-auto xl:ms-0 lg:space-x-1">
      <p
        className="cursor-pointer transition duration-200 bg-white
        hover:bg-stone-300/25 px-[6px] py-1 text-sm
        rounded-full truncate text-nowrap
        xl:px-5 xl:py-2 xl:text-base"
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
      <KindeLogin user={user} authenticated={isUserAuthenticated}>
        <div
          className="flex justify-center items-center space-x-1
          max-w-fit px-2 py-1 border border-slate-500/35 rounded-full
          transition duration-200 shadow-none hover:shadow-md
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
      </KindeLogin>
    </div>
  );
}
