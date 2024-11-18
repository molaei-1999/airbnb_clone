"use client";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

export default function LogoutBtn() {
  const handleLogoutClick = () => {
    localStorage.setItem("logoutNotif", "true");
    localStorage.setItem("registerNotif", "false");
    localStorage.setItem("loginNotif", "false");
  };

  return (
    <LogoutLink>
      <button onClick={handleLogoutClick}>Logging out</button>
    </LogoutLink>
  );
}
