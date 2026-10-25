import React from "react";

function Hero() {
  return (
    <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
      {/* Poster */}
      <img
        src="/images/interstellar_poster.webp"
        alt="Interstellar Poster"
        className="w-full h-full object-cover"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-[#151925] via-[#151925]/60 to-transparent" />

      <div className="absolute left-5 bottom-15 md:left-10 md:bottom-30">
        <div className="bg-[#282144] text-[#B983DD] py-1 px-2 rounded-2xl w-fit text-[12px]">
            YOUR NEXT FAVORITE
        </div>
        <h1 className="text-3xl text-[#F8FAFC] mt-2">Stories beyond imagination.</h1>
        <p className="text-md text-[#949BAD] mt-2">Discover movies worth remembering.</p>

        {/* Btns */}
        <div className="mt-3 flex gap-2">
            <button className="bg-[#8B5CF6] py-3 px-5 rounded-2xl text-white cursor-pointer">
                Explore Movies
            </button>

            <button className="bg-transparent border-[#949BAD] border-1 py-3 px-5 rounded-2xl text-white cursor-pointer">
                View Favorites
            </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
