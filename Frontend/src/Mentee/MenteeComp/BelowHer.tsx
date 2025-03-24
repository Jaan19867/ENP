import React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";


function BelowHer() {

  const items=[
    "Web Development",
    "Competitive Programming",
    "UI/UX Design",
    "Data Science",
    "Machine Learning",

  ] ; 
  return (
    <div  className='mt-5 mb-5 flex flex-row justify-center '>
      <Carousel opts={{ align: "start" }} className="w-full max-w-sm">
        <CarouselContent >
          {items.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">{item}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default BelowHer
