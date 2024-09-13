import { useEffect, useRef, useState } from 'react';
import { useContentStore } from '../storage/content'
import { Link } from "react-router-dom";
import { SMALL_IMG_BASE_URL } from '../utils/constants';
import axios from 'axios';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ContentSlider = ({ category }) => {
    // console.log(category)
    const {contentType} = useContentStore();
    const [content, setContent] = useState([])
    const [scrollArrows, setScrollArrows] = useState(false);

    const sliderRef = useRef(null);

    const formattedCategoryName = 
      category.replaceAll("_", " ")[0].toUpperCase() + category.replaceAll("_", " ").slice(1);
    const formattedContentType = contentType === "movie" ? "Movie" : "TV Show";

    useEffect(() => {
      const getContent = async () => {
        const res = await axios.get(`/api/v1/${contentType}/${category}`)
        setContent(res.data.content)
      }

      getContent()
    },[contentType, category])

    const scrollLeft = () => {
      if(sliderRef.current){
        sliderRef.current.scrollBy({left:-sliderRef.current.offsetWidth, behavior: 'smooth'})
      }
    }
    const scrollRight = () => {
      sliderRef.current.scrollBy({left: sliderRef.current.offsetWidth, behavior: 'smooth'})
    }

  return (
    <div className='text-white bg-gray-600 relative px-5 md:px-20'
    onMouseEnter={() => setScrollArrows(true)}
    onMouseLeave={() => setScrollArrows(false)}
    >
        <h2 className='mb-2 text-2xl font-bold'>
        { formattedCategoryName } { formattedContentType}
        </h2>

        <div className='flex space-x-4 overflow-x-hidden' ref={sliderRef}>
          {content.map((item) => (
            <Link to={`/watch/${item.id}`} className='min-w-[250px] relative group' key={item.id}>
              <div className='rounded-lg overflow-hidden w-56'>
                <img 
                src={SMALL_IMG_BASE_URL + item.backdrop_path} 
                alt="Content Image" 
                className='transition-transform duration-300 ease-in-out group-hover:scale-125' 
                />
              </div>
              <p className='mt-2 text-center'>{item.title || item.name}</p>
            </Link>
          ))}
        </div>
{/* scrollArrows */}
        {scrollArrows && (
          <>
{/* LEFT ARROW */}
            <button
              className='absolute top-1/2 -translate-y-1/2 left-5 md:left-20 flex items-center justify-center size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 tect-white z-10' 
              onClick={scrollLeft}
            >
              <ChevronLeft size={24} />
            </button>
{/* RIGHT ARROW */}
            <button
              className='absolute top-1/2 -translate-y-1/2 right-5 md:right-20 flex items-center justify-center size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10' 
              onClick={scrollRight}
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
    </div>
  )
}

export default ContentSlider