"use client";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { OrganizationSidebarMenuList } from "./OrganizationSidebarMenu";
import { SubNavbarMenuType } from "@/difinitions/types/components-type/SubNavbarMenuType";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarGroupLabel } from "@/components/ui/sidebar";


export default function OrganizationSidebarComponent() {
  const [menuList] = useState<SubNavbarMenuType[]>(OrganizationSidebarMenuList);
  const pathname = usePathname();

  const navActiveClass = (isActive: boolean) =>
    `w-[210px] h-[62px] font-normal bg-transparent flex hover:bg-iDonate-light-gray justify-start px-6 py-4 ${
      isActive ? "text-iDonate-green-primary" : "text-iDonate-navy-primary"
    }`;

  return (
    <aside className="flex">

      {/* <Sidebar className="border-r-8 border-iDonate-navy-accent px-6">

          <SidebarGroupLabel className=" text-sm text-iDonate-gray">Organization</SidebarGroupLabel>

          
        <SidebarGroupContent className="flex flex-col gap-y-3">
        {menuList.map((item, index) => {
            const isActive = pathname === item.path;

            return (
            <Fragment key={index}>
                <SidebarMenu className="flex flex-col space-y-4">
                {item.children ? (
                    <SidebarMenuItem className="flex flex-col space-y-4">
                    <SidebarMenuButton className={`${navActiveClass(isActive)} text-lg`}>
                        {item.icon && (
                        <item.icon style={{ width: "1.5rem", height: "1.5rem" }} />
                        )}
                        <span>{item.title}</span>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
                ) : (
                    <SidebarMenuItem className="flex flex-col space-y-4">
                    <Link href={item.path} passHref>
                        <SidebarMenuButton className={`${navActiveClass(isActive)} text-lg`}>
                        {item.icon && (
                            <item.icon style={{ width: "1.5rem", height: "1.5rem" }} />
                        )}
                        <span>{item.title}</span>
                        </SidebarMenuButton>
                    </Link>
                    </SidebarMenuItem>
                )}
                </SidebarMenu>

                {index === menuList.length - 3 && (
                    <SidebarMenuButton className="hover:bg-transparent cursor-default ">
                        <Separator />
                    </SidebarMenuButton>
                )}
            </Fragment>
            );
        })}
        </SidebarGroupContent>

      </Sidebar> */}

      <section className="flex flex-col border-r-2 border-iDonate-navy-accent px-6 gap-y-3 py-4">

       <SidebarGroupLabel className=" text-sm text-iDonate-gray">Organization</SidebarGroupLabel>
        {menuList.map((item, index) => {
          const isActive = pathname === item.path;

          return (
            <Fragment key={index}>
               <section>
              {item.path && !item.active ? (
                <div className="flex flex-col space-y-4">
                    <Button className={`${navActiveClass(isActive)} text-lg`}>
                      <Link
                          key={index}
                          href={item.path}
                          className="flex"
                        >
                          {item.icon && (
                            <item.icon
                              style={{
                                width: "1.5rem",
                                height: "1.5rem",
                                marginRight: "0.5rem",
                              }}
                            />
                          )}
                        {item.title}
                      </Link>
                  </Button>
                </div>
              ) : (
                <Button
                  key={index}
                  // className="hover:bg-transparent cursor-default "
                  className={`${navActiveClass(isActive)} text-lg `}
                >
                  {item.icon && (
                    <item.icon
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        marginRight: "0.5rem",
                      }}
                    />
                  )}
                  {item.title}
                </Button>
              )}
           </section>

           {index === menuList.length - 3 && (<Separator className="m-2"/>)}
            </Fragment>
          )
        })}
      </section>
    </aside>
  );
}
