import { useContext, useState } from 'react';
import { BookmarkContext } from '../Context/BookmarkProvider';
import { imgBaseUrl } from '../Modules/API';
import { Helmet } from 'react-helmet-async';
const Bookmarks = () => {
  const { bookmarks, removeFromBookmark } = useContext(BookmarkContext);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="p-6">
        <Helmet>
        <title>Bookmarks</title>
        <meta name="description" content="View and manage your bookmarked movies and TV shows. Keep track of your favorite content easily!" />      </Helmet>
      <h1 className="text-3xl text-center font-bold mb-6 text-white">Your Bookmarks</h1>

      {bookmarks.length > 0 ? (
        <div className=" gap-y-10 px-4 mb-15 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {bookmarks.map((item) => (
          <div 
          key={item.id}
          className={`flex relative mx-6 rounded-2xl overflow-hidden transition-all duration-500 ease-in-out 
          ${hoveredId === item.id ? 'bg-gray-900 bg-opacity-90 shadow-2xl scale-105' : 'bg-gray-800 bg-opacity-80'}
      `}
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
      >
          <img
              src={`${imgBaseUrl}${item.poster_path}`}
              className="rounded-2xl  object-cover transition-transform duration-500 ease-in-out 
          hover:scale-110"
              alt={item.title || item.name}
              loading="lazy"
          />
    
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
    
          <div
              className={`absolute bottom-0 left-0 right-0 p-4 backdrop-blur-lg bg-black bg-opacity-60 rounded-b-2xl 
          transition-all duration-500 ease-in-out transform 
          ${hoveredId === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
          >
              <h1 className="text-lg font-bold text-white truncate">{item.name || item.title}</h1>
              <h3 className="text-yellow-400 flex items-center">
                  {item.vote_average} <i className="fa-solid fa-star ml-1"></i>
              </h3>
    
              <div
                  className="flex gap-4 justify-center items-center mt-4 p-2 
              bg-gray-900 bg-opacity-70 rounded-lg backdrop-blur-lg 
              transition-all duration-500 ease-in-out transform hover:scale-105"
              >
                  <button className="text-white text-lg p-3 rounded-full cursor-pointer 
              hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
                      <i className="fa-solid fa-eye"></i>
                  </button>
                  <button className="text-white text-lg p-3  cursor-pointer
              hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110" onClick={() => removeFromBookmark(item)}>
                      <i className="fa-solid fa-trash" style={{color: '#ff0000'}}></i>
                  </button>
              </div>
          </div>
      </div>
        ))}
      </div>
      ) : (
        <p className="text-gray-400 text-center">No bookmarks added yet.</p>
      )}
  </div>
  );
};

export default Bookmarks;
