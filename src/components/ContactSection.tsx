
export default function ContactSection() {
  return (
    <section className="w-full py-24 bg-[#060014] flex justify-center px-4">
      <div className="w-full max-w-4xl text-center relative">

        {/* Top Glow Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] max-w-[600px] h-[200px] bg-purple-700/20 blur-3xl rounded-full"></div>

        {/* Text Heading */}
        <p className="text-gray-300 text-sm mb-2">✨ Need Any Help?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Contact With Us
        </h2>

        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-10">
          Our AI writing tool is designed to empower you with exceptional writing 
          capabilities, making the writing process more efficient and enjoyable.
        </p>

        {/* Glass Card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-[0_0_40px_rgba(80,0,180,0.15)]">

          {/* Name + Email Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="text-left">
              <label className="text-gray-300 text-sm">Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full mt-2 p-3 bg-transparent border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 outline-none"
              />
            </div>

            <div className="text-left">
              <label className="text-gray-300 text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full mt-2 p-3 bg-transparent border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 outline-none"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className="text-left mb-6">
            <label className="text-gray-300 text-sm">Message</label>
            <textarea
              rows={5}
              placeholder="Type your message"
              className="w-full mt-2 p-3 bg-transparent border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 outline-none"
            ></textarea>
          </div>

          {/* Button */}
          <div className="text-center">
            <button className="px-10 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium shadow-lg hover:opacity-90 transition">
              Send Message
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
