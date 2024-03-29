import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";
import Dropdown from "./templates/Dropdown";
import TopNav from "./templates/TopNav";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";


const Tvshows = () => {
    document.title = "IMDB | tv";
    const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    // const [duration, setduration] = useState("day");
    const [tv, setmovie] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
  
    const GetTv = async () => {
      try {
        const { data } = await axios.get(`/tv/${category}?page=${page}`);
        if (data.results.length > 0) {
          setpage(page + 1);
          setmovie((prev) => [...prev, ...data.results]);
        } else {
          sethasMore(false);
        }
      } catch (error) {
        console.log("error: ", error);
      }
    };
    // console.log(tv);
  
    const refereshHandler = async () => {
      if (tv.length === 0) {
        GetTv();
      } else {
        setpage(1);
        setmovie([]);
        GetTv();
      }
    };
  
    useEffect(() => {
      refereshHandler();
    }, [category]);
  
    return tv.length > 0 ? (
      <div className="w-screen h-screen">
        <div className="w-full  flex items-center px-[5%]">
          <h1 className="text-2xl w-[50%] text-zinc-400 font-semibold ">
            <i
              className="hover:text-[#6556CD] ri-arrow-left-line mr-1"
              onClick={() => navigate(-1)}
            ></i>
            Movie({category.replace("_", " ")})
          </h1>
          <div></div>
          <div className="w-[100%] ">
            <TopNav />
          </div>
          <div></div>
  
          <Dropdown
            title={"category"}
            options={["on_the_air", "popular", "top_rated", "airing_today"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
        <InfiniteScroll
          dataLength={tv.length}
          next={GetTv}
          hasMore={hasMore}
          loader={<h1>Loading</h1>}
        >
          <Cards data={tv} title="tv"/>
        </InfiniteScroll>
      </div>
    ) : (
      <Loading />
    );
  };
  


export default Tvshows