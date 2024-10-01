"use client";
import React from "react";

type TProps = {
  children: React.ReactNode;
};

export default function MotionProvider({ children }: TProps) {
  return <>{children}</>;
}
