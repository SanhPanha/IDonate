"use client";
import React, { useState } from "react";
import { NavMenulist } from "@/components/navbar/NavbarMenu";
import Link from "next/link";
import {  Search } from "lucide-react";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { navMenuType } from "@/difinitions/types/NavMenuType";
import EventComponent from "./event/EventComponent";
import ContributorComponent from "./contributor/ContributorComponent";
import AboutComponent from "./about/AboutComponent";
import { Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from "../ui/menubar";

export default function NavbarComponent() {
    const [menuList] = useState<navMenuType[]>(NavMenulist);
    const pathname = usePathname();
    const router = useRouter();

    const navActiveClass = (isActive: boolean) =>
        `text-description-eng font-normal ${
            isActive ? "text-iDonate-green-primary" : "text-iDonate-navy-primary"
        }`;


    return (
        <nav className="w-full h-[72px] flex items-center justify-between shadow-md z-10 sticky top-0 px-[100px]">
            {/* Logo and Name */}
            <section
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => router.push("/")}
            >
                 <div className="w-10 h-10 bg-iDonate-green-primary rounded-full"></div>
                <span className="text-title-eng">iDonate</span>
            </section>

            {/* Navigation Menu */}
            <Menubar className="border-0 flex space-x-4">
                {menuList.map((item, index) => {
                    const isActive = pathname === item.path;
                    const specialPaths = ["/how-it-works", "/search"];

                    return (
                        <MenubarMenu key={index}>
                            {specialPaths.includes(item.path) ? (
                           
                                <Link href={item.path} passHref>
                                    <div className="flex items-center space-x-1 py-1 px-3 rounded-lg hover:bg-iDonate-light-gray">
                                        {item.path === "/search" && (
                                            <Search
                                                className={`w-5 h-5 mx-1 ${navActiveClass(isActive)}`}
                                            />
                                        )}
                                        <span className={navActiveClass(isActive)}>{item.title}</span>
                                    </div>
                                </Link>
                        ) : (
                            <section>
                                <MenubarTrigger className="flex items-center px-3 py-1 rounded-lg hover:bg-iDonate-light-gray">
                                    <span className={navActiveClass(isActive)}>{item.title}</span>
                                </MenubarTrigger>

                                <MenubarContent className="p-4 bg-iDonate-white-space rounded-lg shadow-lg">
                                    {item.title === "Events" && (
                                            <EventComponent />
                                    )}
                                    {item.title === "Contributors" && (
                                            <ContributorComponent />
                                    )}
                                    {item.title === "About" && (
                                            <AboutComponent />
                                    )}
                                </MenubarContent>
                            </section>
                        )}

                        </MenubarMenu>
                    );
                })}
            </Menubar>

            {/* Sign In & Donate */}
            <section className="flex items-center space-x-4">
                <span className="text-description-eng font-normal text-iDonate-navy-primary">
                    Sign In
                </span>
                <Button className="bg-iDonate-white-space border-2 border-iDonate-navy-primary text-medium-eng hover:bg-iDonate-white-space hover:text-iDonate-navy-primary hover:border-iDonate-navy-primary">
                    Donate Now
                </Button>
            </section>
        </nav>
    );
}