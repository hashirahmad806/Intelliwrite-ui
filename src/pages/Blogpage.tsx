import React from 'react'
import Blog1 from "../components/Blog1";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


function Blogpage() {
  return (
    < section  className='relative w-full bg-[#060014] text-white py-24 flex flex-col items-center justify-center overflow-hidden'>
            {/* Section Header */}
      <div className="text-center mb-10">
        <h3 className="text-purple-400 uppercase text-medium tracking-widest mb-2">
          Read Our Latest Blogs
        </h3>
        <h1 className="text-4xl font-bold mb-4">Latest Blogs & News</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Our AI writing tool is designed to empower you with exceptional writing
          capabilities, making the writing process more efficient, accurate, and enjoyable.
        </p>
      </div>

      <Blog1/>
      <Blog1/>
      <Blog1 />
       <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    </section>
  )
}

export default Blogpage