"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Home, Users, Settings, HelpCircle, Menu } from "lucide-react"

export default function SimpleResponsiveSidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const SidebarContent = () => (
    <ScrollArea className="h-full py-6 pl-6 pr-6">
      <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
      <div className="space-y-2">
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/users">
            <Users className="mr-2 h-4 w-4" />
            Users
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/settings">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/help">
            <HelpCircle className="mr-2 h-4 w-4" />
            Help
          </Link>
        </Button>
      </div>
    </ScrollArea>
  )

  return (
    <>
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden fixed left-4 top-4 z-40">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] sm:w-[300px] p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
      <div className="hidden lg:block w-[240px] h-screen border-r">
        <SidebarContent />
      </div>
    </>
  )
}
