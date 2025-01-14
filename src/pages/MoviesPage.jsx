import React from "react";
import MovieList from "../components/movie/MovieList";
import { fetcher, apiUrl } from "../config.js";
import useSWR from "swr";
import MovieCart from "../components/movie/MovieCart.jsx";

const MoviesPage = () => {
  const { data } = useSWR(apiUrl, fetcher);
  const movies = data?.results || [];

  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Type here ..."
            className="w-full p-4 bg-slate-800 text-white outline-none"
          />
        </div>
        <button className="p-4 bg-primary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 &&
          movies.map((s) => <MovieCart key={s.id} item={s}></MovieCart>)}
      </div>
    </div>
  );
};

export default MoviesPage;
