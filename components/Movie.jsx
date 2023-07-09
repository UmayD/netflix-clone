import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Movie = ({item}) => {

  const [like, setLike] = useState(false);

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute left-0 top-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100">
        <p>
          {like ? (
            <FavoriteIcon className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FavoriteBorderIcon className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
        <p className="text-white md:text-sm whitespace-normal font-bold flex justify-center items-center h-full text-center">
          {item?.title}
        </p>
      </div>
    </div>
  );
};

export default Movie;
