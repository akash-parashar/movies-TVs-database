import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimagejpg.jpg"

const Cards = ({ data,title }) => {
  return (
    <div className=" flex flex-wrap w-full h-full px-[10%] py-5 bg-[#1F1E24]">
      {data.map((c, i) => (
        <Link to={`/${c.media_type || title}/details/${c.id}`}  className="relative w-[25vh]  mr-[5%] mb-[5%]"  key={i}>
            <img className="h-[40vh]  object-cover" src= { c.backdrop_path || c.poster_path || c.profile_path ? `https://image.tmdb.org/t/p/original/${
          c.poster_path || c.backdrop_path || c.profile_path
        }`:noimage} alt="" />
            <h1 className="text-zinc-400 text-2xl font-semibold mt-2 ">
          {c.name || c.title || c.original_name || c.original_title}{" "}
            </h1>

          {c.vote_average && 
            <div className="absolute right-[-7%] bottom-[30%] bg-yellow-600 rounded-full text-white w-[5vh] h-[5vh] flex justify-center items-center" >{(c.vote_average*10).toFixed()} <sup>%</sup> </div>}

        </Link>
      ))}
    </div>
  );
};

export default Cards;
