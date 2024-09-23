"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
  "/placeholder.svg?height=600&width=400",
  "/placeholder.svg?height=600&width=400",
  "/placeholder.svg?height=600&width=400",
  "/placeholder.svg?height=600&width=400",
]

export default function VerticalCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        axis: "y",
      }}
      className="w-full max-w-xs h-[400px]"
      orientation="vertical"
    >
      <CarouselContent className="-mt-1 h-[400px]">
        {images.map((src, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <Card>
              <CardContent className="flex aspect-[3/4] items-center justify-center p-6">
                <Image src={src} alt={`Slide ${index + 1}`} width={400} height={600} className="object-cover" />
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
