"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const words = ["Efficient", "Reliable", "Secure", "Fast"]

export default function FlipCardRotator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center space-x-2 bg-gray-100 p-4 rounded-lg">
      <span className="text-2xl font-semibold">We are</span>
      <div className="relative w-32 h-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ rotateX: -90 }}
            animate={{ rotateX: 0 }}
            exit={{ rotateX: 90 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Card className="w-full h-full flex items-center justify-center bg-blue-500 text-white">
              <CardContent className="p-0">
                <span className="text-2xl font-bold">{words[index]}</span>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
