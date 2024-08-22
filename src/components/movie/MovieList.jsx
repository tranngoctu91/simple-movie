import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCart from "./MovieCart";

import { fetcher, apiUrl } from "../../config.js";
import useSWR from "swr";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const { data, error } = useSWR(apiUrl, fetcher);

  useEffect(() => {
    if (data) {
      setMovies(data.results);
    }
  }, [data]);

  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.some((s) => s) &&
          movies.map((item, index) => (
            <SwiperSlide key={item.id}>
              <MovieCart item={item}></MovieCart>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
