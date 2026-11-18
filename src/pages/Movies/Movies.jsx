import React, { useState, useEffect } from "react";
import MoviesSection from "../../components/MoviesSection/MoviesSection";
import { fetchMovies } from "../../services/movieApi";

function Movies() {
  const [popularLoading, setPopularLoading] = useState(true);
  const [popularError, setPopularError] = useState("");
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchMovies("/movie/popular")
      .then(setPopularMovies)
      .catch((err) => setPopularError(err.message))
      .finally(() => setPopularLoading(false));
  }, []);

  return (
    <div>
      <MoviesSection
        movies={popularMovies}
        title="Popular Movies"
        loading={popularLoading}
        error={popularError}
      />
    </div>
  );
}

export default Movies;
