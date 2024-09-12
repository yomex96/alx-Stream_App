import { User } from '../models/user.model.js';
import { fetchFromTMDB } from "../services/tmdb.service.js";

// SEARCH BY ACTORS NAME FUNCTION
export async function searchPerson(req, res){
    const { query } = req.params;
    try {
        const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`);

        if (response.results.length === 0) {
            return res.status(404).send(null);
        }

        await User.findByIdAndUpdate(req.user._id,{
            $push: {
                searchHistory:{
                    id: response.results[0].id,
                    image: response.results[0].profile_path,
                    title: response.results[0].name,
                    searchType: "person",
                    createdAt: new Date(),
                },
            },
        });

        res.status(200).json({ success: true, content: response.results });
    } catch (error) {
        console.log("Error in the searchPerson controller: ", + error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
        
    }
}

// SEARCH BY MOVIE NAME FUNCTION
export async function searchMovie(req, res){
    const { query } = req.params;
    try {
        const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`);

        if (response.length === 0) {
            return res.status(404).send(null);
        }

        await User.findByIdAndUpdate(req.user._id,{
            $push: {
                searchHistory:{
                    id: response.results[0].id,
                    image: response.results[0].poster_path,
                    title: response.results[0].title,
                    searchType: "movie",
                    createdAt: new Date(),
                },
            },
        });
        res.status(200).json({ success: true, content: response.results });

    } catch (error) {
        console.log("Error in the searchMovie controller: ", + error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

// SEARCH BY TV SHOW FUNCTION
export async function searchTv(req, res){
    const { query } = req.params;
    try {
        const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`);

        if (response.results.length === 0) {
            return res.status(404).send(null);
        }

        await User.findByIdAndUpdate(req.user._id,{
            $push: {
                searchHistory:{
                    id: response.results[0].id,
                    image: response.results[0].poster_path,
                    title: response.results[0].name,
                    searchType: "tv",
                    createdAt: new Date(),
                },
            },
        });
        res.status(200).json({ success: true, content: response.results });

    } catch (error) {
        console.log("Error in the searchTv controller: ", + error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

// GET SEARCH HISTORY FUNCTION
export async function getSearchHistory(req, res) {
    try {
        // const user = await User.findById(req.user._id);
        res.status(200).json({ success: true, content: req.user.searchHistory });
    } catch (error) {
        // console.log("Error in the getSearchHistory controller: ", + error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

// REMOVE FROM SEARCH HISTORY FUNCTION
export async function removeItemFromSearchHistory(req, res) {
    let { id } = req.params;

// CONVERT THE ID TO A NUMBER SO THAT THE ITEM CAN 
// ACTUALLY BE REMOVED FROM MONGODB ELSE YOU WILL 
// GET A DELETE SUCCESS MESSAGE BUT THE ITEM WONT 
// BE REMOVED FROM MONGODB IF IT IS A STRING

    id = parseInt(id);// Convert to an integer

    console.log(typeof id);

    try {
        await User.findByIdAndUpdate(req.user._id,{
            $pull: {
                searchHistory: { id: id },
            },
        }),
        res.status(200).json({ success: true, message: "Item removed from search history" });
    } catch (error) {
        console.log("Error in the removeItemFromSearchHistory controller: ", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}