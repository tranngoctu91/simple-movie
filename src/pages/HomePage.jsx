import React from "react";
import MovieList from "../components/movie/MovieList";
import Banner from "../components/banner/Banner";

const HomePage = () => {
  return (
    <>
      <section className="movie-layout page-container mb-20">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">
          Nowplaying
        </h2>

        <MovieList></MovieList>
      </section>

      <section className="movie-layout page-container mb-20">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">
          Top rated
        </h2>
        <MovieList></MovieList>
      </section>

      <section className="movie-layout page-container mb-20">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">
          Trending
        </h2>
        <MovieList></MovieList>
      </section>
    </>
  );
};

export default HomePage;
