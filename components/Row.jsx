"use client";
import React from "react";
import useSWR from "swr";
import Movie from "./Movie";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Row = ({ title, fetchURL, rowID }) => {
  const { data, error } = useSWR(fetchURL, fetcher);

  if (error) return <div className="text-white">Failed to load</div>;
  if (!data) return <div className="text-white">Loading...</div>;

  const movies = data.results;

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <NavigateBeforeIcon
          onClick={slideLeft}
          className="bg-white rounded-xl left-2 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 invisible group-hover:visible"
          sx={{ width: "2.5%", height: "30%" }}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll no-scrollbar whitespace-nowrap scroll-smooth relative"
        >
          {movies.map((item, id) => {
            return <Movie key={id} item={item} />;
          })}
        </div>
        <NavigateNextIcon
          onClick={slideRight}
          className="bg-white rounded-xl right-2 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 invisible group-hover:visible"
          sx={{ width: "2.5%", height: "30%" }}
        />
      </div>
    </>
  );
};

export default Row;
