"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Home, Users, Settings, HelpCircle, Menu, ChevronLeft, ChevronRight } from "lucide-react"

export default function CollapsibleSidebarWithTooltips() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const SidebarContent = () => (
    <ScrollArea className="h-full py-6 pl-6 pr-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-lg font-semibold ${isCollapsed ? "hidden" : "block"}`}>Dashboard</h2>
        <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      <div className="space-y-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" className={`w-full ${isCollapsed ? "justify-center" : "justify-start"}`} asChild>
                <Link href="/">
                  <Home className={`h-4 w-4 ${isCollapsed ? "" : "mr-2"}`} />
                  {!isCollapsed && "Home"}
                </Link>
              </Button>
            </TooltipTrigger>
            {isCollapsed && <TooltipContent side="right">Home</TooltipContent>}
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" className={`w-full ${isCollapsed ? "justify-center" : "justify-start"}`} asChild>
                <Link href="/users">
                  <Users className={`h-4 w-4 ${isCollapsed ? "" : "mr-2"}`} />
                  {!isCollapsed && "Users"}
                </Link>
              </Button>
            </TooltipTrigger>
            {isCollapsed && <TooltipContent side="right">Users</TooltipContent>}
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" className={`w-full ${isCollapsed ? "justify-center" : "justify-start"}`} asChild>
                <Link href="/settings">
                  <Settings className={`h-4 w-4 ${isCollapsed ? "" : "mr-2"}`} />
                  {!isCollapsed && "Settings"}
                </Link>
              </Button>
            </TooltipTrigger>
            {isCollapsed && <TooltipContent side="right">Settings</TooltipContent>}
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" className={`w-full ${isCollapsed ? "justify-center" : "justify-start"}`} asChild>
                <Link href="/help">
                  <HelpCircle className={`h-4 w-4 ${isCollapsed ? "" : "mr-2"}`} />
                  {!isCollapsed && "Help"}
                </Link>
              </Button>
            </TooltipTrigger>
            {isCollapsed && <TooltipContent side="right">Help</TooltipContent>}
          </Tooltip>
        </TooltipProvider>
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
      <div className={`hidden lg:block h-screen border-r transition-all duration-300 ${isCollapsed ? "w-[80px]" : "w-[240px]"}`}>
        <SidebarContent />
      </div>
    </>
  )
}
