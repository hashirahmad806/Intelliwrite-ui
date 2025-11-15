


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
    <section className="w-full bg-[#030014] text-white py-16 px-6 flex flex-col items-center justify-center" id="features">
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
    <section className="relative w-full bg-[#080710] text-white py-24 flex flex-col items-center justify-center overflow-hidden"  id="pricing">
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
