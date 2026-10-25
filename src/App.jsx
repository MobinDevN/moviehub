import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import MoviesSection from "./components/MoviesSection/MoviesSection";
import { fetchMovies } from "./services/movieApi";

function App() {
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
      <Navbar />

      <div className="p-4 md:p-8">
        <Hero />

        {/* Popular Movies */}
        <MoviesSection
          movies={popularMovies}
          title="Popular Movies"
          loading={popularLoading}
          error={popularError}
        />

        {/* Top Rated Movies */}
        <MoviesSection
          movies={topRatedMovies}
          title="Top Rated Movies"
          loading={topRatedLoading}
          error={topRatedError}
        />
      </div>

      <Footer />
    </>
  );
}

export default App;
