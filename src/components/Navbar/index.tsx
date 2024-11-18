import MobileNav from "../MobileNav";
import Login from "./Login";
import Logo from "./Logo";
import Search from "./Search";

export default function Navbar() {
  return (
    <div className="px-5 mt-3 select-none">
      <div
        className="hidden md:flex justify-start items-center
        xl:justify-between"
      >
        <Logo />
        <Search />
        <Login />
      </div>
      <MobileNav />
    </div>
  );
}
