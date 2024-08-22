import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCart = ({ item }) => {
  const { id, title, poster_path, vote_average, release_date } = item;
  const navigate = useNavigate();
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none">
      <img
        className="w-full h[250px] object-cover rounded-lg mb-5"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <div className="flex itens-center justify-between text-sm opacity-50 mb-10">
          <span>{release_date}</span>
          <span>{vote_average}</span>
        </div>
        <button
          onClick={() => navigate(`/movie/${id}`)}
          className="py-3 px-6 rounded-lg capitalize bg-primary w-full mt-auto"
        >
          Watch now
        </button>
      </div>
    </div>
  );
};

export default MovieCart;
