import React from "react";

function MovieCard({ title, poster, year, rate }) {
  return (
    <div className="w-full">
      <div className="aspect-[2/3] overflow-hidden rounded-lg">
        <img
          src={poster}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
        />
      </div>

      {title && (
        <h2 className="text-[#F8FAFC] text-lg mt-2 font-semibold"> {title} </h2>
      )}

      <div className="text-[#949BAD]">
        {year && rate && (
          <div className="text-[#949BAD]">
            {year} ·{" "}
            <span className="text-[#22D3EE]">
              {rate} <i className="fa-solid fa-star"></i>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
