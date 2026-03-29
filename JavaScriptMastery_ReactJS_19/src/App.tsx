import { useState, useEffect, useCallback } from "react";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import { MovieCard } from "./components/MovieCard";
import { useDebounce } from "react-use";
import {
  updateSearchCount,
  type UpdateSearchCountProps,
  getTrendingMovies,
} from "./appwrite";
import type { Movie, TMDBResponse, TrendingMovie, ApiOptions } from "./types";
import { getErrorMessage, APIError } from "./utils/errors";

const API_BASE_URL = "https://api.themoviedb.org/3";

// Validate and get API key
const getApiKey = (): string => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  if (!apiKey) {
    throw new Error("Missing VITE_TMDB_API_KEY environment variable");
  }
  return apiKey;
};

const API_KEY = getApiKey();

const API_OPTIONS: ApiOptions = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    accept: "application/json",
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [trendingMovies, setTrendingMovies] = useState<TrendingMovie[]>([]);
  const [loading, setLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useDebounce(
    () => {
      setDebouncedSearchTerm(searchTerm);
    },
    500,
    [searchTerm],
  );

  const fetchMovies = useCallback(async (query = ""): Promise<void> => {
    setLoading(true);
    setErrorMessage("");

    try {
      const endPoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endPoint, API_OPTIONS);
      if (!response.ok) {
        throw new APIError(
          response.status,
          `Failed to fetch movies: ${response.statusText}`,
        );
      }

      const data = (await response.json()) as TMDBResponse;
      if (data.Response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies.");
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);

      if (query && data.results && data.results.length > 0) {
        const updateData: UpdateSearchCountProps = {
          searchTerm: query,
          movie: {
            id: data.results[0].id,
            poster_path: data.results[0].poster_path,
          },
        };

        await updateSearchCount(updateData);
      }
    } catch (error) {
      const errorMsg = getErrorMessage(error);
      console.error(`Error fetching movies: ${errorMsg}`);
      setErrorMessage("Failed to fetch movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchTrendingMovies = useCallback(async (): Promise<void> => {
    try {
      const result = await getTrendingMovies();
      setTrendingMovies(result);
    } catch (error) {
      const errorMsg = getErrorMessage(error);
      console.error("Error fetching trending movies:", errorMsg);
    }
  }, []);

  function fnSearchTerm(searchTerm: string): void {
    setSearchTerm(searchTerm);
  }

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm, fetchMovies]);

  useEffect(() => {
    fetchTrendingMovies();
  }, [fetchTrendingMovies]);

  return (
    <main>
      <div className="wrapper">
        <header>
          <img src="/hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
          <Search searchText={searchTerm} fnSearchTerm={fnSearchTerm} />
        </header>

        {trendingMovies.length > 0 && (
          <section className="trending">
            <h2>Trending Movies</h2>

            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.title} />
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="all-movies">
          <h2>All Movies</h2>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          {loading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
