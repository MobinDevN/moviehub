import React from "react";
import MovieCard from "../MovieCard/MovieCard";

function MoviesSection({ movies, title }) {
  return (
    <>
      <div className="mt-10 pb-20 md:pb-0">
        <div className="flex justify-between">
          <h2 className="text-xl text-[#F8FAFC] font-bold"> {title} </h2>

          <a href="#" className="text-[#22D3EE] flex gap-2 items-center">
            View all
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-4">
          {movies.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                title={movie.title}
                poster={movie.poster}
                year={movie.year}
                rate={movie.rate}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MoviesSection;
