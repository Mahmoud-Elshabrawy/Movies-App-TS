import { useEffect, useState } from "react";
import { trendingTv, trending, apiKey } from "../Modules/API";
import axios from "axios";
import Carousel from "../Utilities/Carousel";
import Poster from "../Components/Poster";
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
      <title>Movie App</title>
      <meta name="description" content="Explore and watch the best movies with our movie app!" />
      </Helmet>
      <Poster />
      <Carousel movie={movies} title="Trending Movies" type = {'/movies'} />
      <Carousel movie={show} title ="Trending TV Show" type = {'/tv'} />
    </div>
  );
};

export default Home;
