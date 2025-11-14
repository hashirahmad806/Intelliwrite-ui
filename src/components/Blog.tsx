import { Button } from "@/components/ui/button"
function Blog() {
 
  
  return (
    <section  className="relative w-full bg-[#080710] text-white py-24 flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center mb-10">
        <h3 className="text-purple-400 uppercase text-medium tracking-widest mb-2">
       
             Read Our Latest Blogs
       
        </h3>
        <h1 className="text-4xl font-bold mb-4">Latest Blogs & News</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Our AI writing tool is designed to empower you with exceptional writing capabilities, making the writing process more efficient, accurate, and enjoyable.
        </p>
      </div>
   
       
      <div className=" relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-6">  
         {/* // colum 1 */}
        <div className="flex    flex-col"  >
         <div className="group overflow-hidden rounded-3xl h-[250px]">
  <img
    className="w-full h-full object-cover duration-500 ease-linear group-hover:scale-125"
    src="https://ai-tool-tailwind.preview.uideck.com/images/blog-big.png"
    alt="image"
  />
</div>
      
          <div className="flex flex-wrap gap-2.5 items-center mb-4.5  mt-3    pl-3.5"> 
            <button className=" font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full  bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300"> Products</button>
            

            <button  className="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full  bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300"> Engineering </button>
            
            
          </div>
           <div>
            <h2>
              <a href="#"  className=" text-white font-semibold text-xl ease-in duration-300 hover:opacity-80"
              >
               Revolution in Content Creation and Communication
              </a>
              </h2>

            <p  className="text-small mt-4   text-[#888397]">
              Lorem ipsum dolor sit amet, consectetur adipisc elit sed do eiusmod tempor incididunt ut labore et dolore magna oliumosd aliqua...
              </p>

          </div>


         </div>
        

                      {/* // colum 2*/}
        <div> 
        <div className="group overflow-hidden rounded-3xl h-[250px]">
  <img
    className="w-full h-full object-cover duration-500 ease-linear group-hover:scale-125"
    src="https://ai-tool-tailwind.preview.uideck.com/images/blog-big.png"
    alt="image"
  />
</div>

         
          <div className="flex flex-wrap gap-2.5 items-center mb-4.5  mt-3   pl-3.5"> 
            <button className=" font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full  bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300"> Products</button>
            

            <button  className="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full  bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300"> Blog and articles </button>
            
            
          </div>
          
          <div>
            <h2>
              <a href="#"  className=" text-white font-semibold text-xl ease-in duration-300 hover:opacity-80"
              >
                How AI Writing Tools Empower Writers to Speed up there Writing
              </a>
              </h2>

            <p  className="text-small mt-4   text-[#888397]">
              Lorem ipsum dolor sit amet, consectetur adipisc elit sed do eiusmod tempor incididunt ut labore et dolore magna oliumosd aliqua...
              </p>

          </div>
</div>

    
                           {/* // colum 3*/}
        <div className="   ">
        <div className="group overflow-hidden rounded-3xl h-[250px]">
  <img
    className="w-full h-full object-cover duration-500 ease-linear group-hover:scale-125"
    src="https://ai-tool-tailwind.preview.uideck.com/images/blog-big.png"
    alt="image"
  />
</div>
   
          <div className="flex flex-wrap gap-2.5 items-center mb-4.5  mt-3   pl-3.5"> 
            <button className=" font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full  bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300"> Development</button>
            

            <button  className="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full  bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300"> Security </button>
            
            
          </div>
          
           <div>
            <h2>
              <a href="#"  className=" text-white font-semibold text-xl ease-in duration-300 hover:opacity-80"
              >
Revolution in Content Creation and Communication              </a>
              </h2>

            <p  className=" text-small mt-4   text-[#888397]">
              Lorem ipsum dolor sit amet, consectetur adipisc elit sed do eiusmod tempor incididunt ut labore et dolore magna oliumosd aliqua...
              </p>

          </div>
        
        </div>
        
      
      </div>

    </section>
  )
}

export default Blog

