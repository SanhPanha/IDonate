"use client";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import OrganizationSidebarComponent from "@/components/organization/sidebar/OrganizationSidebarComponent";
import SessionWrapper from "@/components/SessionWrapper";
import FooterComponent from "@/components/footer/FooterComopent";

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
            {/* Navbar */}
            <nav className="w-full z-50 bg-iDonate-white-space">
              <NavbarComponent />
            </nav>

            {/* Main Content with Sidebar or Full Width */}
            <div className="flex flex-grow flex-col">
              {showSidebar ? (
                <section className="flex flex-grow h-[calc(100vh-72px)]">
                  <OrganizationSidebarComponent />
                  <main className="overflow-y-auto scrollbar-hide flex-grow">
                    {children}
                  </main>
                </section>
              ) : (
                <main className="flex-grow overflow-y-auto scrollbar-hide">
                  {children}
                </main>
              )}
            </div>

            {/* Footer */}
            <footer className=" bg-transparent w-full mt-12">
              <FooterComponent />
            </footer>
          </ThemeProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
