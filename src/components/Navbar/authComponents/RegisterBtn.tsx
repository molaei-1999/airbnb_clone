"use client";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function RegisterBtn() {
  const handleRegisterClick = () => {
    localStorage.setItem("registerNotif", "true");

    localStorage.setItem("logoutNotif", "false");
    localStorage.setItem("loginNotif", "false");
  };
  return (
    <RegisterLink>
      <button onClick={handleRegisterClick}>Sign up</button>
    </RegisterLink>
  );
}
