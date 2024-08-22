import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config";
import { apiDetail } from "../config";

const MovieDetailPage = () => {
  const { movieId } = useParams();

  const { data } = useSWR(`${apiDetail}/${movieId}`, fetcher);
  if (!data) return null;
  return (
    <>
      <div className="w-full h-[600] relative mb-10">
        <div className="absolute inset-0 bg-black bg-opacity-5"></div>
        <div
          className="ww-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data?.backdrop_path})`,
          }}
        ></div>
      </div>
    </>
  );
};

export default MovieDetailPage;
