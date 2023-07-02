"use client";
import React, { useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Row = ({ title, fetchURL }) => {
  const { data, error } = useSWR(fetchURL, fetcher);

  if (error) return <div className="text-white">Failed to load</div>;
  if (!data) return <div className="text-white">Loading...</div>;

  const movies = data.results;

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {movies.map((item, id) => {
            return (
              <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
                  alt={item?.title}
                />
                <div className="absolute left-0 top-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100">
                  <p className="text-white md:text-sm whitespace-normal font-bold flex justify-center items-center h-full text-center">{item?.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Row;
