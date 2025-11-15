// import React from 'react'

// function NavBar() {
//   return (<header className='header fixed left-0 top-0 w-full z-9999.py-7 lg:py-0 bg-dark/70 backdrop-blur-lg shadow !py-4.lg:!py-0 transition.duration-100 before:absolute before:w-full before:h-[1px] before:bottom-0 before:left-0 before:features-row-border'>
//     <section className='max-w-full mx-auto px-4 sm:px-8 xl:px-0 lg:flex items-center justify-between relative  bg-[#0b011a]'>
      
//         <div className='w-full lg:w-1/4 flex items-center justify-between'>NavBar</div>
      
//       <div className='  flex  flex-row'>
//         <ul  className='ul flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-2'>
//           <li className="relative text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white hover:nav-gradient!text-white.nav-gradient"> Home</li>
          
//           <li className="relative text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white hover:nav-gradient!text-white.nav-gradient"> Features</li>
          
//           <li className="relative text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white hover:nav-gradient!text-white.nav-gradient"> Pricing</li>
          
//           <li className="relative text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white hover:nav-gradient!text-white.nav-gradient"> Pages</li>
          
//           <li className="relative text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white hover:nav-gradient!text-white.nav-gradient">Support</li>
          

//         </ul>
//       </div>
      
      
//       <div  className=' flex items-center gap-6 mt-7 lg:mt-0'>
        
//         <button className='button-border-gradient relative rounded-lg text-white text-sm flex items-center gap-1.5 py-2 px-4.5 shadow-button hover:button-gradient-hover hover:shadow-none'><a href="http:#"   className='button-border-gradient relative rounded-lg text-white text-sm flex items-center gap-1.5 py-2 px-4.5 shadow-button hover:button-gradient-hover hover:shadow-none '>
//         </a>  Sign  up</button>


//          <a href="http:#"  className=' text-white text-sm hover:text-opacity-75'>Sign in</a>
//         </div>
    
   
    
//     </section>
//     </header>
//   )
// }

// export default NavBar




// import React, { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-[#0B011A]/80 backdrop-blur-xl border-b border-white/10">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
//         {/* LEFT — LOGO */}
//         <div className="flex items-center gap-3">
//           <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
//             <span className="text-white font-bold text-lg">⚪</span>
//           </div>
//           <h1 className="text-white text-xl font-semibold tracking-wide">
//             AI Tool
//           </h1>
//         </div>

//         {/* Mobile Menu Icon */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="text-white text-2xl lg:hidden"
//         >
//           {open ? <X /> : <Menu />}
//         </button>

//         {/* CENTER — NAV LINKS */}
//         <nav
//           className={`${
//             open ? "flex" : "hidden"
//           } lg:flex flex-col lg:flex-row gap-6 absolute lg:static top-16 left-0 lg:top-auto w-full lg:w-auto bg-[#0B011A] lg:bg-transparent px-6 lg:px-0 py-6 lg:py-0 shadow lg:shadow-none`}
//         >
//           <a className="nav-item">Home</a>
//           <a className="nav-item">Features</a>
//           <a className="nav-item">Pricing</a>

//           {/* Pages Dropdown */}
//           <div className="relative group">
//             <button className="nav-item flex items-center gap-1">
//               Pages <ChevronDown size={16} />
//             </button>

//             <ul className="hidden group-hover:block absolute left-0 mt-2 bg-[#1A0F2E] border border-white/10 rounded-xl shadow-lg w-40 py-2">
//               <li className="dropdown-item">Blog</li>
//               <li className="dropdown-item">About</li>
//               <li className="dropdown-item">Team</li>
//               <li className="dropdown-item">Contact</li>
//             </ul>
//           </div>

//           <a className="nav-item">Support</a>

//           {/* Mobile Buttons */}
//           <div className="flex flex-col gap-3 lg:hidden mt-4">
//             <button className="btn-glass">Sign In</button>
//             <button className="btn-glow">Sign Up →</button>
//           </div>
//         </nav>

//         {/* RIGHT — Desktop Buttons */}
//         <div className="hidden lg:flex items-center gap-4">
//           <button className="btn-glass">Sign In</button>
//           <button className="btn-glow">Sign Up →</button>
//         </div>
//       </div>
//     </header>
//   );
// }









import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import {ArcadeLogo} from "./ArcadeLogo" // SVG

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkStyle =
    "px-4 py-2 text-white/70 hover:text-white transition-all duration-200";

  const activeStyle =
    "bg-white/10 text-white rounded-xl shadow-[0_0_10px_rgba(168,85,247,0.6)]";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0A0117]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <ArcadeLogo />
          <h1 className="text-white text-xl font-semibold">AI Arcade</h1>
        </div>

        {/* Mobile icon */}
        <button onClick={() => setOpen(!open)} className="text-white text-2xl lg:hidden">
          {open ? <X /> : <Menu />}
        </button>

        {/* Nav Links */}
        <nav
          className={`${
            open ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row gap-6 absolute lg:static 
          top-16 left-0 w-full lg:w-auto bg-[#0A0117] lg:bg-transparent px-6 lg:px-0 py-6 lg:py-0`}
        >

          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="#"
            className={({ isActive }) =>
              `${navLinkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            Features
          </NavLink>

          <NavLink
            to="#"
            className={({ isActive }) =>
              `${navLinkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            Pricing
          </NavLink>

          {/* Pages Dropdown */}
          <div className="relative group">
            <button className={`${navLinkStyle} flex items-center gap-1`}>
              Pages <ChevronDown size={16} />
            </button>

            <ul className="hidden group-hover:block absolute left-0 mt-2 bg-[#150225] border border-white/10 rounded-xl shadow-xl w-40 py-2">
              <NavLink to="/blog" className="dropdown-item">Blog</NavLink>
              <NavLink to="/about" className="dropdown-item">About</NavLink>
              <NavLink to="/team" className="dropdown-item">Team</NavLink>
              <NavLink to="/contact" className="dropdown-item">Contact</NavLink>
            </ul>
          </div>

          <NavLink
            to="#"
            className={({ isActive }) =>
              `${navLinkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            Support
          </NavLink>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 mt-5 lg:hidden">
            <NavLink to="/signin" className="btn-glass">Sign In</NavLink>
            <NavLink to="/signup" className="btn-glow">Sign Up →</NavLink>
          </div>
        </nav>

        {/* Desktop buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <NavLink to="/signin" className="btn-glass">Sign In</NavLink>
          <NavLink to="/signup" className="btn-glow">Sign Up →</NavLink>
        </div>
      </div>
    </header>
  );
}
