"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

const words = ["Intuitive", "User-friendly", "Responsive", "Accessible"]

export default function TypewriterRotator() {
  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prevText) => {
        if (!isDeleting && prevText === words[index]) {
          setIsDeleting(true)
          return prevText
        } else if (isDeleting && prevText === "") {
          setIsDeleting(false)
          setIndex((prevIndex) => (prevIndex + 1) % words.length)
          return ""
        } else if (isDeleting) {
          return prevText.slice(0, -1)
        } else {
          return words[index].slice(0, prevText.length + 1)
        }
      })
    }, 100)

    return () => clearInterval(interval)
  }, [index, isDeleting])

  return (
    <div className="flex items-center justify-center space-x-2 bg-gray-800 text-white p-4 rounded-lg">
      <span className="text-2xl font-semibold">Our design is</span>
      <div className="relative w-48 h-10">
        <motion.span
          className="absolute inset-0 flex items-center text-2xl font-bold text-green-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {displayText}
          <motion.span
            className="inline-block w-0.5 h-6 bg-green-400 ml-1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </motion.span>
      </div>
    </div>
  )
}
