import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../services/movieApi";
import Hero from "../../components/Hero/Hero";
import MoviesSectionHome from "../../components/MoviesSectionHome/MoviesSectionHome";
import { Routes, Route } from "react-router-dom";
import Movies from "../Movies/Movies";

function Home() {
  const [popularLoading, setPopularLoading] = useState(true);
  const [popularError, setPopularError] = useState("");
  const [popularMovies, setPopularMovies] = useState([]);

  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [topRatedLoading, setTopRatedLoading] = useState(true);
  const [topRatedError, setTopRatedError] = useState("");

  useEffect(() => {
    fetchMovies("/movie/popular")
      .then(setPopularMovies)
      .catch((err) => setPopularError(err.message))
      .finally(() => setPopularLoading(false));

    fetchMovies("/movie/top_rated")
      .then(setTopRatedMovies)
      .catch((err) => setTopRatedError(err.message))
      .finally(() => setTopRatedLoading(false));
  }, []);

  return (
    <>
      <div className="p-4 md:p-8">
        <Hero />

        {/* Popular Movies */}
        <MoviesSectionHome
          movies={popularMovies}
          linkTo="/movies"
          title="Popular Movies"
          loading={popularLoading}
          error={popularError}
        />

        {/* Top Rated Movies */}
        <MoviesSectionHome
          movies={topRatedMovies}
          linkTo="/movies/top-rated"
          title="Top Rated Movies"
          loading={topRatedLoading}
          error={topRatedError}
        />
      </div>
    </>
  );
}

export default Home;
