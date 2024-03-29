import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import { data } from "autoprefixer";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";


const Trending = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title="IMDB | Trending"
  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
     if(data.results.length>0){

         setpage(page + 1);
         settrending((prev) => [...prev, ...data.results]);
     }else{
        sethasMore(false)
     }

    } catch (error) {
      console.log("error: ", error);
    }
  };
  console.log(trending);

  const refereshHandler= async ()=>{
    if(trending.length===0){
        GetTrending();
    }
    else{
        setpage(1);
        settrending([])
        GetTrending()
    }
  }


  useEffect(() => {
    refereshHandler()
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full  flex items-center px-[5%]">
        <h1 className="text-2xl w-[50%] text-zinc-400 font-semibold ">
          <i
            className="hover:text-[#6556CD] ri-arrow-left-line mr-1"
            onClick={() => navigate(-1)}
          ></i>
          Trending
        </h1>
        <div></div>
        <div className="w-[100%] ">
          <TopNav />
        </div>
        <div></div>

        <Dropdown
          title={"category"}
          options={["movie", "tv", "all"]}
          func={(e) => setcategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
        <Dropdown
          title={"Duration"}
          options={["week", "day"]}
          func={(e) => setduration(e.target.value)}
        />
      </div>
      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasMore}
        loader={<h1>Loading</h1>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
