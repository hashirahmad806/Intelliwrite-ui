


import React, { useState } from "react";

const testimonials = [
  {
    name: "Machal Pildum",
    username: "@machal",
    text: "This AI writing platform has completely upgraded the way I create content. The clarity, tone suggestions, and smart edits save me hours every single day.",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Adison Dias",
    username: "@adison",
    text: "The grammar and spell-checking features are incredibly accurate. It feels like having a professional editor available 24/7.",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Zain Fanci",
    username: "@zain",
    text: "This tool helps me brainstorm ideas, rewrite content, and improve structure instantly. Perfect for students, creators, and professionals.",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Wilson Bator",
    username: "@wilson",
    text: "I use this AI assistant for everything—emails, blogs, scripts, and reports. The writing becomes cleaner and more engaging with just one click.",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Abram Lipshutz",
    username: "@abram",
    text: "The interface is beautiful and easy to use. What I love most is how the AI adapts to my writing style the more I use it.",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Cristofer Carder",
    username: "@cristofer",
    text: "Whether it's rewriting, summarizing, or generating ideas, this platform always gives polished, high-quality results.",
    img: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    name: "Roger George",
    username: "@roger",
    text: "I’ve tried many writing tools, but none feel as intelligent and smooth as this one. The AI suggestions are always meaningful and accurate.",
    img: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Jaylon Press",
    username: "@jaylon",
    text: "From creative writing to technical documentation, this assistant handles everything effortlessly. Highly recommended!",
    img: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    name: "Dulce Rosser",
    username: "@dulce",
    text: "The quality of writing it produces is impressive. It feels like having a professional writer helping me anytime I need.",
    img: "https://randomuser.me/api/portraits/women/8.jpg",
  },
];

export default function UserTestimonials() {
  // State to control how many are visible
  const [visibleCount, setVisibleCount] = useState(6);

  // Shuffle once (to get random order) — do not re-shuffle every render
  const shuffled = React.useMemo(() => {
    return [...testimonials].sort(() => Math.random() - 0.5);
  }, []);

  // Slice only the visible ones
  const visibleTestimonials = shuffled.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, testimonials.length));
  };
   
  const handleShowLess = () => {
    setVisibleCount(6); // Reset back to default
  };
  return (
    <section className="text-white py-20 px-6 min-h-screen flex flex-col items-center  bg-[#060014]">
      <div className="text-center mb-10">
        <h3 className="text-purple-400 uppercase text-sm tracking-widest mb-2">
          Wall of love
        </h3>
        <h1 className="text-4xl font-bold mb-4">What Our Users Say</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Our AI writing tool is designed to empower you with exceptional
          writing capabilities, making the writing process more efficient,
          accurate, and enjoyable.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {visibleTestimonials.map((user, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#1a122d] to-[#0f0b1a] rounded-2xl p-8 flex flex-col justify-between border border-white/5 shadow-[0_0_50px_rgba(255,255,255,0.05)] hover:shadow-[0_0_70px_rgba(255,255,255,0.08)] transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4 border-b-2 pb-4">
              <img
                src={user.img}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{user.name}</h3>
                <p className="text-gray-400 text-sm">{user.username}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{user.text}</p>
          </div>
        ))}
      </div>

      {visibleCount < testimonials.length && (
        <button
          onClick={handleShowMore}
          className="mt-10 bg-[#2d1a77] hover:bg-[#3a24a0] text-white px-6 py-2 rounded-lg transition-all duration-300"
        >
          Show more...
        </button>

      )}
      
        {visibleCount > 6 && (
          <button
            onClick={handleShowLess}
            className="bg-[#44206d] hover:bg-[#5a2c94] text-white px-6  my-6  py-2 rounded-lg transition-all duration-300"
          >
            Show less
          </button>
        )}
    </section>
  );
}
