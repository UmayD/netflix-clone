"use client";
import React from "react";
import movieRequest from "@/src/utils/MovieRequests";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const MainContent = () => {
  const { data, error } = useSWR(movieRequest.requestPopular, fetcher);

  if (error) return <div className="text-white">Failed to load</div>;
  if (!data) return <div className="text-white">Loading...</div>;

  const movies = data.results;
  const rndmMovie = movies[Math.floor(Math.random() * movies.length)]; // Pick a random movie

  const truncateStr = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original${rndmMovie?.poster_path}`}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">
            {rndmMovie?.original_title}
          </h1>
          <div className="my-4">
            <button className="border bg-gray-300 border-gray-300 text-black py-2 px-5">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {rndmMovie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] sm:max-w-[30%] text-gray-200">
            {truncateStr(rndmMovie?.overview, 100)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
