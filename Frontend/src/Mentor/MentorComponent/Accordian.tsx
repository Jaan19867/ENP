import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



import React from 'react'

function Accordians() {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Offer 1:1 session</AccordionTrigger>
          <AccordionContent>
            Mentorship sessions, consultations, discovery calls - do what you do
            best. We take care of everything else
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Host a webinar </AccordionTrigger>
          <AccordionContent>
            Connect with 100s of followers at once. Classes, group calls,
            workshops - do them all
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Sell courses & products </AccordionTrigger>
          <AccordionContent>
            Sell courses, exclusive content, guides, ebooks, templates and
            everything else. Start earning passively
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Sell a subscription </AccordionTrigger>
          <AccordionContent>
            {" "}
            Sell monthly subscriptions to your services. Build recurring revenue
            sources
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Accordians



