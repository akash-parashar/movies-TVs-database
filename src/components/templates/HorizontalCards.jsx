import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import noimage from "/noimagejpg.jpg"

const HorizontalCards = ({ data}) => {
  return (
    
      
      <div className="w-[100%]  gap-2 flex overflow-y-hidden px-4  ">
        {data.length>0? data.map((d,i) => (
          <Link to={`${d.media_type}/details/${d.id}`} key={i}
          className="min-w-[15%] mr-5 h-[40vh]   bg-zinc-900 "
          >
                <img className=" w-full h-[55%] object-cover"  src= { d.backdrop_path || d.poster_path ? `https://image.tmdb.org/t/p/original/${
          d.poster_path || d.backdrop_path || d.profile_path
        }`:noimage} alt="" />

            <div className="text-white" >


           <h1 className=" text-xl font-semibold  mb-1">
        {d.name || d.title || d.original_name || d.original_title}
      </h1>
      <p className=" ">
        {d.overview.slice(0,50)}
        <span className="text-zinc-500"> more...</span>
      </p>
          

            </div>
           </Link>
        )):    <h1 className="text-white text-center mt-5 font-black tex-3xl">
        No Recommendations
      </h1>}
      </div>
   
  );
};

export default HorizontalCards;
