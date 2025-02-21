import axios from 'axios'
import  { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { apiKey, movieId, tvId } from '../Modules/API'
import { imgBaseUrl } from '../Modules/API'
import { BookmarkContext } from '../Context/BookmarkProvider'
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
    const {id} = useParams()
    const location = useLocation()
    const [item, setItem] = useState<Movie | null>(null)
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
         <div className="p-6 rounded-xl flex flex-col md:flex-row gap-8 max-w-5xl justify-center">
                <img 
                    className="w-full md:w-1/3 rounded-2xl shadow-md object-cover" 
                    src={`${imgBaseUrl}${item?.poster_path}`} 
                    alt={`${item?.title || item?.name}`} />
                <div className="text-white flex flex-col gap-4">
                    <h1 className="text-3xl font-bold">{item?.title || item?.name}</h1>
                    <p className="text-gray-300">
                        {(item?.overview)?.split(" ").slice(0, 20).join(" ") + "..."}
                    </p>
                    <p className="text-gray-400">📅 {(item?.release_date || item?.first_air_date)}</p>
                    <p className="text-yellow-400">⭐ {item?.vote_average.toFixed(0)} / 10</p>
                    <div className="flex gap-4 mt-4">
                        <button className="px-4 py-2 bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-lg">
                            🎬 Show Trailer
                        </button>
                        <button 
                            onClick={() => addToBookmark(item)} 
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