import React from 'react'
import { PricingSection } from "../components/FeatureSection";
 import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Section } from 'lucide-react';

function Pricepage() {
  return (
    <section  className='bg-[#060014]'>
      <PricingSection />
  
        
      <section   className="max-w-[770px] mx-auto px-4 sm:px-8 xl:px-0  bg-[#060014]">
       
             
        
        <div className="mb-20 text-center">
         <span className="
  inline-flex items-center gap-2
  py-2 px-6 rounded-full
  text-sm font-medium
  backdrop-blur-md
  bg-gradient-to-r from-[#1a1a2e]/40 to-[#0f0f1a]/40
  border border-white/10
  text-transparent bg-clip-text
  bg-gradient-to-r from-purple-300 to-purple-400
  shadow-[0_0_20px_rgba(150,100,255,0.25)]
">
  ✨ Questions About our AI Tool?
</span>


          <h2 className=' mt-2 text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2'>Frequently Asked Questions</h2>

          <p className=' max-w-[714px] mx-auto font-medium  text-[#918EA0]'>Our AI writing tool is designed to empower you with exceptional writing capabilities, making the writing process more efficient, accurate, and enjoyable.</p>
  
</div>

    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
            <AccordionTrigger className='h4 cursor-pointer flex justify-between items-center font-semibold text-[22px] leading-[28px] py-5 lg:py-7 \
            
            
        data-[state=open]:text-white
        data-[state=closed]:text-[#918EA0]'
            >What Is AI Tool Content Writing Tool?</AccordionTrigger>
        <AccordionContent className="font-medium pb-7  text-[#918EA0]">
          <p>
           Our AI writing tool is designed to empower you with exceptional writing capabilities, making the writing process more efficient, accurate, and enjoyable.
          </p>
          
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className='h4 cursor-pointer flex justify-between items-center font-semibold text-[22px] leading-[28px] py-5 lg:py-7 
        data-[state=open]:text-white
        data-[state=closed]:text-[#918EA0]'>Is there a limit on how much content I can generate?</AccordionTrigger>
        <AccordionContent className="font-medium pb-7 text-[#918EA0]">
          <p  >
         Our AI writing tool is designed to empower you with exceptional writing capabilities, making the writing process more efficient, accurate, and enjoyable.
          </p>
          
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
            <AccordionTrigger className='h4 cursor-pointer flex justify-between items-center font-semibold text-[22px] leading-[28px] py-5 lg:py-7 
        data-[state=open]:text-white
        data-[state=closed]:text-[#918EA0]'
            >What Languages does it supports?</AccordionTrigger>
        <AccordionContent className="font-medium pb-7  text-[#918EA0]">
          <p>
           Our AI writing tool is designed to empower you with exceptional writing capabilities, making the writing process more efficient, accurate, and enjoyable.
          </p>
        
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
            <AccordionTrigger className='h4 cursor-pointer flex justify-between items-center font-semibold text-[22px] leading-[28px] py-5 lg:py-7 
        data-[state=open]:text-white
        data-[state=closed]:text-[#918EA0]'
            >What is SEO Writing AI and how do I use it?</AccordionTrigger>
        <AccordionContent className="font-medium pb-7 text-[#918EA0]">
          <p>
          Our AI writing tool is designed to empower you with exceptional writing capabilities, making the writing process more efficient, accurate, and enjoyable.
          </p>
        
        </AccordionContent>
      </AccordionItem>
    </Accordion>

      </section>

      
    
    </section>)
}

export default Pricepage