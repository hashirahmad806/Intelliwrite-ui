


// import {
//   Facebook,
//   Instagram,
//   Twitter,
//   Github
// } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="w-full bg-[#05050A] text-white border-t border-white/10 relative">
//       {/* Glow Line */}
//       <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-700/40 via-purple-400/70 to-purple-700/40 blur-sm"></div>

//       <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
//         {/* Logo + Description */}
//         <div className="space-y-4">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-purple-600 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-purple-500/40">
//               💬
//             </div>
//             <h2 className="text-xl font-semibold">AI Tool</h2>
//           </div>

//           <p className="text-sm text-gray-400 leading-relaxed">
//             AI writing tool is designed to empower you with exceptional writing
//             capabilities.
//           </p>

//           {/* Social Icons */}
//           <div className="flex items-center gap-4">
//             <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-400 transition-all cursor-pointer backdrop-blur-sm">
//               <Facebook size={18} />
//             </div>

//             <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-400 transition-all cursor-pointer backdrop-blur-sm">
//               <Instagram size={18} />
//             </div>

//             <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-400 transition-all cursor-pointer backdrop-blur-sm">
//               <Twitter size={18} />
//             </div>

//             <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-400 transition-all cursor-pointer backdrop-blur-sm">
//               <Github size={18} />
//             </div>
//           </div>
//         </div>

//         {/* Products */}
//         <div className="space-y-3">
//           <h3 className="font-semibold text-white">Products</h3>
//           <ul className="space-y-2 text-sm text-gray-400">
//             {["Features", "Integrations", "Pricing", "Changelog", "Roadmap"].map(
//               (item) => (
//                 <li
//                   key={item}
//                   className="hover:text-purple-300 transition-all cursor-pointer"
//                 >
//                   {item}
//                 </li>
//               )
//             )}
//           </ul>
//         </div>

//         {/* Company */}
//         <div className="space-y-3">
//           <h3 className="font-semibold text-white">Company</h3>
//           <ul className="space-y-2 text-sm text-gray-400">
//             {["Privacy Policy", "Refund Policy", "Support", "Community"].map(
//               (item) => (
//                 <li
//                   key={item}
//                   className="hover:text-purple-300 transition-all cursor-pointer"
//                 >
//                   {item}
//                 </li>
//               )
//             )}
//           </ul>
//         </div>

//         {/* Support */}
//         <div className="space-y-3">
//           <h3 className="font-semibold text-white">Support</h3>
//           <ul className="space-y-2 text-sm text-gray-400">
//             {["Features", "Integrations", "Pricing", "Changelog", "Roadmap"].map(
//               (item) => (
//                 <li
//                   key={item}
//                   className="hover:text-purple-300 transition-all cursor-pointer"
//                 >
//                   {item}
//                 </li>
//               )
//             )}
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Text */}
//       <div className="w-full border-t border-white/5 py-6">
//         <p className="text-center text-gray-500 text-sm">
//           © AI Tool, LLC. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }







import { Facebook, Instagram, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#05050A] text-white border-t border-white/10 relative">
      
      {/* Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 blur-[2px]"></div>

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-purple-600 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-purple-500/40">
              ⚡
            </div>
            <h2 className="text-xl font-semibold tracking-wide">AI Arcade</h2>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            Smarter tools. Better productivity. Built for creators & developers.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-4">
            {[Facebook, Instagram, Twitter, Github].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer backdrop-blur-md hover:scale-110 hover:bg-purple-600/20 hover:border-purple-500 transition-all"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <FooterColumn title="Products" links={["Features", "Integrations", "Pricing", "Changelog", "Roadmap"]} />

        <FooterColumn title="Company" links={["About Us", "Privacy Policy", "Support", "Community"]} />

        <FooterColumn title="Support" links={["Help Center", "Contact", "Status", "Documentation"]} />
      </div>

      {/* Bottom text */}
      <div className="w-full border-t border-white/5 py-5">
        <p className="text-center text-gray-500 text-sm">
          © 2025 AI Tool, All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-white text-lg">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        {links.map((item) => (
          <li
            key={item}
            className="hover:text-purple-300 cursor-pointer transition-all"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

