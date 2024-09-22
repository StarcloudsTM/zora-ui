'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Home, Info, Mail, Settings } from 'lucide-react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleMobileSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-30 transition-all duration-300 ease-in-out
                    ${isOpen ? 'w-64' : 'w-20'} 
                    ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className={`text-xl font-semibold ${isOpen ? 'block' : 'hidden'}`}>Menu</h2>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 hidden lg:block"
              aria-label={isOpen ? 'Collapse Sidebar' : 'Expand Sidebar'}
            >
              {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-grow">
            <ul className="py-4">
              <li>
                <Link href="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100" prefetch={false}>
                  <Home size={24} />
                  <span className={`ml-4 ${isOpen ? 'block' : 'hidden'}`}>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100" prefetch={false}>
                  <Info size={24} />
                  <span className={`ml-4 ${isOpen ? 'block' : 'hidden'}`}>About</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100" prefetch={false}>
                  <Mail size={24} />
                  <span className={`ml-4 ${isOpen ? 'block' : 'hidden'}`}>Contact</span>
                </Link>
              </li>
              <li>
                <Link href="/settings" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100" prefetch={false}>
                  <Settings size={24} />
                  <span className={`ml-4 ${isOpen ? 'block' : 'hidden'}`}>Settings</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={toggleMobileSidebar}
        className="fixed top-4 left-4 p-2 bg-white rounded-full shadow-lg z-40 lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-300"
        aria-label="Toggle Sidebar"
      >
        {isMobileOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
      </button>
    </>
  )
}
