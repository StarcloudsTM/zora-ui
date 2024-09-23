"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const products = [
  {
    name: "Wireless Headphones",
    price: "$129.99",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Smartwatch",
    price: "$199.99",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Bluetooth Speaker",
    price: "$79.99",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Fitness Tracker",
    price: "$89.99",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function ProductShowcaseCarousel() {
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent>
        {products.map((product, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image src={product.image} alt={product.name} width={300} height={300} className="object-contain" />
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{product.price}</p>
                <Button>Add to Cart</Button>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
