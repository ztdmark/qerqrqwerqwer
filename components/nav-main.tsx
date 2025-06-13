"use client"

import { MailIcon, PlusCircleIcon, type LucideIcon } from "lucide-react"

import { Button } from '@/components/ui/button'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
  }[]
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className={
                isMobile
                  ? "min-w-8 bg-[hsl(217.2_91.2%_59.8%)] text-[hsl(240_5.9%_10%)] duration-200 ease-linear hover:bg-[hsl(217.2_91.2%_59.8%/0.9)] hover:text-[hsl(240_5.9%_10%)] active:bg-[hsl(217.2_91.2%_59.8%/0.9)] active:text-[hsl(240_5.9%_10%)]"
                  : "min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground"
              }
            >
              <PlusCircleIcon />
              <span>Quick Create</span>
            </SidebarMenuButton>
            <Button
              size="icon"
              className={
                isMobile
                  ? "h-9 w-9 shrink-0 group-data-[collapsible=icon]:opacity-0 border-[hsl(240_3.7%_15.9%)] bg-transparent text-[hsl(240_4.8%_95.9%)] hover:bg-[hsl(240_3.7%_15.9%)] hover:text-[hsl(240_4.8%_95.9%)]"
                  : "h-9 w-9 shrink-0 group-data-[collapsible=icon]:opacity-0"
              }
              variant="outline"
            >
              <MailIcon />
              <span className="sr-only">Inbox</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}