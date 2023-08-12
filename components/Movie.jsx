import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { UserAuth } from "@/src/context/AuthContext";
import { db } from "@/app/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({item}) => {

  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`)

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true)
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        })
      })
    } else {
      alert("Please log in to save a movie");
    }
  }

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute left-0 top-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100">
        <p onClick={saveShow}>
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
