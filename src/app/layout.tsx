import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/providers/ToasterProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Airbnb clone for resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-10
        md:scroll-px-16 lg:px-16 xl:px-20 py-3`}
      >
        <ToasterProvider />
        <nav>
          <Navbar />
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
