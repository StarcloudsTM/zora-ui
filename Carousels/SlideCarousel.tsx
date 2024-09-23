"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const newsItems = [
  "Breaking: New technology breakthrough announced",
  "Sports: Local team wins championship",
  "Weather: Sunny skies expected for the weekend",
  "Business: Stock market reaches new heights",
]

export default function NewsTickerCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {newsItems.map((item, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex items-center justify-center p-4 h-16">
                <p className="text-sm font-medium">{item}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
