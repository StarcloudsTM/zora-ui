"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const words = ["Innovative", "Powerful", "Flexible", "Scalable"]

export default function FadeInRotator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-20 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg">
      <h2 className="text-3xl font-bold mr-2">Our product is</h2>
      <div className="relative w-40 h-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center text-3xl font-bold"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}
