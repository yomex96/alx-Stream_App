import { useState } from "react"
import { useContentStore } from "../storage/content";
import Navbar from "../components/Navbar";
import { Search } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { ORIGINAL_IMG_BASE_URL } from "../utils/constants";

const SearchPage = () => {

  const [activeTab, setActiveTab] = useState("movie");
  const [searchQuery, setSearchQuery] = useState("");

  const [results, setResults] = useState([]);
  const {setContentType} = useContentStore();

  const handleTapClick = (tab) => {
    setActiveTab(tab);
    tab === "movie" ? setContentType("movie") : setContentType("tv")
    setResults([]);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`/api/v1/search/${activeTab}/${searchQuery}`);
      setResults(res.data.content);
    } catch (error) {
      if(error.response.status === 404) {
      toast.error("Nothing found, Check your search category", error.response.status)
      } else {
        toast.error("An Error Occured, Try again later", error.response.status)
      }
    }
  };
  console.log("Results: ", results)

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center gap-3 mb-4">
            <button
              className={`py-2 px-4 rounded ${activeTab === "movies" ? "bg-blue-900": "bg-gray-800"} hover:bg-gray-700`}
              onClick={ () => handleTapClick("movies") }
            >
              Movies
            </button>
            <button
              className={`py-2 px-4 rounded ${activeTab === "tv" ? "bg-blue-900": "bg-gray-800"} hover:bg-gray-700`}
              onClick={ () => handleTapClick("tv") }
            >
              Tv Shows
            </button>
            <button
              className={`py-2 px-4 rounded ${activeTab === "person" ? "bg-blue-900": "bg-gray-800"} hover:bg-gray-700`}
              onClick={ () => handleTapClick("person") }
            >
              Person
            </button>
        </div>
        <form onSubmit={handleSearch} className="flex gap-2 items-stretch mb-8 max-w-2xl mx-auto">
          <input 
            type="text" 
            value={searchQuery}
            onChange={ (e) => setSearchQuery(e.target.value)}
            placeholder={"Search for " + activeTab}
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
          <button className="bg-blue-900 hover:bg-blue-700 text-white p-2 rounded">
            <Search className="w-6 h-6" />
          </button>
        </form>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {results.map((result) => {
            if(!result.poster_path && !result.profile_path) return null; // Remove Search result without an image

            return (
              <div key={result.id} className="bg-gray-800 p-4 rounded">
                {activeTab === "person" ? (
                  <div className="flex flex-col items-center">
                    <img 
                      src={ORIGINAL_IMG_BASE_URL + result.profile_path} 
                      alt={result.name} 
                      className="max-h-96 rounded mx-auto"
                    />
                    <h2 className="mt-2 text-xl font-bold">{result.name}</h2>
                  </div>
                ) : (
                  <Link to={"/watch/" + result.id} onClick={() => {
                    setContentType(activeTab);
                    
                  }}>
                    <img 
                      src={ORIGINAL_IMG_BASE_URL + result.poster_path} 
                      alt={result.title || result.name}
                      className="w-full h-auto rounded"
                    />
                    <h2 className="mt-2 text-xl font-bold">{result.title || result.name}</h2>
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchPage