import axios from 'axios';
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { SMALL_IMG_BASE_URL } from '../utils/constants';
import { Trash } from 'lucide-react';
import toast from 'react-hot-toast';

function formatDate(dateString) {
    const date = new Date(dateString);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getUTCMonth()];
    const day = date.getUTCDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
}

const HistoryPage = () => {

    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        const getSearchHistory = async () => {
            try {
                const res = await axios.get(`/api/v1/search/history`);
                setSearchHistory(res.data.content);
            } catch (error) {
                console.error("Error fetching search history:", error.message);
                toast.error("Failed to load search history");
                setSearchHistory([]);
            }
        };
        getSearchHistory();
    }, []);

    const handleDelete = async (userInput) => {
        try {
            await axios.delete(`/api/v1/search/history/${userInput.id}`);
            setSearchHistory(searchHistory.filter((item) => item.id !== userInput.id));
            toast.success('Item successfully deleted');
        } catch (error) {
            console.error("Error deleting history item:", error.message);
            toast.error('Failed to delete item from search history');
        }
    }

    if (searchHistory?.length === 0) {
        return (
            <div className='bg-gray-900 min-h-screen text-white'>
                <Navbar />
                <div className='max-w-6xl mx-auto px-4 py-8'>
                    <h1 className='text-3xl font-bold mb-8'>Search History</h1>
                    <div className='flex justify-center items-center h-96'>
                        <p className='text-xl'>No Search History Found</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='bg-gray-800 text-white min-h-screen'>
            <Navbar />
            <div className='max-w-6xl mx-auto px-4 py-8'>
                <h1 className='text-3xl font-bold mb-8'>Search History</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {searchHistory?.map((userInput) => (
                        <div
                            key={userInput.id}
                            className='bg-gray-900 rounded flex items-start'
                        >
                            <img src={SMALL_IMG_BASE_URL + userInput.image} 
                                alt="History Image" 
                                className='w-8 h-8 rounded-full object-cover mr-4'
                            />
                            <div className='flex flex-col'>
                                <span className='text-white text-lg'>{userInput.title}</span>
                                <span className='text-gray-400 text-sm'>{formatDate(userInput.createdAt)}</span>
                            </div>
                            <span 
                                    className={`py-1 mr-2 mt-2 px-3 min-w-20 text-center rounded-full text-sm ml-auto ${
                                        userInput.searchType === "movie" 
                                        ? "bg-gray-800" 
                                        : userInput.searchType === "tv" 
                                        ? "bg-blue-600" 
                                        : "bg-green-600"
                                    }`}
                                >
                                    {userInput.searchType[0].toUpperCase() + userInput.searchType.slice(1)}
                            </span>
                            {/* DELETE SEARCH ITEMS IN HISTORY */}
                            <Trash 
                                className='size-5 ml-4 cursor-pointer hover:stroke-red-600 hover:text-red-600'
                                onClick={() => handleDelete(userInput)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HistoryPage;
