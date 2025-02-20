import { useEffect, useState } from 'react'

import { trendingTv, popularTv, topRatedTv, onTheAir, apiKey } from '../Modules/API'
import axios from 'axios'
import Carousel from '../Utilities/Carousel'
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
          Categories.map(category => axios.get(`${category.url}?api_key=${apiKey}`))
        )

        const newTvSeries: any = {}
        response.forEach((response, idx) => {
          newTvSeries[Categories[idx].key] = response.data.results
        })
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
      <Carousel movie={tvSeries.trendingTv || []} title={"Trending"} />
      <Carousel movie={tvSeries.popularTv || []} title={"Popular"} />
      <Carousel movie={tvSeries.topRatedTv || []} title={"Top Rated"} />
      <Carousel movie={tvSeries.onTheAir || []} title={"On The Air"} />

    </div>
  )
}

export default TvSeries