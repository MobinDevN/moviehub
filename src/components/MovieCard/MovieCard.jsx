import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ id, title, poster, year, rate }) {
  return (
    <div className="w-full">
      <Link to={`/movie/${id}`}>
        <div className="aspect-[2/3] overflow-hidden rounded-lg">
          <img
            src={poster}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
          />
        </div>

        {title && (
          <h2 className="text-[#F8FAFC] text-lg mt-2 font-semibold">
            {" "}
            {title}{" "}
          </h2>
        )}

        <div className="text-[#949BAD]">
          <div className="text-[#949BAD]">
            {year} ·{" "}
            <span className="text-[#22D3EE]">
              {rate} <i className="fa-solid fa-star"></i>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
