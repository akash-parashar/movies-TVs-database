import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "../utils/axios";
import Loading from './Loading';
import Dropdown from './templates/Dropdown';
import TopNav from './templates/TopNav';
import Cards from './templates/Cards';
import InfiniteScroll from "react-infinite-scroll-component";


const Popular = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  // const [duration, setduration] = useState("day");
  const [popular, setpopular] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  document.title="IMDB | Popular"
  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);
     if(data.results.length>0){

         setpage(page + 1);
         setpopular((prev) => [...prev, ...data.results]);
     }else{
        sethasMore(false)
     }

    } catch (error) {
      console.log("error: ", error);
    }
  };
  // console.log(popular);

  const refereshHandler= async ()=>{
    if(popular.length===0){
        GetPopular();
    }
    else{
        setpage(1);
        setpopular([])
        GetPopular()
    }
  }


  useEffect(() => {
    refereshHandler()
  }, [category]);




  return (
    popular.length > 0 ? (
      <div className="w-screen h-screen">
        <div className="w-full  flex items-center px-[5%]">
          <h1 className="text-2xl w-[50%] text-zinc-400 font-semibold ">
            <i
              className="hover:text-[#6556CD] ri-arrow-left-line mr-1"
              onClick={() => navigate(-1)}
            ></i>
            Popular
          </h1>
          <div></div>
          <div className="w-[100%] ">
            <TopNav />
          </div>
          <div></div>
  
          <Dropdown
            title={"category"}
            options={["tv", "movie"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
         
        </div>
        <InfiniteScroll
          dataLength={Popular.length}
          next={GetPopular}
          hasMore={hasMore}
          loader={<h1>Loading</h1>}
        >
          <Cards data={popular} title={category} />
        </InfiniteScroll>
      </div>
    ) : (
      <Loading />
    )
  )
}
export default Popular