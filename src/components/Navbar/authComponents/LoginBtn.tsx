"use client";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function LoginBtn() {
  const handleLoginClick = () => {
    localStorage.setItem("loginNotif", "true");

    localStorage.setItem("logoutNotif", "false");
    localStorage.setItem("registerNotif", "false");
  };

  return (
    <LoginLink>
      <button onClick={handleLoginClick}>Login</button>
    </LoginLink>
  );
}
