import { FeaturesSection } from "../components/FeatureSection"
 import  {Features}  from "./Home"
 import UserTestimonials  from "../components/UserTestimonials"
import BrandSlider from "../components/BrandSlider"
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

import { useState } from "react";
 
import  {Tool}  from "../components/Blog"
export default function AboutUS() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  
  
const teamMembers = [
  { name: "Hashir Ahmad", role: "Web Developer", img: "/Hashir.jpg" },
  { name: "Davis Curtis", role: "UI/Ux Designer", img: "/t4.jpg" },
  { name: "James Donin", role: "Finance Manager", img: "/mb14.jpg" },
  { name: "Erin Bergson", role: "Ai Master", img: "/t1.jpg" },
  { name: "Hassan Salman", role: "Graphic Designer", img: "/hassanbds1.jpg" },
  { name: "Corey Korsgaard", role: "Data Engineer ", img: "/t2.jpg" },
  { name: "Martin Geidt", role: "Project Manager", img: "/t3.jpg" },
];
  
  const videoURL = soundEnabled
    ? "https://www.youtube.com/embed/hmtuvNfytjM?autoplay=1&mute=0&loop=1&controls=0&showinfo=0&modestbranding=1&rel=0&playlist=hmtuvNfytjM"
    : "https://www.youtube.com/embed/hmtuvNfytjM?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&rel=0&playlist=hmtuvNfytjM";

  return (
    <section className="font-jakarta min-h-screen pt-[100px] pb-[120px] bg-[#030014] text-white flex flex-col items-center">
      {/* Top Heading */}
      <div className="text-center max-w-3xl px-6">
        <h1 className="text-5xl font-bold mb-4">About AI Arcade</h1>
        <p className="text-lg opacity-80">Home / About Us</p>
      </div>

      {/* Content Section */}
      <section className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center gap-12 px-6 py-20">
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-purple-400 font-semibold mb-3 tracking-wide">
            About Our App
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5">
            10,000+ Writers, Marketers, & Business Owners Love AI Tool.
          </h2>

          <p className="opacity-80 mb-8 text-base sm:text-lg">
            Our AI writing tool is designed to empower you with exceptional
            writing capabilities, making the writing process more efficient,
            creative, and enjoyable.
          </p>

          {/* Gradient Button */}
          <button
            className="bg-gradient-to-r from-[#7b2ff7] to-[#f107a3] shadow-lg shadow-[#7b2ff7]/30 hover:opacity-90 transition-all duration-300 rounded-lg py-3 px-7 text-white font-semibold"
          >
            Start Writing – It's Free
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://ai-tool-tailwind.preview.uideck.com/images/about.svg"
            alt="About illustration"
            className="w-full max-w-[500px] object-contain"
          />
        </div>
      </section>

        <Features />
      <FeaturesSection />
     {/* <div className="w-full overflow-hidden flex justify-center py-10">
  <div className="w-full max-w-[800px] aspect-video relative">
    <iframe
      src="https://www.youtube.com/embed/hmtuvNfytjM?autoplay=1&mute=1&loop=1&playlist=hmtuvNfytjM&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1"
      title="Video"
      allow="autoplay; encrypted-media"
      allowFullScreen
      className="absolute top-0 left-0 w-full h-full rounded-xl"
    ></iframe>
  </div>
</div> */}
      


        <section className="w-full flex flex-col items-center justify-center py-16">
      <div className="w-full max-w-[1000px] aspect-video relative rounded-xl overflow-hidden">
        <iframe
          src={videoURL}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>

      {/* Sound Toggle Button */}
      <button
        onClick={() => setSoundEnabled(!soundEnabled)}
        className="
          mt-6 px-6 py-3 rounded-full text-white font-medium
          bg-gradient-to-r from-purple-600 to-blue-500
          hover:from-purple-700 hover:to-blue-600
          transition-all duration-300 shadow-lg
        "
      >
        {soundEnabled ? "🔇 Mute Video" : "🔊 Enable Sound"}
      </button>
    </section>

      

<section className="py-16 text-center ">
  <h2 className="text-4xl font-semibold mb-3">Our Dynamic Team</h2>

  <p className="max-w-2xl mx-auto text-gray-400 text-sm mb-14">
    Our AI writing tool is designed to empower you with exceptional writing capabilities,
    making the writing process more efficient, accurate, and enjoyable.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 px-6 max-w-6xl mx-auto">
    {teamMembers.map((member, index) => (
      <div key={index} className="flex flex-col items-center group relative">

        {/* IMAGE WRAPPER WITH ANIMATED HOVER RING */}
        <div className="relative w-32 h-32 mb-4">
          {/* Gradient Glow On Hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r 
            from-purple-600 via-purple-400 to-purple-600 
            blur-[4px] opacity-0 group-hover:opacity-100 transition duration-500">
          </div>

          {/* Main image */}
          <img
            src={member.img}
            alt={member.name}
            className="
              w-32 h-32 rounded-full object-cover border-2 border-transparent 
              group-hover:scale-105 transition duration-500 relative z-10"
          />
        </div>
       

        <h3 className="text-lg font-lg  font-bold">{member.name}</h3>
        <p className="text-gray-400 text-sm mb-3">{member.role}</p>

        {/* Social Icons */}
        

          {/* Social Links */}
          <div className="flex gap-3 mt-1">
            <a href="https://github.com/hashirahmad806" target="_blank" className="text-white hover:text-purple-400 transition">
              <Github size={20} />
            </a>
            <a href="https://twitter.com/" target="_blank" className="text-white hover:text-blue-400 transition">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com/" target="_blank" className="text-white hover:text-pink-400 transition">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com/" target="_blank" className="text-white hover:text-blue-500 transition">
              <Linkedin size={20} />
            </a>
          </div>
      </div>
    ))}
  </div>
</section>




      <UserTestimonials />




      <BrandSlider />
      <Tool />
    </section>
  );
}
