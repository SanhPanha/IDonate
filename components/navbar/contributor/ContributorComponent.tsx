"use client"
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ContributorMenulist } from "./ContributorMenu";
import { ContributorMenuType } from "@/difinitions/types/ContributorMenuType";

export default function ContributorComponent() {
    const [menuList] = useState<ContributorMenuType[]>(ContributorMenulist);
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
                                <div className=" flex flex-row items-center ">
                                    <Button className={`${navActiveClass(isActive)} text-lg`}>
                                        <item.icon style={{ width: '1.5rem', height: '1.5rem' }} fill="iDonate" />
                                        {item.title}                 
                                    </Button>
                                </div>
                            ) : (
                                <Link href={item.path} passHref>
                                    <div className="flex flex-row items-center space-x-1">
                                        <Button className={`${navActiveClass(isActive)}  text-lg `}>
                                            <item.icon style={{ width: '1.5rem', height: '1.5rem' }} />
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