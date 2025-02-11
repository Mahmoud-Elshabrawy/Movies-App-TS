import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
    AOS.init({
        duration: 700,
        once: true
    })
}, [])

return (
    <div data-aos = "fade-down" className={` flex flex-col md:flex-row items-center justify-between bg-gray-900 p-4 rounded-2xl shadow-white`}>      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center">
        <img src={logo} alt="Movie App Logo" className="h-10 w-10 mr-2" />
        <h1 className="text-white text-xl tracking-wider font-bold">Movie App</h1>
        </div>
        <i
        className="text-3xl text-white cursor-pointer md:hidden transition-transform duration-300"
        onClick={() => setIsOpen(!isOpen)}
        >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
        </i>
    </div>

    <div
        className={`flex flex-col md:flex-row gap-6 mt-4 md:mt-0 overflow-hidden transition-all duration-700 ease-in-out ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } md:max-h-full md:opacity-100`}
    >
        <Link className="font-semibold text-white hover:text-gray-400 transition" to={'/'}>
        <i className="fa-solid fa-house" aria-hidden="true"></i> Home
        </Link>
        <Link className="font-semibold text-white hover:text-gray-400 transition" to={'/movies'}>
        <i className="fa-solid fa-film" aria-hidden="true"></i> Movies
        </Link>
        <Link className="font-semibold text-white hover:text-gray-400 transition" to={'/tv'}>
        <i className="fa-solid fa-clapperboard" aria-hidden="true"></i> TV Series
        </Link>
        <Link className="font-semibold text-white hover:text-gray-400 transition" to={'/bookmarks'}>
        <i className="fa-solid fa-bookmark" aria-hidden="true"></i> Bookmarks
        </Link>
    </div>
    </div>
);
};

export default Navbar;
