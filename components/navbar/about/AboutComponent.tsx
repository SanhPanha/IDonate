"use client"
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navMenuType } from "@/difinitions/types/NavMenuType";
import { Button } from "@/components/ui/button";
import { AboutMenulist } from "./AboutMenu";

export default function AboutComponent() {
    const [menuList] = useState<navMenuType[]>(AboutMenulist);
    const pathname = usePathname();

    const navActiveClass = (isActive: boolean) =>
        `w-[210px] h-[62px] font-normal bg-iDonate-white-space hover:bg-iDonate-light-gray justify-start px-6 py-4 ${
            isActive ? "text-iDonate-green-primary" : "text-iDonate-navy-primary"
        }`;

    return (
        <section className="flex flex-row">
         
                {menuList.map((item, index) => {
                    const isActive = pathname === item.path;

                    return (
                        <div key={index} className="flex flex-row items-center space-x-1 ">
                            {item?.children ? (
                                <div className=" flex flex-row items-center">
                                    <Button className={`${navActiveClass(isActive)} text-lg`}>
                                        {item.title}
                                    </Button>
                                </div>
                            ) : (
                                <Link href={item.path} passHref>
                                    <div className="flex flex-row items-center ">
                                        <Button className={`${navActiveClass(isActive)} text-lg`}>
                                            {item.title}
                                        </Button>
                                    </div>
                                </Link>
                            )}
                        </div>
                    );
                })}

        </section>
    );
}