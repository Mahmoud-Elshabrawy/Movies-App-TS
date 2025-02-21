

const Footer = () => {
return (
<div className="w-full lg:h-35 relative bottom-0 bg-gradient-to-r from-gray-900 to-gray-700 text-white flex items-center justify-center flex-col  gap-5 rounded-t-4xl shadow-lg py-8">
    <div className="icons">
    <ul className="flex gap-6 text-3xl">
        <li>
        <a href="https://facebook.com"
            target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300">
            <i className="fa-brands fa-facebook"></i>
        </a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/mahmoudmansour1"
            target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
            <i className="fa-brands fa-linkedin-in"></i>
        </a>
        </li>
        <li>
        <a href="https://github.com/Mahmoud-Elshabrawy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
            <i className="fa-brands fa-github"></i>
        </a>
        </li>
    </ul>
    </div>
    <p className="text-lg font-semibold tracking-wide text-center px-4">
    © 2025 Mahmoud El-Shabrawy. All Rights Reserved.
    </p>
</div>
);
};

export default Footer;