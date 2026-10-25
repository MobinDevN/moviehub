import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import MoviesSection from "./components/MoviesSection/MoviesSection";

function App() {
  const popularMovies = [
    {
      id: 1,
      title: "Interstellar",
      year: 2014,
      rate: 8.7,
      poster: "./images/movies/interstellar.jpeg",
    },
    {
      id: 2,
      title: "Inception",
      year: 2010,
      rate: 8.8,
      poster: "./images/movies/Inception.webp",
    },
    {
      id: 3,
      title: "Dune",
      year: 2024,
      rate: 8.5,
      poster: "./images/movies/Dune.webp",
    },
    {
      id: 4,
      title: "Interstellar",
      year: 2014,
      rate: 8.7,
      poster: "./images/movies/interstellar.jpeg",
    },
    {
      id: 5,
      title: "Inception",
      year: 2010,
      rate: 8.8,
      poster: "./images/movies/Inception.webp",
    },
    {
      id: 6,
      title: "Dune",
      year: 2024,
      rate: 8.5,
      poster: "./images/movies/Dune.webp",
    },
  ];

  const topRatedMovies = [
    {
      id: 1,
      title: "Interstellar",
      year: 2014,
      rate: 8.7,
      poster: "./images/movies/interstellar.jpeg",
    },
    {
      id: 2,
      title: "Inception",
      year: 2010,
      rate: 8.8,
      poster: "./images/movies/Inception.webp",
    },
    {
      id: 3,
      title: "Dune",
      year: 2024,
      rate: 8.5,
      poster: "./images/movies/Dune.webp",
    },
    {
      id: 4,
      title: "Interstellar",
      year: 2014,
      rate: 8.7,
      poster: "./images/movies/interstellar.jpeg",
    },
    {
      id: 5,
      title: "Inception",
      year: 2010,
      rate: 8.8,
      poster: "./images/movies/Inception.webp",
    },
    {
      id: 6,
      title: "Dune",
      year: 2024,
      rate: 8.5,
      poster: "./images/movies/Dune.webp",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="p-4 md:p-8">
        <Hero />

        {/* Popular Movies */}
        <MoviesSection movies={popularMovies} title="Popular Movies" />

        {/* Top Rated Movies */}
        <MoviesSection movies={topRatedMovies} title="Top Rated Movies" />
      </div>

      <Footer />
    </>
  );
}

export default App;
