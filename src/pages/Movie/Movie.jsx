import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

function Movie() {
  const { id } = useParams();
  const API_KEY = import.meta.env.VITE_TMDB_TOKEN;

  const [movie, setMovie] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    setLoading(true);
    setNotFound(false);
    setMovie(null);

    fetch(`https://api.themoviedb.org/3/movie/${id}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === false || data.status_code === 34) {
          setNotFound(true);
        } else {
          setMovie(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });

    fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCast(data.cast?.slice(0, 12) || []));

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const officialTrailer = data.results?.find(
          (v) => v.type === "Trailer" && v.site === "YouTube"
        );
        setTrailer(officialTrailer || data.results?.[0]);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B0F19] text-white">
        Loading...
      </div>
    );
  }

  if (notFound) {
    return <NotFound />;
  }

  if (!movie) {
    return <NotFound />;
  }

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  const formatCurrency = (value) => {
    if (!value) return "N/A";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      {backdropUrl && (
        <div className="relative h-[50vh] md:h-[70vh]">
          <img
            src={backdropUrl}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-transparent" />
        </div>
      )}

      <div className="container mx-auto px-4 md:px-8 -mt-32 md:-mt-48 relative z-10 pb-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <img
              src={posterUrl}
              alt={movie.title}
              className="w-48 md:w-72 rounded-xl shadow-2xl"
            />
          </div>

          <div className="flex-1 pt-4 md:pt-16">
            <h1 className="text-3xl md:text-5xl font-bold">{movie.title}</h1>

            {movie.tagline && (
              <p className="mt-2 text-lg italic text-gray-400">
                "{movie.tagline}"
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4 mt-5 text-gray-300">
              <span className="flex items-center gap-1 text-yellow-400 font-semibold text-lg">
                ★ {movie.vote_average?.toFixed(1)}{" "}
                <span className="text-gray-400 text-sm font-normal">
                  ({movie.vote_count?.toLocaleString()} votes)
                </span>
              </span>
              <span>{movie.release_date}</span>
              <span>{movie.runtime} min</span>
              <span className="uppercase text-sm border border-gray-600 px-2 py-0.5 rounded">
                {movie.status}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-5">
              {movie.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-[#282144] text-[#B983DD] text-sm px-3 py-1 rounded-full"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <h2 className="mt-8 text-2xl font-semibold">Overview</h2>
            <p className="mt-3 text-gray-300 leading-relaxed max-w-3xl">
              {movie.overview || "No overview available."}
            </p>

            {trailer && (
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Trailer</h2>
                <div className="aspect-video max-w-3xl rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    title={trailer.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
              <div>
                <p className="text-gray-400 text-sm">Original Title</p>
                <p className="font-medium">{movie.original_title}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Original Language</p>
                <p className="font-medium uppercase">
                  {movie.original_language}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Budget</p>
                <p className="font-medium">{formatCurrency(movie.budget)}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Revenue</p>
                <p className="font-medium">{formatCurrency(movie.revenue)}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Popularity</p>
                <p className="font-medium">{movie.popularity?.toFixed(1)}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">IMDb ID</p>
                <p className="font-medium">
                  {movie.imdb_id ? (
                    <a
                      href={`https://www.imdb.com/title/${movie.imdb_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline"
                    >
                      {movie.imdb_id}
                    </a>
                  ) : (
                    "N/A"
                  )}
                </p>
              </div>
            </div>

            {movie.homepage && (
              <div className="mt-6">
                <a
                  href={movie.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-5 py-2 rounded-lg transition"
                >
                  Official Website
                </a>
              </div>
            )}

            {movie.production_companies?.length > 0 && (
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-3">
                  Production Companies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {movie.production_companies.map((company) => (
                    <span
                      key={company.id}
                      className="bg-[#151925] border border-gray-700 px-3 py-1.5 rounded-lg text-sm"
                    >
                      {company.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {movie.production_countries?.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">
                  Production Countries
                </h3>
                <p className="text-gray-300">
                  {movie.production_countries.map((c) => c.name).join(", ")}
                </p>
              </div>
            )}

            {movie.spoken_languages?.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">Spoken Languages</h3>
                <p className="text-gray-300">
                  {movie.spoken_languages.map((l) => l.english_name).join(", ")}
                </p>
              </div>
            )}
          </div>
        </div>

        {cast.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Cast</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {cast.map((person) => (
                <div
                  key={person.id}
                  className="group text-center cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={
                        person.profile_path
                          ? `https://image.tmdb.org/t/p/w342${person.profile_path}`
                          : "https://via.placeholder.com/342x513?text=No+Image"
                      }
                      alt={person.name}
                      className="w-full aspect-[2/3] object-cover transition-all duration-300 grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100 scale-100 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <p className="text-white text-sm font-medium px-2 text-center">
                        {person.character}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="font-semibold text-sm group-hover:text-[#22D3EE] transition-colors">
                      {person.name}
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5 line-clamp-1">
                      {person.character}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Movie;