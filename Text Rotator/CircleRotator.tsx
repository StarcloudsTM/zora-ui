"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

const words = ["Dynamic", "Adaptive", "Evolving", "Progressive"]

export default function CircularRotator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-64 h-64 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full overflow-hidden">
      <div className="absolute inset-0">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold"
            initial={{ rotate: i * 90 }}
            animate={{ rotate: (i - index) * 90 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
              transformOrigin: "50% 150%",
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
      <div className="z-10 text-white text-lg">Our approach is</div>
    </div>
  )
}
