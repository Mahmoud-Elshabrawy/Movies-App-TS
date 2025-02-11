import { useEffect, useState } from "react";
import { trendingTv, trending, apiKey } from "../Modules/API";
import axios from "axios";
import DisplayItems from "../Components/DisplayItems";
import Poster from "../Components/Poster";

const Home = () => {
const [movies, setMovies] = useState([]);
const [show, setShow] = useState([]);

const movieUrl = `${trending}?api_key=${apiKey}`;
const showUrl = `${trendingTv}?api_key=${apiKey}`;

useEffect(() => {
    const fetchTrendingMovies = async () => {
    try {
        const response = await axios.get(movieUrl);
        setMovies(response.data.results.slice(0, 10)); 
    } catch (err) {
        console.log("Error fetching trending movies:", err);
    }
    };

    const fetchTrendingShows = async () => {
    try {
        const response = await axios.get(showUrl);
        setShow(response.data.results.slice(0, 10)); 
    } catch (err) {
        console.log("Error fetching trending shows:", err);
    }
    };

    fetchTrendingMovies();
    fetchTrendingShows();
}, []);

return (
    <div>
         <Poster  /> 
    <DisplayItems movie={movies} show={show} />
    </div>
);
};

export default Home;
