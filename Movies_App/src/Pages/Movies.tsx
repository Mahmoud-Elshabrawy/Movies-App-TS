import { useEffect, useState } from "react";
import {
  popular,
  topRated,
  trending,
  upComing,
  nowPlaying,
  apiKey,
} from "../Modules/API";
import axios from "axios";
import Carousel from "../Utilities/Carousel";
import { Helmet } from 'react-helmet-async';

const Movies = () => {
  const [movies, setMovies] = useState({
    trending: [],
    popular: [],
    topRated: [],
    upComing: [],
    nowPlaying: [],
  });

  const Categories = [
    { key: "trending", url: trending },
    { key: "popular", url: popular },
    { key: "topRated", url: topRated },
    { key: "upComing", url: upComing },
    { key: "nowPlaying", url: nowPlaying },
  ];
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await Promise.all(
          Categories.map((category) =>
            axios.get(`${category.url}?api_key=${apiKey}`)
          )
        );

        const newMovies: any = {};

        response.forEach((response, idx) => {
          newMovies[Categories[idx].key] = response.data.results;
        });

        setMovies(newMovies);
      } catch (error) {
        console.log("Error while fetching Movies ", error);
      }
    };
    fetchMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      <Helmet>
      <title>Movies</title>
      <meta name="description" content="Discover trending, popular, and top-rated movies. Watch trailers and explore upcoming releases." />
      </Helmet>
      <Carousel movie={movies.trending || []} title="Trending Movies" />
      <Carousel movie={movies.popular || []} title="Popular Movies" />
      <Carousel movie={movies.topRated || []} title="Top Rated Movies" />
      <Carousel movie={movies.upComing || []} title="Upcoming Movies" />
      <Carousel movie={movies.nowPlaying || []} title="Now Playing Movies"
      />
    </div>
  );
};

export default Movies;
