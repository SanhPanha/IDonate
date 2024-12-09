import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import SessionWrapper from "@/components/SessionWrapper";
import { Provider } from "react-redux";
import makeStore from "@/store/store";

const siemreap = localFont({
  src: "/fonts/Siemreap-Regular.ttf",
  variable: "--font-siemreap",
  fallback: ["serif"]
});

const inter = localFont({
  src: "/fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter", 
  fallback: ["serif"]
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${siemreap.variable} ${inter.variable}`}
      >
        <SessionWrapper>
          <section className="flex-grow overflow-auto none-scroll-bar text-lms-black-90">
            {children}
          </section>
        </SessionWrapper>
      </body>
    </html>
  );
}
