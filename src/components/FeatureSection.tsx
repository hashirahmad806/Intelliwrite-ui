// import React from 'react';
// import { MessageSquare, CheckCircle } from 'lucide-react'; // Using lucide-react for icons

// const FeatureSection = () => {
//   return (
//     // Outer container with dark background and padding (adjust as needed)
//     <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
//       {/* Container for the cards */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

//         {/* --- Card 1: Empowering Writing Excellence --- */}
//         <div className="
//           p-8 rounded-xl shadow-2xl
//           bg-opacity-20 backdrop-filter backdrop-blur-md
//           bg-purple-700/30 border border-purple-800/50
//           text-white
//           transform hover:scale-[1.02] transition duration-300 ease-in-out
//           relative overflow-hidden
//         ">
//           {/* Subtle gradient/glow effect in the background (similar to the image) */}
//           <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 opacity-20 rounded-full filter blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500 opacity-10 rounded-full filter blur-3xl"></div>
          
//           {/* Icon Container */}
//           <div className="
//             w-12 h-12 mb-4 rounded-full
//             bg-white/10 border border-white/20
//             flex items-center justify-center
//           ">
//             <MessageSquare className="w-6 h-6 text-white" />
//           </div>

//           {/* Title */}
//           <h3 className="text-2xl font-semibold mb-3">
//             Empowering Writing Excellence
//           </h3>

//           {/* Description */}
//           <p className="text-gray-300 text-lg">
//             Our AI writing tool is designed to empower you with exceptional writing capabilities, making the writing process...
//           </p>
//         </div>

//         {/* --- Card 2: Grammar and Spell Check --- */}
//         <div className="
//           p-8 rounded-xl shadow-2xl
//           bg-opacity-20 backdrop-filter backdrop-blur-md
//           bg-purple-700/30 border border-purple-800/50
//           text-white
//           transform hover:scale-[1.02] transition duration-300 ease-in-out
//           relative overflow-hidden
//         ">
//           {/* Subtle gradient/glow effect in the background (similar to the image) */}
//           <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 opacity-20 rounded-full filter blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500 opacity-10 rounded-full filter blur-3xl"></div>
          
//           {/* Icon Container */}
//           <div className="
//             w-12 h-12 mb-4 rounded-full
//             bg-white/10 border border-white/20
//             flex items-center justify-center
//           ">
//             <CheckCircle className="w-6 h-6 text-white" />
//           </div>

//           {/* Title */}
//           <h3 className="text-2xl font-semibold mb-3">
//             Grammar and Spell Check
//           </h3>

//           {/* Description */}
//           <p className="text-gray-300 text-lg">
//             Our AI writing tool is designed to empower you with exceptional writing capabilities.
//           </p>
//         </div>

//       </div>
      
//       {/* Scroll-to-top button simulation (the small purple arrow in the bottom right) */}
//       <button
//         aria-label="Scroll to top"
//         className="
//           fixed bottom-4 right-4
//           w-10 h-10 rounded-full
//           bg-purple-600 hover:bg-purple-700
//           text-white shadow-lg
//           flex items-center justify-center
//           transition duration-300
//         "
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//         </svg>
//       </button>
      
//     </section>
//   );
// };

// export default FeatureSection;












import React from "react";
import { MessageSquare, CheckCircle } from "lucide-react"; // for icons

const FeaturesSection = () => {
  const features = [
    {
      icon: <MessageSquare size={24} />,
      title: "Empowering Writing Excellence",
      description:
        "Our AI writing tool is designed to empower you with exceptional writing capabilities, making the writing process...",
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Grammar and Spell Check",
      description:
        "Our AI writing tool is designed to empower you with exceptional writing capabilities.",
    },
  ];

  return (
    <section className="w-full bg-[#030014] text-white py-16 px-6 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#120d24] to-[#1a122d] rounded-2xl p-8 flex flex-col space-y-4 shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,255,255,0.08)]"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};







import { Sun, Circle, X } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$10",
      icon: <Sun size={20} />,
      features: [
        "Subscription with levels",
        "Advanced features included",
        "Shared workspaces & tools",
        "Premium versions functionality",
        "Customizing the outputs",
        "Priority customer support",
      ],
    },
    {
      name: "Medium",
      price: "$59",
      icon: <Circle size={20} />,
      features: [
        "Subscription with levels",
        "Advanced features included",
        "Shared workspaces & tools",
        "Premium versions functionality",
        "Customizing the outputs",
        "Priority customer support",
      ],
    },
    {
      name: "Business",
      price: "$289",
      icon: <X size={20} />,
      features: [
        "Subscription with levels",
        "Advanced features included",
        "Shared workspaces & tools",
        "Premium versions functionality",
        "Customizing the outputs",
        "Priority customer support",
      ],
    },
  ];

  return (
    <section className="relative w-full bg-[#080710] text-white py-24 flex flex-col items-center justify-center overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-purple-700/40 rounded-full blur-[140px]" />

      {/* Header */}
      <div className="relative text-center mb-16">
        <button className="text-sm bg-white/10 px-4 py-1.5 rounded-full text-gray-300 border border-white/10 mb-4 hover:bg-white/20 transition">
          Get access
        </button>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-2">
          Our Pricing Plan
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Our AI writing tool is designed to empower you with exceptional writing
          capabilities, making the writing process more efficient, accurate, and
          enjoyable.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-6">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="bg-gradient-to-b from-[#1a122d] to-[#0f0b1a] rounded-2xl p-8 flex flex-col justify-between border border-white/5 shadow-[0_0_50px_rgba(255,255,255,0.05)] hover:shadow-[0_0_70px_rgba(255,255,255,0.08)] transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <div className="p-2 bg-white/10 rounded-full">{plan.icon}</div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-bold text-purple-400">
                {plan.price}
              </span>
              <span className="text-sm text-gray-400 ml-1">/month</span>
              <p className="text-xs text-gray-500">(billed annually)</p>
            </div>

            {/* Features */}
            <ul className="space-y-2 mb-8">
              {plan.features.map((f, index) => (
                <li key={index} className="text-gray-300 text-sm flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="mt-auto bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg py-2 px-4 text-sm font-medium hover:opacity-90 transition">
              Get the plan →
            </button>
            <p className="text-xs text-gray-500 mt-3 text-center">
              No extra hidden charge
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { PricingSection, FeaturesSection };
