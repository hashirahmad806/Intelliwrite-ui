import React from 'react'

export default function Blog1() {
  return (
    <section className="relative w-full bg-[#060014] text-white py-24 flex flex-col items-center justify-center overflow-hidden"
      
    >
 
      {/* Blog Cards Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-6">
        
        {/* Blog Card 1 */}
        <div className="flex flex-col">
          <div className="group overflow-hidden rounded-3xl h-[250px]">
            <img
              className="w-full h-full object-cover duration-500 ease-linear group-hover:scale-125"
              src="https://ai-tool-tailwind.preview.uideck.com/images/blog-big.png"
              alt="image"
            />
          </div>
          <div className="flex flex-wrap gap-2.5 items-center mb-4.5 mt-3 pl-3.5">
            <button className="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 transition duration-300">Products</button>
            <button className="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 transition duration-300">Engineering</button>
          </div>
          <div className="pl-3.5">
            <h2>
              <a href="#" className="text-white font-semibold text-xl hover:opacity-80 transition duration-300">
                Revolution in Content Creation and Communication
              </a>
            </h2>
            <p className="text-sm mt-4 text-[#888397]">
              Lorem ipsum dolor sit amet, consectetur adipisc elit sed do eiusmod tempor incididunt ut labore et dolore magna oliumosd aliqua...
            </p>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="flex flex-col">
          <div className="group overflow-hidden rounded-3xl h-[250px]">
            <img
              className="w-full h-full object-cover duration-500 ease-linear group-hover:scale-125"
              src="https://ai-tool-tailwind.preview.uideck.com/images/blog-big.png"
              alt="image"
            />
          </div>
          <div className="flex flex-wrap gap-2.5 items-center mb-4.5 mt-3 pl-3.5">
            <button className="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 transition duration-300">Products</button>
            <button className="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 transition duration-300">Blog and articles</button>
          </div>
          <div className="pl-3.5">
            <h2>
              <a href="#" className="text-white font-semibold text-xl hover:opacity-80 transition duration-300">
                How AI Writing Tools Empower Writers to Speed up there Writing
              </a>
            </h2>
            <p className="text-sm mt-4 text-[#888397]">
              Lorem ipsum dolor sit amet, consectetur adipisc elit sed do eiusmod tempor incididunt ut labore et dolore magna oliumosd aliqua...
            </p>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="flex flex-col">
          <div className="group overflow-hidden rounded-3xl h-[250px]">
            <img
              className="w-full h-full object-cover duration-500 ease-linear group-hover:scale-125"
              src="https://ai-tool-tailwind.preview.uideck.com/images/blog-big.png"
              alt="image"
            />
          </div>
          <div className="flex flex-wrap gap-2.5 items-center mb-4.5 mt-3 pl-3.5">
            <button className="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 transition duration-300">Development</button>
            <button className="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 transition duration-300">Security</button>
          </div>
          <div className="pl-3.5">
            <h2>
              <a href="#" className="text-white font-semibold text-xl hover:opacity-80 transition duration-300">
                Revolution in Content Creation and Communication
              </a>
            </h2>
            <p className="text-sm mt-4 text-[#888397]">
              Lorem ipsum dolor sit amet, consectetur adipisc elit sed do eiusmod tempor incididunt ut labore et dolore magna oliumosd aliqua...
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
