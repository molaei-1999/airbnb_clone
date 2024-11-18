"use client";
import { Toaster } from "react-hot-toast";

export default function ToasterProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 2500,
        style: {
          background: "#363636",
          color: "#fff",
        },
      }}
    />
  );
}
