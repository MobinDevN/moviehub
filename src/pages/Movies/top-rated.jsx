import React, { useState, useEffect } from "react";
import MoviesSection from "../../components/MoviesSection/MoviesSection";
import { fetchMovies } from "../../services/movieApi";

function Movies() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [topRatedLoading, setTopRatedLoading] = useState(true);
  const [topRatedError, setTopRatedError] = useState("");

  useEffect(() => {
    fetchMovies("/movie/top_rated")
      .then(setTopRatedMovies)
      .catch((err) => setTopRatedError(err.message))
      .finally(() => setTopRatedLoading(false));
  }, []);

  return (
    <div>
      <MoviesSection
        movies={topRatedMovies}
        title="Top Rated Movies"
        loading={topRatedLoading}
        error={topRatedError}
      />
    </div>
  );
}

export default Movies;
