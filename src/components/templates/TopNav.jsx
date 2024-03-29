import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noimage from "/noimagejpg.jpg"


const TopNav = () => {
  const [query, setquery] = useState("");
  const [searches, setSearches] = useState([]);
  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);

      setSearches(data.results);
     
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className=" h-[10vh] relative flex justify-start items-center">
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        type="text"
        placeholder="search anything "
        className="w-[60%] p-2 bg-transparent text-zinc-200 mx-5 border-zinc-700 border-[0.1px] rounded-full  outline-none"
        value={query}
        onChange={(e) => setquery(e.target.value)}
      />
      {query.length > 0 && (
        <button onClick={() => setquery("")}>
          <i className="text-zinc-400 text-3xl ri-close-fill"> </i>
        </button>
      )}

      <div className="w-[50%] max-h-[50vh] bg-zinc-300 z-[1] absolute  top-[100%] left-[4.5%] overflow-auto">
        { searches &&searches.map((s) => (
          <Link to={`/${s.media_type}/details/${s.id}`} key={s.id} className="hover:text-black hover:bg-zinc-400 duration-300 font-semibold text-zinc-600 w-[100%] p-2 flex justify-start items-center border-b-2 border-zinc-100">

            <img 
            className="w-[8vh] h-[8vh] object-cover rounded-full shadow-lg "
            src={s.backdrop_path || s.profile_path || s.poster_path? `https://image.tmdb.org/t/p/original/${s.poster_path|| s.backdrop_path || s.profile_path } `: noimage} alt="" />
            <span>{s.name || s.title || s.original_name || s.original_title}</span>
          </Link>
        ))}

        {/* */}
      </div>
    </div>
  );
};

export default TopNav;
