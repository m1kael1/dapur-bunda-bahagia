"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LayoutDashboardIcon, ListOrdered, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = ({ children }) => {
  const pathname = usePathname();
  const menu = {
    style: {
      default:
        "w-full flex items-center gap-2 p-2 rounded-md justify-start bg-transparent text-foreground",
      active: "bg-foreground text-background",
      hover: "hover:bg-foreground hover:text-background",
    },
    list: [
      {
        name: "Dashboard",
        href: "/dashboard",
        icons: <LayoutDashboardIcon size={20} />,
      },
      {
        name: "Orders",
        href: "/dashboard/orders",
        icons: <ListOrdered size={20} />,
      },
    ],
  };

  return (
    <section className='flex'>
      <aside className='max-w-48 border-2 min-h-screen p-4 flex flex-col justify-between'>
        <h2 className='text-3xl text-center'>DBB</h2>
        <br />
        <div className='flex-grow flex flex-col gap-2'>
          {menu.list.map((item) => (
            <Link href={item.href} key={item.name}>
              <Button
                className={cn(
                  menu.style.default,
                  menu.style.hover,
                  pathname === item.href ? menu.style.active : ""
                )}
              >
                <span>{item.icons}</span> {item.name}
              </Button>
            </Link>
          ))}
        </div>
        {/* <Button
          variant='destructive'
          className='w-full flex justify-center gap-2 self-end'
        >
          <LogOut size={20} /> Logout
        </Button> */}
      </aside>

      {children}
    </section>
  );
};

export default SideBar;
