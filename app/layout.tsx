"use client"
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import OrganizationSidebarComponent from "@/components/organization/sidebar/OrganizationSidebarComponent";
import SessionWrapper from "@/components/SessionWrapper";
import FooterComponent from "@/components/footer/FooterComopent"

const siemreap = localFont({
  src: "/fonts/Siemreap-Regular.ttf",
  variable: "--font-siemreap",
  display: "swap",
  preload: true,
  fallback: ["serif"],
});

const inter = localFont({
  src: "/fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  display: "swap",
  preload: true,
  variable: "--font-inter",
  fallback: ["serif"],
});

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  const showSidebar = pathname.startsWith("/organization-dashboard/");

  return (
    <html lang="en" className={`h-full w-full ${siemreap.variable} ${inter.variable}`}>
      <body className="flex flex-col min-h-screen bg-background text-foreground">
        <SessionWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen">
              <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <NavbarComponent />
              </header>

              <div className="flex-grow overflow-y-auto">
                {showSidebar && (
                  <aside className="w-64 flex-shrink-0 hidden md:block">
                    <OrganizationSidebarComponent />
                  </aside>
                )}
                <main>
                  {children}
                </main>
              </div>

              <footer className="bg-iDonate-white-space">
                <FooterComponent />
              </footer>
            </div>
          </ThemeProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}

