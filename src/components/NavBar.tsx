

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Menu, X, ChevronDown } from "lucide-react";
// import {ArcadeLogo} from "./ArcadeLogo" // SVG

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const navLinkStyle =
//     "px-4 py-2 text-white/70 hover:text-white transition-all duration-200";

//   const activeStyle =
//     "bg-white/10 text-white rounded-xl shadow-[0_0_10px_rgba(168,85,247,0.6)]";

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-[#0A0117]/80 backdrop-blur-xl border-b border-white/10">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
//         {/* Logo + Name */}
//         <div className="flex items-center gap-3">
//           <ArcadeLogo />
//           <h1 className="text-white text-xl font-semibold">AI Arcade</h1>
//         </div>

//         {/* Mobile icon */}
//         <button onClick={() => setOpen(!open)} className="text-white text-2xl lg:hidden">
//           {open ? <X /> : <Menu />}
//         </button>

//         {/* Nav Links */}
//         <nav
//           className={`${
//             open ? "flex" : "hidden"
//           } lg:flex flex-col lg:flex-row gap-6 absolute lg:static
//           top-16 left-0 w-full lg:w-auto bg-[#0A0117] lg:bg-transparent px-6 lg:px-0 py-6 lg:py-0`}
//         >

//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `${navLinkStyle} ${isActive ? activeStyle : ""}`
//             }
//           >
//             Home
//           </NavLink>

//           <NavLink
//             to="#features"
//             className={({ isActive }) =>
//               `${navLinkStyle} ${isActive ? activeStyle : ""}`
//             }
//           >
//             Features
//           </NavLink>

//           <NavLink
//             to="#"
//             className={({ isActive }) =>
//               `${navLinkStyle} ${isActive ? activeStyle : ""}`
//             }
//           >
//             Pricing
//           </NavLink>

//           {/* Pages Dropdown */}
//           <div className="relative group">
//             <button className={`${navLinkStyle} flex items-center gap-1`}>
//               Pages <ChevronDown size={16} />
//             </button>

//             <ul className="hidden group-hover:block absolute left-0 mt-2 bg-[#150225] border border-white/10 rounded-xl shadow-xl w-40 py-2">
//               <NavLink to="/blog" className="dropdown-item">Blog</NavLink>
//               <NavLink to="/about" className="dropdown-item">About</NavLink>
//               <NavLink to="/team" className="dropdown-item">Team</NavLink>
//               <NavLink to="/contact" className="dropdown-item">Contact</NavLink>
//             </ul>
//           </div>

//           <NavLink
//             to="#"
//             className={({ isActive }) =>
//               `${navLinkStyle} ${isActive ? activeStyle : ""}`
//             }
//           >
//             Support
//           </NavLink>

//           {/* Mobile Buttons */}
//           <div className="flex flex-col gap-3 mt-5 lg:hidden">
//             <NavLink to="/signin" className="btn-glass">Sign In</NavLink>
//             <NavLink to="/signup" className="btn-glow">Sign Up →</NavLink>
//           </div>
//         </nav>

//         {/* Desktop buttons */}
//         <div className="hidden lg:flex items-center gap-4">
//           <NavLink to="/signin" className="btn-glass">Sign In</NavLink>
//           <NavLink to="/signup" className="btn-glow">Sign Up →</NavLink>
//         </div>
//       </div>
//     </header>
//   );
// }











import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { ArcadeLogo } from "./ArcadeLogo"; // SVG

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const location = useLocation();

  const pagesRoutes = ["/blog", "/about", "/team", "/contact"];

  const navLinkStyle =
    "px-4 py-2 text-white/70 hover:text-white transition-all duration-200";

  const activeStyle =
    "bg-white/10 text-white rounded-xl shadow-[0_0_10px_rgba(168,85,247,0.6)]";

  const handleMobileClick = () => {
    setOpen(false);
    setPagesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".pages-dropdown")) {
        setPagesOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0A0117]/80 backdrop-blur-xl border-b border-white/10  sm:mb-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <ArcadeLogo />
          <h1 className="text-white text-xl font-semibold">AI Arcade</h1>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-2xl lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>

        {/* Navigation */}
        <nav
          className={`${
            open ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row gap-6 absolute lg:static 
          top-16 left-0 w-full lg:w-auto bg-[#0A0117] lg:bg-transparent px-6 lg:px-0 py-6 lg:py-0`}
        >
          <NavLink
            to="/"
            onClick={handleMobileClick}
            className={({ isActive }) =>
              `${navLinkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            Home
          </NavLink>

          {/* Same Page Scroll Links */}
          <a href="#features" onClick={handleMobileClick} className={navLinkStyle}>
            Features
          </a>

          <a href="#pricing" onClick={handleMobileClick} className={navLinkStyle}>
            Pricing
          </a>

          {/* Pages Dropdown */}
          <div className="relative pages-dropdown group">

            {/* Button */}
            <button
              className={`${navLinkStyle} flex items-center gap-1 w-full justify-between lg:w-auto ${
                pagesRoutes.includes(location.pathname) ? activeStyle : ""
              }`}
              onClick={() => setPagesOpen(!pagesOpen)}
            >
              Pages <ChevronDown size={16} />
            </button>

            {/* Desktop Hover Menu (FIXED, NO STUCK DROPDOWN) */}
            <ul className="absolute left-0 mt-2 bg-[#150225] border border-white/10 rounded-xl shadow-xl w-40 py-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 hidden lg:block">
              {pagesRoutes.map((route) => (
                <NavLink
                  key={route}
                  to={route}
                  className={({ isActive }) =>
                    `block px-4 py-2 text-white/70 hover:text-white ${isActive ? activeStyle : ""}`
                  }
                >
                  {route.replace("/", "").charAt(0).toUpperCase() + route.slice(2)}
                </NavLink>
              ))}
            </ul>

            {/* Mobile Click Dropdown */}
            {pagesOpen && (
              <ul className="lg:hidden absolute left-0 mt-2 bg-[#150225] border border-white/10 rounded-xl shadow-xl w-full py-2 flex flex-col z-50">
                {pagesRoutes.map((route) => (
                  <NavLink
                    key={route}
                    to={route}
                    className="block px-4 py-2 text-white/70 hover:text-white"
                    onClick={handleMobileClick}
                  >
                    {route.replace("/", "").charAt(0).toUpperCase() + route.slice(2)}
                  </NavLink>
                ))}
              </ul>
            )}
          </div>

          {/* Support Link */}
          <a href="#support" onClick={handleMobileClick} className={navLinkStyle}>
            Support
          </a>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 mt-5 lg:hidden">
            <NavLink to="/signin" className="btn-glass" onClick={handleMobileClick}>
              Sign In
            </NavLink>
            <NavLink to="/signup" className="btn-glow" onClick={handleMobileClick}>
              Sign Up →
            </NavLink>
          </div>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <NavLink to="/signin" className="btn-glass">
            Sign In
          </NavLink>
          <NavLink to="/signup" className="btn-glow">
            Sign Up →
          </NavLink>
        </div>
      </div>
    </header>
  );
}
