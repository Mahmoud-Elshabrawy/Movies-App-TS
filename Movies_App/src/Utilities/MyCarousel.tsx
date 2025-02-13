import  {useEffect, useState } from 'react';
import ReactCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { imgBaseUrl } from '../Modules/API';
import '../styles/MyCarousel.css'
import { Link } from 'react-router-dom';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

type Movie = {
  id: number;
  title?: string;
  vote_average: number;
  poster_path: string;
  release_date?: string;
};

type Props = {
  movie: Movie[];
};

const MyCarousel = ({ movie }: Props) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => setHoveredId(id);
  const handleMouseLeave = () => setHoveredId(null);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 5 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };
  useEffect(() => {
      AOS.init({
          duration: 700,
          once: true
      })
  }, [])
  return (
    <>
      <div className="flex justify-between mb-9">
        <h1 className="mx-6 style text-2xl font-bold">Trending Movies</h1>
        <Link to="/movies">
          <button className="mr-6 px-6 py-2 bg-gradient-to-r from-gray-800 to-gray-500 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            Show More
          </button>
        </Link>
      </div>

      {movie.length > 0 && (
        <ReactCarousel className="flex items-center" responsive={responsive}>
          {movie.map((item) => (
            <div
              key={item.id} 
              className={`mx-6 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out relative ${
                hoveredId === item.id ? 'bg-gray-800 shadow-2xl scale-110' : ''
              }`}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={`${imgBaseUrl}${item.poster_path}`}
                className="rounded-2xl object-cover "
                alt={item.title} loading='lazy'
              />
              <div className='flex flex-col gap-3 bg-black bg-opacity-30 w-10 items-center justify-center absolute top-5 -right-10 opacity-0' data-aos = {`${hoveredId ? 'fade-right opacity-100' : ''}`} >
                <button><i className="fa-solid fa-eye"></i></button>
                <button> <i className="fa-solid fa-bookmark" aria-hidden="true"></i></button>
              </div>
              <div
                className={`mx-2 text-white transition-all duration-300 ease-in-out ${
                  hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h1 className="text-lg font-semibold">{item.title}</h1>
                <h3 className="text-sm">{item.release_date}</h3>
                <h3 className="text-yellow-500 mb-10">
                  {item.vote_average} <i className="fa-solid fa-star"></i>
                </h3>
              </div>
            </div>
          ))}
        </ReactCarousel>
      )}
    </>
  );
};

export default MyCarousel ;
