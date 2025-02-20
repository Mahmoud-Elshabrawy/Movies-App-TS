
import ReactCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/MyCarousel.css'
import DisplayItems from '../Components/DisplayItems';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

type Movie = {
    id: number;
    title?: string;
    name?: string,
    first_air_date?: string
    vote_average: number;
    poster_path: string;
    release_date?: string;
    };
    
    type Props = {
    movie: Movie[],
    title: string,
    type?: string 
    };
    
const MoviesCarousel = ({movie, title, type}: Props) => {
    const location = useLocation()
    const [showMore, setShowMore] = useState(true)
    useEffect(() => {
        if(location.pathname.includes('/movies') || location.pathname.includes('/tv')) {
            setShowMore(false)
        }
    }, [])
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 5 },
        desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
        tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
        };
  return (
    <>
<div className={`flex justify-between mt-10 mb-3`}>
                    <h1 className="mx-6 style text-2xl font-bold">{title}</h1>
                    {showMore && (
                    <Link to={type === '/tv' ? '/tv' : '/movies'}>
                    <button className="mr-6 px-6 py-2 bg-gradient-to-r from-gray-800 to-gray-500 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">Show More</button></Link>
                    )}
                </div>
<ReactCarousel className="flex items-center" responsive={responsive}>
    {movie.map((item) => (
        <DisplayItems key={item.id} movie={[item]} />
    ))}
</ReactCarousel>

</>
  )
}

export default MoviesCarousel