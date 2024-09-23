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
import { cn } from "@/lib/utils"

const cards = [
  { title: "Card 1", content: "This is the content for Card 1" },
  { title: "Card 2", content: "This is the content for Card 2" },
  { title: "Card 3", content: "This is the content for Card 3" },
  { title: "Card 4", content: "This is the content for Card 4" },
]

export default function CardStackCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <Carousel setApi={setApi} className="w-full max-w-xs">
      <CarouselContent>
        {cards.map((card, index) => (
          <CarouselItem key={index} className="relative">
            <Card className={cn(
              "absolute top-0 left-0 w-full transition-all duration-300",
              index === current ? "z-10 scale-100" : "z-0 scale-95 opacity-70",
              index < current ? "-translate-x-4" : "translate-x-4"
            )}>
              <CardContent className="flex flex-col items-center justify-center p-6 h-48">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-center">{card.content}</p>
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
