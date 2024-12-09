"use client"
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import OrganizationSidebarComponent from "@/components/organization/sidebar/OrganizationSidebarComponent";
import SessionWrapper from "@/components/SessionWrapper";

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

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  const showSidebar = pathname.startsWith("/organization-dashboard/");

  return (
    <html lang="en" className="h-full w-full">
      <body className={`${siemreap.variable} ${inter.variable} flex flex-col h-full w-full`}>
      <SessionWrapper>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="w-full z-50 bg-iDonate-white-space">
            <NavbarComponent />
          </nav>

          {showSidebar ? (
            <section className="w-full flex flex-grow bg-transparent h-[calc(100vh-72px)]">
              <OrganizationSidebarComponent />
              <main className="overflow-y-auto scrollbar-hide w-full">
                {children}
              </main>
            </section>
          ) : (
            <section className="w-full flex flex-grow bg-transparent h-[calc(100vh-72px)]">
              <main className="w-full overflow-auto scrollbar-hide ">{children}</main>
            </section>
          )}
        </ThemeProvider>
          </SessionWrapper>
      </body>
    </html>
  );
}
