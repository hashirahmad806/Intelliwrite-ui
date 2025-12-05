








import React from "react";

function Signup() {
  return (
    <section className="flex flex-col justify-center items-center py-20 bg-[#030014] px-4">

      {/* Header */}
      <div className="text-center px-4 py-10 mb-10">
        <h1 className="font-extrabold text-white text-6xl mb-6">Sign up</h1>
        <div className="flex items-center justify-center gap-2 text-xl font-bold text-gray-300">
          Home / Sign up
        </div>
      </div>

      {/* MAIN WRAPPER */}
      <div className="flex flex-col lg:flex-row justify-center items-center bg-[#100d20] max-w-[1110px] w-full mx-auto rounded-lg overflow-hidden">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-[#100d20]">
          <div className="relative py-20 px-16">

            <h2 className="max-w-[292px] font-bold text-white text-4xl mb-10">
              Unlock the Power of Writing Tool
            </h2>

            <div className="flex justify-center">
              <img
                src="https://ai-tool-tailwind.preview.uideck.com/images/sigin.svg"
                alt="About illustration"
                className="w-full max-w-[450px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="relative w-full lg:w-1/2 py-12 px-6 sm:px-12">

          {/* Vertical Divider (Large Screen Only) */}
          <span className="hidden lg:block absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-white/0 via-white/20 to-white/0"></span>

          <div className="w-full max-w-md mx-auto  p-8 rounded-2xl shadow-xl">

            {/* Google */}
            <button className="w-full flex items-center justify-center gap-3 py-3 font-medium text-white rounded-xl border border-white/20 transition hover:border-purple hover:bg-white/5">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                className="w-5 h-5"
                alt="google"
              />
              Sign in with Google
            </button>

            {/* Apple */}
            <button className="w-full mt-4 flex items-center justify-center gap-3 py-3 font-medium text-white rounded-xl border border-white/20 transition hover:border-purple hover:bg-white/5">
              <img
                src="https://cdn-icons-png.flaticon.com/512/0/747.png"
                className="w-5 h-5 invert"
                alt="apple"
              />
              Sign in with Apple
            </button>

            {/* GitHub */}
            <button className="w-full mt-4 flex items-center justify-center gap-3 py-3 font-medium text-white rounded-xl border border-white/20 transition hover:border-purple hover:bg-white/5">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                className="w-5 h-5 invert"
                alt="github"
              />
              Sign in with GitHub
            </button>

            {/* Divider */}
            <div className="relative text-center my-8">
              <span className="absolute left-0 top-1/2 w-28 h-[1px] bg-white/20"></span>
              <p className="text-sm text-gray-300">Or sign up with email</p>
              <span className="absolute right-0 top-1/2 w-28 h-[1px] bg-white/20"></span>
            </div>

            {/* INPUT FIELDS */}
            <div className="space-y-4">

              {/* Name field */}
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent border border-white/20 rounded-xl py-3.5 px-4 text-white placeholder-gray-400 outline-none transition hover:border-purple focus:border-purple focus:shadow-[0_0_15px_rgba(128,0,255,0.4)]"
              />

              {/* Email field */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-white/20 rounded-xl py-3.5 px-4 text-white placeholder-gray-400 outline-none transition hover:border-purple focus:border-purple focus:shadow-[0_0_15px_rgba(128,0,255,0.4)]"
              />

              {/* Password field */}
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full bg-transparent border border-white/20 rounded-xl py-3.5 px-4 text-white placeholder-gray-400 outline-none transition hover:border-purple focus:border-purple focus:shadow-[0_0_15px_rgba(128,0,255,0.4)]"
              />
            </div>

            {/* Signup Button */}
            <button className="w-full mt-6 py-3.5 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition">
              Sign up with AI Tool
            </button>

            {/* Login link */}
            <p className="text-center text-sm text-gray-400 mt-4">
              Already have an account?{" "}
              <a href="#" className="text-purple-400 hover:underline">
                Sign in Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
