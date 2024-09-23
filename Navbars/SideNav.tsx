"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Home, Search, Clock, Menu } from "lucide-react"

export default function SidebarWithSearchAndRecent() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const recentItems = [
    { id: 1, name: "Project A" },
    { id: 2, name: "Task B" },
    { id: 3, name: "Document C" },
  ]

  const SidebarContent = () => (
    <ScrollArea className="h-full py-6 pl-6 pr-6">
      <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
      <div className="space-y-4">
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Link>
        </Button>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" className="pl-8" />
        </div>
        <div>
          <h3 className="text-sm font-medium mb-2 flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            Recent Items
          </h3>
          <ul className="space-y-1">
            {recentItems.map((item) => (
              <li key={item.id}>
                <Button variant="ghost" className="w-full justify-start h-8 px-2" asChild>
                  <Link href={`/item/${item.id}`}>{item.name}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
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
