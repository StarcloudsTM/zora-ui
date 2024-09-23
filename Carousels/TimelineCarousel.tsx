"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const timelineEvents = [
  { year: 2020, title: "Company Founded", description: "Our journey began" },
  { year: 2021, title: "First Product Launch", description: "Introduced our flagship product" },
  { year: 2022, title: "Expansion", description: "Opened offices in 3 new countries" },
  { year: 2023, title: "Award Winning", description: "Received industry recognition" },
]

export default function TimelineCarousel() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {timelineEvents.map((event, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6 h-64">
                <div className="text-3xl font-bold mb-2">{event.year}</div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-center text-muted-foreground">{event.description}</p>
                <div className="mt-4 w-full border-t border-primary" />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
