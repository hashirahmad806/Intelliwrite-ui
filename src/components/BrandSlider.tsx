




export default function BrandSlider() {
  const logos = [
    
    
    { src: "/logos/databricks.svg", alt: "Databricks", link: "https://www.databricks.com" },
    { src: "/logos/amazon.svg", alt: "Amazon", link: "https://www.amazon.com" },
    { src: "/logos/facebook.svg", alt: "Facebook", link: "https://www.facebook.com" },
    { src: "/logos/tinder.svg", alt: "Tinder", link: "https://www.tinder.com" },
    { src: "/logos/airbnb.svg", alt: "Airbnb", link: "https://www.airbnb.com" },
  ];

  return (
    <div className="w-full overflow-hidden py-10 bg-[#050015]">
       <div className="absolute left-[12vw] right-[12vw] overflow-hidden">
      {/* SLIDER CONTAINER */}
      <div className="flex gap-16 whitespace-nowrap animate-marquee">
        
        {/* Duplicate array for infinite loop */}
        {[...logos, ...logos].map((logo, i) => (
          <a href={logo.link} key={i} target="_blank" className="min-w-[120px] flex justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="
                h-10 w-auto  object-contain
                filter brightness-0 invert 
                opacity-60 hover:opacity-100 
                transition duration-300
             
              "
            />
          </a>
        ))}
          </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          display: inline-flex;
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </div>
  );
}

