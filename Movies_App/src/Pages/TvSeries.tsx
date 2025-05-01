import { useEffect, useState } from 'react'

import { trendingTv, popularTv, topRatedTv, onTheAir, apiKey } from '../Modules/API'
import axios from 'axios'
import Carousel from '../Utilities/Carousel'
import { Helmet } from 'react-helmet-async';

const TvSeries = () => {

  const [tvSeries, setTvSeries] = useState({
    topRatedTv: [],
    popularTv: [],
    trendingTv: [],
    airingToday: [],
    onTheAir: [],
  })

  const Categories = [
    {key: "topRatedTv", url: topRatedTv},
    {key: "popularTv", url: popularTv},
    {key: "trendingTv", url: trendingTv},
    {key: "onTheAir", url: onTheAir},
  ]

  useEffect(() => {
    const fetchingTv = async() => {
      try {
        const response = await Promise.all(
          Categories.map(category => axios.get(`${category.url}?include_adult=false&api_key=${apiKey}`))
        )

        const newTvSeries: any = {};
    response.forEach((res, idx) => {
      const filteredResults = res.data.results.filter(
        (item: { adult?: boolean }) => !item.adult
      );
      newTvSeries[Categories[idx].key] = filteredResults;
    });
        setTvSeries(newTvSeries)
      } catch(error) {
        console.log("Error while fetching Tv Series", error);
        
      }
    }
    fetchingTv()
    
  }, [])
  console.log(tvSeries);
  
  return (
    <div>
      <Helmet>
      <title>Shows</title>
      <meta name="description" content="Discover trending, popular, and top-rated Shows. Watch trailers and explore upcoming releases." />
      </Helmet>
      <Carousel movie={tvSeries.trendingTv || []} title={"Trending"} />
      <Carousel movie={tvSeries.popularTv || []} title={"Popular"} />
      <Carousel movie={tvSeries.topRatedTv || []} title={"Top Rated"} />
      <Carousel movie={tvSeries.onTheAir || []} title={"On The Air"} />

    </div>
  )
}

export default TvSeries