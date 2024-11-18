"use client";
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Skeleton } from "@/components/ui/skeleton";
import LogoutBtn from "./LogoutBtn";
import RegisterBtn from "./RegisterBtn";
import LoginBtn from "./LoginBtn";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useEffect } from "react";
import { showAuthToast } from "@/utils/authNotif";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

type TProps = {
  children: React.ReactNode;
  user: KindeUser<Record<string, any>>;
  authenticated: boolean;
};

export default function KindeLogin({ children, authenticated, user }: TProps) {
  const { isLoading } = useKindeBrowserClient();

  useEffect(() => {
    const loginStatus = localStorage.getItem("loginNotif");
    const registerStatus = localStorage.getItem("registerNotif");
    const logoutStatus = localStorage.getItem("logoutNotif");

    showAuthToast(loginStatus!, authenticated!, "login");
    showAuthToast(logoutStatus!, authenticated!, "logout");
    showAuthToast(registerStatus!, authenticated!, "signing up");

    console.log("isAuthenticated", authenticated);

    setTimeout(() => {
      localStorage.setItem("logoutNotif", "false");
      localStorage.setItem("registerNotif", "false");
      localStorage.setItem("loginNotif", "false");
    }, 3000);
  }, [authenticated]);

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>{children}</MenubarTrigger>
        {isLoading ? (
          <MenubarContent>
            <MenubarItem className="p-2" inset>
              <Skeleton className="w-[150px] h-5" />;
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="p-2" inset>
              <Skeleton className="w-[150px] h-5" />;
            </MenubarItem>
          </MenubarContent>
        ) : (
          <MenubarContent>
            {authenticated ? (
              <>
                <MenubarItem className="p-2" inset>
                  <p>
                    {user?.given_name} {user?.family_name}
                  </p>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem className="p-2" inset>
                  <LogoutBtn />
                </MenubarItem>
              </>
            ) : (
              <>
                <MenubarItem className="p-2" inset>
                  <LoginBtn />
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem className="p-2" inset>
                  <RegisterBtn />
                </MenubarItem>
              </>
            )}
          </MenubarContent>
        )}
      </MenubarMenu>
    </Menubar>
  );
}
