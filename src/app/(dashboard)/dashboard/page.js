'use client'

import { cn } from '@/lib/utils'
import { LayoutDashboardIcon, ListOrdered } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { list } from 'postcss'
import React from 'react'

const DashboardPage = () => {
  const pathname = usePathname()
  const menu = {
    style: {
      default: 'rounded-lg p-2',
      active: 'bg-foreground text-background',
      hover: 'hover:bg-foreground hover:text-background'
    },
    list: [
      {
        name: 'Dashboard',
        href: '/dashboard',
        icons: <LayoutDashboardIcon />
      },
      {
        name: 'Orders',
        href: '/dashboard/orders',
        icons: <ListOrdered />
      },
    ]
  }

  return (
    <aside className='max-w-48 border-2 min-h-screen p-4'>
      <h2 className='text-3xl text-center'>DBB</h2>
      <br />
      <ul className='flex flex-col gap-2'>
        {
          menu.list.map(item => (
            <li className={cn(
              menu.style.default,
              menu.style.hover,
              pathname === item.href ? menu.style.active : '')}
              key={item.href}>
              <Link className='flex items-center gap-2 p-1 font-semibold' href={item.href}>
                <span>{item.icons}</span> {item.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </aside>
  )
}

export default DashboardPage