import { FeaturesSection } from "../components/FeatureSection"
 import  {Features}  from "./Home"
 import UserTestimonials  from "../components/UserTestimonials"
import  BrandSlider  from "../components/BrandSlider"
import { useState } from "react";
 
import  {Tool}  from "../components/Blog"
export default function AboutUS() {
   const [soundEnabled, setSoundEnabled] = useState(false);
  
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


      


      <UserTestimonials />




      <BrandSlider />
      <Tool />
    </section>
  );
}
