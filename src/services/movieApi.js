const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_W500 = "https://image.tmdb.org/t/p/w500";

export async function fetchMovies(endpoint) {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  const res = await fetch(`${BASE_URL}${endpoint}?language=en-US&page=1`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  const data = await res.json();

  return data.results.slice(0, 6).map((movie) => ({
    id: movie.id,
    title: movie.title,
    year: movie.release_date ? movie.release_date.slice(0, 4) : "N/A",
    rate: Math.round(movie.vote_average * 10) / 10,
    poster: movie.poster_path ? `${IMAGE_W500}${movie.poster_path}` : null,
  }));
}