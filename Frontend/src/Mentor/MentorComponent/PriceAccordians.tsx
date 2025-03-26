import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import React from "react"

function PriceAccordians() {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Do you Love Me </AccordionTrigger>
          <AccordionContent>Yes. I love you</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Do you Hate Me </AccordionTrigger>
          <AccordionContent>Yes. I also Hate you </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Mustafa Jaane rehmat pe </AccordionTrigger>
          <AccordionContent>Laakho Salam </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default PriceAccordians
