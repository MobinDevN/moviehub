import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Link } from "react-router-dom";

function MoviesSection({ movies, title, error, loading }) {
  return (
    <>
      <div className="mt-5 p-4 md:p-8">
        <div className="flex justify-between">
          <h1 className="text-4xl text-[#F8FAFC] font-bold"> {title} </h1>
        </div>
        {loading && <p className="text-[#F8FAFC]">Loading ...</p>}

        {!loading && error && (
          <p className="text-red-500">Failed to load: {error}</p>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-8">
          {!loading &&
            !error &&
            movies.map((movie) => {
              return (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
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
