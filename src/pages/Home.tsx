
import {FeaturesSection} from "../components/FeatureSection";
import {PricingSection} from "../components/FeatureSection";
import UserTestimonials from "../components/UserTestimonials"
import BrandSlider  from "../components/BrandSlider"
import { Skeleton } from "@/components/ui/skeleton"
import ContactSection from "../components/ContactSection"
  import Blog from  "../components/Blog"



function Hero() {
  return (
    <section
      className="
        w-full min-h-screen 
        flex flex-col items-center justify-center 
        text-center px-6 sm:px-10 lg:px-20 
        py-16 sm:py-24 lg:py-32 
        bg-[#060014] text-white relative overflow-hidden
        font-[Plus Jakarta Sans]
      "
    >
      {/* 🔥 Top Glow Light Effect */}
      <div
        className="
          absolute top-[-260px] sm:top-[-320px] left-1/2 -translate-x-1/2
          w-[1200px] h-[800px]
          bg-[radial-gradient(circle,_rgba(140,70,255,0.55)_0%,_rgba(3,0,20,0)_70%)]
          blur-[180px]
          pointer-events-none
        "
      />

      {/* 🔥 Optional second glow for depth */}
      <div
        className="
          absolute top-[-100px] left-1/2 -translate-x-1/2
          w-[1000px] h-[600px]
          bg-[radial-gradient(circle,_rgba(85,0,255,0.3)_0%,_rgba(3,0,20,0)_70%)]
          blur-[200px]
          pointer-events-none
        "
      />

      {/* Hero Tag */}
      <button
        className="
          px-5 sm:px-6 py-2.5 sm:py-3 
          rounded-full text-sm sm:text-base
          bg-white/10 border border-white/20
          backdrop-blur-md
          hover:bg-white/20 hover:border-white/40
          transition-all duration-300
          shadow-[0_0_20px_rgba(255,255,255,0.15)]
        "
      >
        🎨 Your Ultimate Creative Companion!
      </button>

      {/* Main Heading */}
      <h1
        className="
          mt-6 
          text-3xl sm:text-5xl lg:text-6xl 
          font-extrabold leading-tight 
          bg-gradient-to-r from-[#b972ff] to-[#6ecbff]
          bg-clip-text text-transparent
          drop-shadow-[0_0_20px_rgba(130,80,255,0.4)]
          max-w-4xl leading-relaxed
        "
      >
        Elevate Your Content with Our AI-Powered Writing Tool
      </h1>

      {/* Description */}
      <p
        className="
          mt-6 text-base sm:text-lg text-gray-300 
          max-w-2xl leading-relaxed 
        "
      >
        Highly customizable Tailwind CSS template for AI tools, startups,
        software, and product sites. Comes with everything you need — pages,
        features, sections, and more that you can easily customize.
      </p>

      {/* CTA Button */}
      <button
        className="
          mt-8 px-8 py-3 rounded-full text-base font-semibold
          bg-gradient-to-r from-[#6d28d9] to-[#9333ea]
          hover:from-[#7e22ce] hover:to-[#a855f7]
          shadow-[0_0_20px_rgba(147,51,234,0.5)]
          transition-transform duration-300 hover:scale-105
        "
      >
        Start Your Free Trial
      </button>

      {/* Skeleton UI Preview */}
      <div className="mt-16 flex justify-center w-full">
        <div
          className="
            relative flex flex-col items-center justify-center 
            bg-white/5 border border-white/10 backdrop-blur-xl 
            rounded-2xl p-6 w-[90%] sm:w-[80%] lg:w-[60%]
            shadow-[0_0_40px_rgba(120,80,255,0.1)]
          "
        >
          {/* Browser Top Bar */}
          <div className="flex space-x-2 mb-4 self-start">
            <div className="h-3 w-3 rounded-full bg-red-500/50"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500/50"></div>
            <div className="h-3 w-3 rounded-full bg-green-500/50"></div>
          </div>

          {/* Skeleton Layout */}
          <div className="flex flex-col sm:flex-row gap-6 w-full">
            {/* Left Sidebar */}
            <div className="flex flex-col space-y-3 w-full sm:w-1/3">
              <Skeleton className="h-6 w-[80%] rounded-md" />
              <Skeleton className="h-6 w-[90%] rounded-md" />
              <Skeleton className="h-6 w-[70%] rounded-md" />
              <Skeleton className="h-6 w-[85%] rounded-md" />
              <Skeleton className="h-6 w-[60%] rounded-md" />
            </div>

            {/* Main Content */}
            <div className="flex flex-col space-y-3 w-full sm:w-2/3">
              <Skeleton className="h-4 w-[90%] rounded-md" />
              <Skeleton className="h-4 w-[80%] rounded-md" />
              <Skeleton className="h-4 w-[85%] rounded-md" />
              <Skeleton className="h-4 w-[75%] rounded-md" />
              <Skeleton className="h-4 w-[60%] rounded-md" />
              <Skeleton className="h-4 w-[50%] rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


//  export function Features() {
//   return (
//     <section className="flex flex-col w-full bg-[#060014] justify-center items-center py-10  " id="feature">
//       <div className="px-1.5 flex flex-col items-center justify-center text-center">
//         <button
//           className="
//             px-5 sm:px-6 py-2.5 sm:py-3
//             rounded-full text-sm sm:text-base
//             bg-white/10 border border-white/20
//             backdrop-blur-md
//             hover:bg-white/20 hover:border-white/40
//             transition-all duration-300
//             shadow-[0_0_20px_rgba(255,255,255,0.15)]
//           "
//         >
//           🎨 Your Ultimate Creative Companion!
//         </button>

//         <h1
//           className="mt-6 text-6xl
//             bg-gradient-to-r from-[#b972ff] to-[#6ecbff]
//             bg-clip-text text-transparent
//             drop-shadow-[0_0_20px_rgba(130,80,255,0.4)]
//             max-w-3xl text-[Plus-Jakarta-sans]"
//         >
//           Key Features of Our Tool
//         </h1>

//         <p className="text-[18px] mt-6 max-w-2xl text-gray-300 leading-relaxed">
//           Our AI writing tool is designed to empower you with exceptional writing
//           capabilities, making the writing process more efficient, accurate, and
//           enjoyable.
//         </p>
//       </div>

//       {/* --- GRID SECTION --- */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center  items-center p-6 w-[100%]  max-w-6xl  text-center  ">
//         {/* Card 1 */}
//        <div className="flex flex-col items-center justify-center text-center border border-white/10 bg-white/5 rounded-xl p-6 hover:bg-[#05011b]/40 hover:border-white/30 transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(147,51,234,0.15)]">
  
//   <img
//     className="mb-4  border-2  border-amber-100  hover:border-white/30 transition-all duration-300 rounded-[100%] p-4"
//     src="https://img.icons8.com/ios-filled/50/375FA6/services.png"
//     alt="service"
//   />
  
//   <h3 className="text-xl font-semibold mb-2 text-[#b972ff]">
//     Intelligent Writing Assistance
//   </h3>
  
//   <p className="text-gray-300">
//     Our AI writing tool analyzes your content, suggests improvements, and helps you refine your writing effortlessly.
//   </p>
// </div>


//         {/* Card 2 */}
//         <div
//           className="
//              flex flex-col items-center justify-center text-center border border-white/10 bg-white/5 rounded-xl p-6 hover:bg-[#05011b]/40 hover:border-white/30 transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(147,51,234,0.15)]
//           "
//         >
          
//   <img
//     className="mb-4  border-2  border-amber-100  hover:border-white/30 transition-all duration-300 rounded-[100%] p-4"
//     src="https://img.icons8.com/ios-filled/50/375FA6/services.png"
//     alt="service"
//   />
//           <h3 className="text-xl font-semibold mb-2 text-[#b972ff]">
//             Real-Time Grammar Checking
//           </h3>
//           <p className="text-gray-300">
//             Identify and fix grammar issues instantly while maintaining your
//             writing style and tone.
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div
//           className="
// flex flex-col items-center justify-center text-center border border-white/10 bg-white/5 rounded-xl p-6 hover:bg-[#05011b]/40 hover:border-white/30 transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(147,51,234,0.15)]
//           "
//         >
          
//   <img
//     className="mb-4  border-2  border-amber-100  hover:border-white/30 transition-all duration-300 rounded-[100%] p-4"
//     src="https://img.icons8.com/ios-filled/50/375FA6/services.png"
//     alt="service"
//   />
//           <h3 className="text-xl font-semibold mb-2 text-[#b972ff]">
//             SEO Optimization Suggestions
//           </h3>
//           <p className="text-gray-300">
//             Automatically get keyword and readability tips to help your content
//             rank better.
//           </p>
//         </div>
//         <div
//           className="
//            flex flex-col items-center justify-center text-center border border-white/10 bg-white/5 rounded-xl p-6 hover:bg-[#05011b]/40 hover:border-white/30 transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(147,51,234,0.15)]
//           "
//         >
          
//   <img
//     className="mb-4  border-2  border-amber-100  hover:border-white/30 transition-all duration-300 rounded-[100%] p-4"
//     src="https://img.icons8.com/ios-filled/50/375FA6/services.png"
//     alt="service"
//   />
//           <h3 className="text-xl font-semibold mb-2 text-[#b972ff]">
//             Content Generation
//           </h3>
//           <p className="text-gray-300  ">
//            Need inspiration or assistance with generating content?
//           </p>
//         </div>
//         <div
//           className="  flex flex-col items-center justify-center text-center border border-white/10 bg-white/5 rounded-xl p-6 hover:bg-[#05011b]/40 hover:border-white/30 transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(147,51,234,0.15)]
//           "
//         >
          
//   <img
//     className="mb-4  border-2  border-amber-100  hover:border-white/30 transition-all duration-300 rounded-[100%] p-4"
//     src="https://img.icons8.com/ios-filled/50/375FA6/services.png"
//     alt="service"
//   />
//           <h3 className="text-xl font-semibold mb-2 text-[#b972ff]">
//             Voice to Text Conversion
//           </h3>
//           <p className="text-gray-300">
//             Transform your spoken words into written text easily & effortlessly
//           </p>
//         </div>
//         <div
//           className="
//             flex flex-col items-center justify-center text-center border border-white/10 bg-white/5 rounded-xl p-6 hover:bg-[#05011b]/40 hover:border-white/30 transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(147,51,234,0.15)]
//           "
//         >
          
//   <img
//     className="mb-4  border-2  border-amber-100  hover:border-white/30 transition-all duration-300 rounded-[100%] p-4"
//     src="https://img.icons8.com/ios-filled/50/375FA6/services.png"
//     alt="service"
//   />
//           <h3 className="text-xl font-semibold mb-2 text-[#b972ff]">
//             Style and Tone Adaptation
//           </h3>
//           <p className="text-gray-300">
//             Whether you need a professional, or positive tone it has everyone
//           </p>
//         </div>
//       </div>


//       <section className="relative w-full flex items-center justify-between bg-gradient-to-br from-[#0b032b] via-[#1a093d] to-[#12072e] rounded-3xl p-12 overflow-hidden shadow-2xl max-w-7xl mx-auto mt-10">
      
//       {/* Left Content */}
//       <div className="flex flex-col max-w-lg z-10">
//         <span className="inline-flex items-center gap-2 text-sm text-gray-300 bg-white/10 px-3 py-1 rounded-full w-fit mb-4 backdrop-blur-md">
//           <span className="text-purple-400">✨</span> AI-Powered Writing Tool
//         </span>

//         <h1 className="text-4xl font-bold text-white mb-4 leading-snug">
//           Intelligent Writing Assistance
//         </h1>

//         <p className="text-gray-300 mb-8">
//           Our AI writing tool is designed to empower you with exceptional writing capabilities,
//           making the writing process smoother and smarter.
//         </p>

//         <button className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition flex items-center gap-2 w-fit">
//           Learn more →
//         </button>
//       </div>

//       {/* Right Graphic */}
//       <div className="relative flex-1 flex justify-center items-center">
//         <div className="relative w-[250px] h-[250px]">
//           {/* Outer glowing rings */}
//           <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-transparent to-transparent animate-pulse" />
//           <div className="absolute inset-10 rounded-full bg-gradient-to-r from-purple-600/30 via-transparent to-transparent blur-3xl" />
//           <div className="absolute inset-20 rounded-full bg-purple-900/40 blur-2xl" />
          
//           {/* Center icon */}
//           <div className="absolute inset-1 flex items-center justify-center">
//             <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(147,51,234,0.5)]">
//                 <div className="w-4 h-2 bg-white rounded-full" />
//                 <br></br>
//               <div className="w-4 h-2 ml-1 bg-white rounded-full" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>


       
//     </section>
//   )

// }







export function Features() {
  return (
    <section
      className="flex flex-col w-full bg-[#060014] justify-center items-center py-10"
      id="features"
    >
      {/* HEADER */}
      <div className="px-1.5 flex flex-col items-center justify-center text-center">
        <button
          className="
            px-5 sm:px-6 py-2.5 sm:py-3 
            rounded-full text-sm sm:text-base
            bg-white/10 border border-white/20
            backdrop-blur-md
            hover:bg-white/20 hover:border-white/40
            transition-all duration-300
            shadow-[0_0_20px_rgba(255,255,255,0.15)]
          "
        >
          🎨 Your Ultimate Creative Companion!
        </button>

        <h1
          className="mt-6 text-6xl
            bg-gradient-to-r from-[#b972ff] to-[#6ecbff]
            bg-clip-text text-transparent
            drop-shadow-[0_0_20px_rgba(130,80,255,0.4)]
            max-w-3xl text-[Plus-Jakarta-sans]"
        >
          Key Features of Our Tool
        </h1>

        <p className="text-[18px] mt-6 max-w-2xl text-gray-300 leading-relaxed">
          Our AI writing tool is designed to empower you with exceptional writing
          capabilities, making the writing process more efficient, accurate, and
          enjoyable.
        </p>
      </div>
{/* FEATURES GRID */}
<div
  className="
    grid
    grid-cols-1 
    sm:grid-cols-2 
    lg:grid-cols-3
    gap-8 
    p-6 
    w-full 
    max-w-7xl 
    text-center
    mt-10

    /* Better responsiveness */
    md:gap-10
  "
>
  {/* 1) Intelligent Writing Assistance */}
  <FeatureCard
    icon="https://ai-tool-tailwind.preview.uideck.com/images/icon-01.svg"
    title="Intelligent Writing Assistance"
    desc="Our AI writing tool analyzes your content, suggests improvements, and helps you refine your writing effortlessly."
  />

  {/* 2) Real-Time Grammar Checking */}
  <FeatureCard
    icon="https://ai-tool-tailwind.preview.uideck.com/images/icon-02.svg"
    title="Real-Time Grammar Checking"
    desc="Identify and fix grammar issues instantly while maintaining your writing style and tone."
  />

  {/* 3) SEO Optimization Suggestions */}
  <FeatureCard
    icon="https://ai-tool-tailwind.preview.uideck.com/images/icon-03.svg"
    title="SEO Optimization Suggestions"
    desc="Automatically get keyword and readability tips to help your content rank better."
  />

  {/* 4) Content Generation */}
  <FeatureCard
    icon="https://img.icons8.com/ios-filled/50/375FA6/artificial-intelligence.png"
    title="Content Generation"
    desc="Need inspiration or assistance with generating high-quality content? We’ve got you covered."
  />

  {/* 5) Voice to Text Conversion */}
  <FeatureCard
    icon="https://ai-tool-tailwind.preview.uideck.com/images/icon-04.svg"
    title="Voice to Text Conversion"
    desc="Transform your spoken words into written text easily and efficiently."
  />

  {/* 6) Style & Tone Adaptation */}
  <FeatureCard
    icon="https://ai-tool-tailwind.preview.uideck.com/images/icon-05.svg"
    title="Style & Tone Adaptation"
    desc="Whether you need a professional, friendly, or positive tone—our tool adapts your content perfectly."
  />
</div>


      {/* PREMIUM SECTION */}
      <section className="relative w-full flex items-center justify-between bg-gradient-to-br from-[#0b032b] via-[#1a093d] to-[#12072e] rounded-3xl p-12 overflow-hidden shadow-2xl max-w-7xl mx-auto mt-10">
        {/* Left */}
        <div className="flex flex-col max-w-lg z-10">
          <span className="inline-flex items-center gap-2 text-sm text-gray-300 bg-white/10 px-3 py-1 rounded-full w-fit mb-4 backdrop-blur-md">
            <span className="text-purple-400">✨</span> AI-Powered Writing Tool
          </span>

          <h1 className="text-4xl font-bold text-white mb-4 leading-snug">
            Intelligent Writing Assistance
          </h1>

          <p className="text-gray-300 mb-8">
            Our AI writing tool is designed to empower you with exceptional writing capabilities, 
            making the writing process smoother and smarter.
          </p>

          <button className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition flex items-center gap-2 w-fit">
            Learn more →
          </button>
        </div>

        {/* Right Animated Graphic */}
        <div className="relative flex-1 flex justify-center items-center">
          <div className="relative w-[250px] h-[250px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-transparent to-transparent animate-pulse" />
            <div className="absolute inset-10 rounded-full bg-gradient-to-r from-purple-600/30 via-transparent to-transparent blur-3xl" />
            <div className="absolute inset-20 rounded-full bg-purple-900/40 blur-2xl" />

            <div className="absolute inset-1 flex items-center justify-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(147,51,234,0.5)]">
                <div className="w-4 h-2 bg-white rounded-full" />
                <div className="w-4 h-2 ml-1 bg-white rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
function FeatureCard({ icon, title, desc }) {
  return (
    <div
      className="
        flex flex-col items-center text-center
        bg-white/5 
        border border-white/10 
        rounded-2xl 
        p-8

        /* Glass + Glow */
        backdrop-blur-xl 
        shadow-[0_0_25px_rgba(157,78,221,0.15)]
        hover:shadow-[0_0_45px_rgba(157,78,221,0.35)]

        /* Hover animation */
        hover:scale-[1.04]
        hover:bg-white/10
        transition-all duration-300
        cursor-pointer
      "
    >
      {/* ICON */}
      <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-inner mb-4">
        <img src={icon} alt={title} className="w-10 h-10 object-contain" />
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-semibold mb-3 text-[#b972ff]">
        {title}
      </h3>

      {/* TEXT */}
      <p className="text-gray-300 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}



function Home() {
  return (
    <div><Hero />
      <Features />
       <FeaturesSection />
        <PricingSection />

        <UserTestimonials />
      <BrandSlider />
      <ContactSection />
      <Blog />

    </div>

  )
}

export default Home
