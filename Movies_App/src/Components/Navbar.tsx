import { useContext, useEffect, useState } from 'react';
import logo from '../assets/logo.webp';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import { Sun, Moon } from "lucide-react";
import { LightModeContext } from '../Context/LightModeProvider';


const Navbar = () => {
    const {lightMode, toggleLightMode} = useContext(LightModeContext)
    const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
    AOS.init({
        duration: 700,
        once: true
    })
}, [])

return (
    <div data-aos = "fade-down" className={`navbar flex flex-col md:flex-row items-center justify-between bg-gray-900 p-4 rounded-b-4xl shadow-white`}>      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center ml-7">
        <img src={logo} alt="Movie App Logo" className="h-10 w-10 mr-2" />
        <h1 className="text-xl tracking-wider font-bold">Movie App</h1>
        </div>
        <i
        className="text-3xl cursor-pointer md:hidden transition-transform duration-300"
        onClick={() => setIsOpen(!isOpen)}
        >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
        </i>
    </div>

    <div
        className={`mr-7 flex flex-col md:flex-row gap-6 mt-4 md:mt-0 overflow-hidden transition-all duration-700 ease-in-out ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } md:max-h-full md:opacity-100`}
    >
        <Link className="font-semibold  hover:text-gray-400 transition" to={'/'}>
        <i className="fa-solid fa-house" aria-hidden="true"></i> Home
        </Link>
        <Link className="font-semibold  hover:text-gray-400 transition" to={'/movies'}>
        <i className="fa-solid fa-film" aria-hidden="true"></i> Movies
        </Link>
        <Link className="font-semibold  hover:text-gray-400 transition" to={'/tv'}>
        <i className="fa-solid fa-clapperboard" aria-hidden="true"></i> TV Series
        </Link>
        <Link className="font-semibold  hover:text-gray-400 transition" to={'/bookmarks'}>
        <i className="fa-solid fa-bookmark" aria-hidden="true"></i> Bookmarks
        </Link>
        <button className='cursor-pointer ' onClick={toggleLightMode}>
            {!lightMode ? <Sun size={28} color="white" />  : <Moon size={28} color="#000" /> }
        </button>
    </div>
    </div>
);
};

export default Navbar;
