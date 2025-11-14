
// import { ModeToggle } from "../components/mode-toggle";
// import { SpinnerButton } from "../components/Spinner"
// import {CardDemo} from '../components/Card';

// import React from 'react'

// function About() {
//   return (
//     <div>

//       < SpinnerButton />
//              <ModeToggle />
//             <CardDemo/>
//     </div>
//   )
// }

// export default About




import React from "react";
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

function About() {
  return (
    <section className="w-full bg-gradient-to-b from-[#0a0118] via-[#150028] to-[#1a0038] text-white px-6 sm:px-10 lg:px-20 py-24">
      
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
          About Us
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl">
          Welcome to our website! We are passionate about creating tools and
          solutions that make your digital experience seamless, engaging, and
          efficient. Meet the developer and the vision behind this project.
        </p>
      </div>

      {/* Developer & Mission Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto mb-24">
        {/* Developer Image */}
        <div className="flex-shrink-0">
          <img
            src="https://via.placeholder.com/300x300.png?text=Developer"
            alt="Developer"
            className="rounded-2xl shadow-[0_0_40px_rgba(147,51,234,0.5)] hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Info */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-purple-400">Hashir Ahmad</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I am a full-stack developer and the creator of this website. My
            mission is to build modern, interactive, and user-friendly web
            experiences that help users achieve their goals efficiently.
          </p>
          <p className="text-gray-400 text-base">
            Technologies used: React, TailwindCSS, JavaScript, MySQL, Java, and
            more.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/hashirahmad806"
              target="_blank"
              className="text-white hover:text-purple-400 transition"
            >
              <Github size={28} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="text-white hover:text-blue-400 transition"
            >
              <Twitter size={28} />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              className="text-white hover:text-pink-400 transition"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="text-white hover:text-blue-500 transition"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div className="bg-gradient-to-br from-[#120d24] to-[#1a122d] rounded-2xl p-8 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
          <h3 className="text-2xl font-bold text-purple-400 mb-4">Our Mission</h3>
          <p className="text-gray-300">
            To empower creators, developers, and enthusiasts with high-quality,
            AI-powered tools that enhance productivity, creativity, and
            efficiency.
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#120d24] to-[#1a122d] rounded-2xl p-8 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
          <h3 className="text-2xl font-bold text-purple-400 mb-4">Our Vision</h3>
          <p className="text-gray-300">
            To become a go-to platform for innovative digital solutions and
            tools, combining cutting-edge technologies with intuitive design
            and user experience.
          </p>
        </div>
      </div>

      {/* Skills / Technologies Section */}
      <div className="max-w-6xl mx-auto mb-24">
        <h3 className="text-3xl font-bold text-center text-purple-400 mb-8">
          Skills & Technologies
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {["React", "TailwindCSS", "JavaScript", "MySQL", "Java", "AI Tools", "GitHub"].map((tech, i) => (
            <span
              key={i}
              className="px-4 py-2 border border-white/10 rounded-full text-gray-300 hover:bg-purple-500/20 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Optional Call to Action */}
      <div className="text-center max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-purple-400 mb-4">
          Want to Connect?
        </h3>
        <p className="text-gray-300 mb-6">
          Reach out on social media or check out my projects to see what I’m
          building next.
        </p>
        <a
          href="mailto:hashirahmad@example.com"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 font-semibold hover:scale-105 transition-transform duration-300 inline-block"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default About;
