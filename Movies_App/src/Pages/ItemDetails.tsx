import axios from 'axios'
import  { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { apiKey, movieId, tvId } from '../Modules/API'
import { imgBaseUrl } from '../Modules/API'
import { BookmarkContext } from '../Context/BookmarkProvider'
import { LightModeContext } from '../Context/LightModeProvider'
import { Helmet } from 'react-helmet-async'
type Movie = {
    id: number;
    title?: string;
    name?: string,
    first_air_date?: string
    vote_average: number;
    poster_path: string;
    release_date?: string;
    overview: string
    };

const ItemDetails = () => {
    const {addToBookmark} = useContext(BookmarkContext)
    const {lightMode} = useContext(LightModeContext)
    const {id} = useParams()
    const location = useLocation()
    const [item, setItem] = useState<Movie>()
    useEffect(() => {
        const fetchItem = async() => {
            try {
                let response 
                if(location.pathname.includes('/movies')) {
                     response = await axios.get(`${movieId}${id}?api_key=${apiKey}`)
                } else if(location.pathname.includes('/tv')) {
                     response = await axios.get(`${tvId}${id}?api_key=${apiKey}`)
                }
                setItem(response?.data)
            } catch (error) {
                console.log("Error fetching ", error);
                
            }
        }

       
        fetchItem()
    }, [])
    console.log(item);
    
  return (
    <>
    <Helmet>
    <title>{(item?.title || item?.name) || "Item Details"} - Movie Details</title>
    <meta name="description" content={item?.overview || "Details about the movie or TV show."} /> 
      </Helmet>
         <div className={` p-6 rounded-xl flex flex-col md:flex-row gap-8 max-w-5xl justify-center`}>
                <img 
                    className="w-full md:w-1/3 rounded-2xl shadow-md object-cover" 
                    src={`${imgBaseUrl}${item?.poster_path}`} 
                    alt={`${item?.title || item?.name}`} />
                <div className={`${lightMode ? 'text-black flex flex-col gap-4' : 'text-white '}flex flex-col gap-4`}>
                    <h1 className="text-3xl font-bold">{item?.title || item?.name}</h1>
                    <p className={`${lightMode ? 'text-black ' : 'text-gray-300'}`}>
                        {(item?.overview)?.split(" ").slice(0, 20).join(" ") + "..."}
                    </p>
                    <p className={`${lightMode ? 'text-black ' : 'text-gray-300'}`}>📅 {(item?.release_date || item?.first_air_date)}</p>
                    <p className={`${lightMode ? 'text-black ' : 'text-yellow-300'}`}>⭐ {item?.vote_average.toFixed(0)} / 10</p>
                    <div className="flex gap-4 mt-4">
                        <button className="px-4 py-2 bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-lg">
                            🎬 Show Trailer
                        </button>
                        <button 
                            onClick={() => item && addToBookmark(item)} 
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-lg"
                        >
                            📌 Add To Bookmark
                        </button>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ItemDetails