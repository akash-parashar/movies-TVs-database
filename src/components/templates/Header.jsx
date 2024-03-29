import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  // console.log(data);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${
          data.poster_path || data.profile_path || data.backdrop_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat"
        
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-10 gap-4"
    >
      <h1 className="w-[70%] text-5xl font-black text-white">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="text-white w-[70%]">
        {data.overview.slice(0,200)}
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">more...</Link>
      </p>
      <p className="text-white">
        <i className="text-yellow-500 ri-megaphone-fill">{data.release_date || "release date yet to be announced"}</i>
        <i className="text-yellow-500 ml-5 ri-album-fill">{data.media_type.toUpperCase()}</i>

      </p>
      <Link to={`/${data.media_type}/details/${data.id}/trailer`}  className=" bg-[#6556CD] p-4 rounded text-white" >Watch Trailer</Link>
    </div>
  );
};

export default Header;
