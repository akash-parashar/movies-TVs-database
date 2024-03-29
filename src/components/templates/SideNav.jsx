import axios from "../../utils/axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
 

  return (
    <div className="w-[20%] h-full border-r-[2px] border-zinc-400 p-4 ">
      <h1 className="text-2xl text-white font-bold ">
        <i className="text-[#6556CD] ri-tv-fill mr-3"></i>
        <span className="text-2xl">IMDB</span>
      </h1>
      <nav className="flex flex-col text-zinc-400  gap-[1px] ">
        <h1 className="text-white font-semibold text-xl mt-10 mb-3">
          New Feeds
        </h1>
        <Link to={"/trending"} className="hover:bg-[#6556CD] hover:text-white p-5 duration-300 rounded-lg">
          <i className="mr-3 ri-fire-fill"></i>
          Trending
        </Link>
        <Link to={"/popular"} className="hover:bg-[#6556CD] hover:text-white p-5 duration-300 rounded-lg">
        <i className="ri-bard-fill mr-3"></i>
          Popular
        </Link>
        <Link to={"/movie"} className="hover:bg-[#6556CD] hover:text-white p-5 duration-300 rounded-lg">
        <i className="ri-movie-2-line mr-3"></i>
          Movies
        </Link>
        <Link to={"/tvshows"} className="hover:bg-[#6556CD] hover:text-white p-5 duration-300 rounded-lg">
        <i className="ri-tv-2-fill mr-3"></i>
          TV Shows
        </Link>
        <Link to={"/person"} className="hover:bg-[#6556CD] hover:text-white p-5 duration-300 rounded-lg">
        <i className="ri-team-line mr-3"></i>
          people
        </Link>
      </nav>
      <hr  className="border-none h-[1px] bg-zinc-400 mt-2"/>
      <nav className="flex flex-col text-zinc-400  gap-[2px] ">
        <h1 className="text-white font-semibold text-xl mt-5 mb-3">
       Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white p-5 duration-300 rounded-lg">
        <i className="ri-information-fill mr-2"></i>
          About
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white p-5 duration-300 rounded-lg">
        <i className="mr-2 ri-phone-fill "></i>
          Contact Us
        </Link>
      
      </nav>
    </div>
  );
};

export default SideNav;
