import Image from "next/image";
import Link from "next/link";
import airbnbLogo from "@/public/images/logo.png";
import airbnbArmLogo from "@/public/images/airbnbArmLogo.png";

export default function Logo() {
  return (
    <>
      <Link className="lg:inline-block hidden" href={"/"}>
        <Image
          alt="airbnb Logo"
          src={airbnbLogo}
          width={100}
          height={5}
          className="h-7"
        />
      </Link>
      <Link className="inline-block lg:hidden" href={"/"}>
        <Image
          alt="airbnb Logo"
          src={airbnbArmLogo}
          width={100}
          height={5}
          className="h-7 w-24"
        />
      </Link>
    </>
  );
}
