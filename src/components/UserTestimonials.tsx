import React from "react";

const testimonials = [
  {
    name: "Machal Pildum",
    username: "@machal",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Adison Dias",
    username: "@adison",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Zain Fanci",
    username: "@zain",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Wilson Bator",
    username: "@wilson",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Abram Lipshutz",
    username: "@abram",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Cristofer Carder",
    username: "@cristofer",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    img: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    name: "Roger George",
    username: "@roger",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    img: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Jaylon Press",
    username: "@jaylon",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    img: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    name: "Dulce Rosser",
    username: "@dulce",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    img: "https://randomuser.me/api/portraits/women/8.jpg",
  },
];

export default function UserTestimonials() {
  return (
    <section className="    text-white py-20 px-6 min-h-screen flex flex-col items-center">  
     
      <div className="text-center mb-10">
        
        <h3 className="text-purple-400 uppercase text-sm tracking-widest mb-2">
          Wall of love
        </h3>
        <h1 className="text-4xl font-bold mb-4">What Our User Says</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Our AI writing tool is designed to empower you with exceptional writing
          capabilities, making the writing process more efficient, accurate, and
          enjoyable.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {testimonials.map((user, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#1a122d] to-[#0f0b1a] rounded-2xl p-8 flex flex-col justify-between border border-white/5 shadow-[0_0_50px_rgba(255,255,255,0.05)] hover:shadow-[0_0_70px_rgba(255,255,255,0.08)] transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4  border-b-2   pb-4">
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
            <p className="text-gray-300 text-sm leading-relaxed">
              {user.text}
            </p>
          </div>
        ))}
      </div>

      <button className="mt-10 bg-[#2d1a77] hover:bg-[#3a24a0] text-white px-6 py-2 rounded-lg transition-all duration-300">
        Show more...
      </button>
    </section>
  );
}
