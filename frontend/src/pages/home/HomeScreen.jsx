// import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Info, Play } from "lucide-react";
import useGetTrendingContent from "../../hooks/useGetTrendingContent";
import { MOVIE_CATEGORIES, ORIGINAL_IMG_BASE_URL, TV_CATEGORIES } from "../../utils/constants";
import { useContentStore } from "../../storage/content";
import ContentSlider from "../../components/ContentSlider";


const HomeScreen = () => {
  const { trendingContent } = useGetTrendingContent();
  // console.log("trendingContent", trendingContent);
  const { contentType } = useContentStore();

  if(!trendingContent) return (
    <div className="h-screen text-white relative">
      <Navbar />
      <div className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center -z-10 customBlinds" />
    </div>
  );
  
  return (
    <>
      <div className="relative h-screen text-white bg-blue-900">
        <Navbar />

        <img
          src={ORIGINAL_IMG_BASE_URL + trendingContent?.backdrop_path}
          alt="hero image"
          className="absolute top-0 left-0 w-full h-full object-cover -z-50"
        />

        {/* BACKGROUND OVERLAY TO GIVE 50% opacity */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-blue-900 bg-opacity-50 -z-50"
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-25">
          <div className="bg-gradient-to-b from-blue-900 via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10" />
          <div className="max-w-2xl">
            <h1 className="mt-4 text-6xl font-extrabold text-balance">
              {trendingContent?.title || trendingContent?.name}
            </h1>
            <p className="mt-2 text-lg">
              {trendingContent?.release_date?.split("-")[0] ||
                trendingContent?.first_air_date.split("-")[0]}
              | {trendingContent?.adult ? "18+" : "PG-13"}
            </p>

            {/* OVERVIEW SECTION */}
            <p className="mt-4 text-lg">
              {trendingContent?.overview?.length > 200
                ? trendingContent?.overview.slice(0, 200) + "..."
                : trendingContent?.overview || "Overview not available"}
            </p>
          </div>
          <div className="flex mt-8">
            <Link
              to={`/watch/${trendingContent?.id}`}
              className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded mr-4 flex items-center"
            >
              <Play className="size-6 mr-2 fill-current" />
              Play
            </Link>

            <Link
              to={`/watch/${trendingContent?.id}`}
              className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded flex items-center"
            >
              <Info className="size-6 mr-2" />
              More Info
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 bg-blue-900 py-10">
        
        {contentType === "movie" ? (
          MOVIE_CATEGORIES.map((category) => <ContentSlider key={category} category={category} />)
        ):(
          TV_CATEGORIES.map((category) => <ContentSlider key={category} category={category} />)
        )}
      </div>

      {/* <button onClick={logout}>Logout</button> */}
    </>
  );
};

export default HomeScreen;
