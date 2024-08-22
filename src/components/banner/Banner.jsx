import React from "react";
import { fetcher, apiUrl } from "../../config";
import { SwiperSlide, Swiper } from "swiper/react";
import { PropTypes } from "prop-types";
import useSWR from "swr";

const Banner = () => {
  const { data } = useSWR(apiUrl, fetcher);

  const movies = data?.results || [];
  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
      <Swiper>
        {movies.some((s) => true) &&
          movies.map((item, index) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

const BannerItem = ({ item }) => {
  // eslint-disable-next-line react/prop-types
  const { id, title, poster_path } = item;
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg bg-opacity-10"></div>
      <img
        className="w-full h-full object-cover rounded-lg object-top"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{title} </h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="p-4 border border-white rounded-lg">Adventure</span>
          <span className="p-4 border border-white rounded-lg">Adventure</span>
          <span className="p-4 border border-white rounded-lg">Adventure</span>
        </div>
        <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
          Watch Now
        </button>
      </div>
    </div>
  );
};
Banner.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.number,
  vote_average: PropTypes.number,
};
export default Banner;
