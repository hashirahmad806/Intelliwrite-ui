import React from 'react'
import Blog1 from "../components/Blog1";


function BLogsingle() {
  return (
    <section  className="relative w-full bg-[#060014] text-white py-24 flex flex-col items-center justify-center overflow-hidden">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
     font-bold mb-10 mt-10 text-center">
  Blog-Details
</h1>

  {/* Blog Card 1 */}
      <section className='max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0'>
        <div className="flex flex-col">
  <div className="group overflow-hidden rounded-3xl 
     h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] xl:h-[420px]">
  <img
    className="w-full h-full object-cover duration-500 ease-linear group-hover:scale-125"
    src="https://ai-tool-tailwind.preview.uideck.com/images/blog-03.png"
    alt="image"
  />
</div>


           <div className='div max-w-[870px] mx-auto'>
          <div className="flex flex-wrap gap-2.5 items-center mb-4.5 mt-3 pl-3.5">
            <button className="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 transition duration-300">Products</button>
            <button className="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 transition duration-300">Engineering</button>
          </div>
          <div className="pl-3.5">
            <h2>
              <a href="#" className="font-semibold text-white text-[34px] leading-[45px] max-w-[579px] mb-7.5">
                Revolution in Content Creation and Communication
              </a>
            </h2>
            <p className=" font-medium mb-6 text-[#888397]">
             The inability to write. Everyone has been there. Even the most seasoned and well-versed writers and content producers endure mental gaps. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
            </p>
            <p className=" font-medium mb-7.5 text-[#888397]">
              significant role in determining their overall well-being, including their physical and mental health, as well as their happiness and satisfaction with life. A healthy lifestyle, which includes a balanced diet, regular exercise, and a healthy sleep pattern,
              </p>
              
              <h3 className='font-extrabold text-2xl text-white mb-6'>
                how I churn out 2000 words in 20 minutes

              </h3>

              <p className='  font-medium mb-6  text-[#888397]'>
                Everyone has been there. Even the most seasoned and well-versed writers and content producers endure mental gaps. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate anyone exercitation incididunt aliquip deserunt reprehenderit elit laborum.

              </p>
              <p  className=' font-medium mb-12.5  text-[#888397]'>
                 Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt.
              </p>
          </div>
          </div> 
          



          </div>
      </section>
      <h2  className='font-extrabold text-white text-[40px] leading-[45px] max-w-[579px] mb-10 mt-25'>Related Articles</h2>
      <Blog1 />
    </section>
  )
}

export default BLogsingle