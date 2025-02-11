import React from 'react';
import { imgBaseUrl } from '../Modules/API';

type Movie = {
  id: number;
  title?: string;
  vote_average: number;
  poster_path: string;
  release_date?: string;
};

type Show = {
  id: number;
  name?: string;
  vote_average: number;
  poster_path: string;
  first_air_date?: string;
};

type Props = {
  movie: Movie[];
  show: Show[];
};

const DisplayItems = ({ movie, show }: Props) => {
  return (
    <div className="mb-20">
      {/* Trending Movies Section */}
      {movie.length > 0 && (
        <div className="trendingMovies">
          <h1 className="text-3xl font-bold mb-4 text-white">Trending Movies</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movie.map((item) => (
              <div key={item.id} className="bg-gray-800 p-3 rounded-lg shadow-lg">
                {item.poster_path ? (
                  <img
                    src={`${imgBaseUrl}${item.poster_path}`}
                    alt={item.title || 'Movie'}
                    className="w-full h-auto rounded-lg"
                  />
                ) : (
                  <div className="bg-gray-700 w-full h-48 flex items-center justify-center text-gray-400 rounded-lg">
                    No Image Available
                  </div>
                )}
                <h2 className="text-white mt-2 text-lg">{item.title}</h2>
                <p className="text-gray-400">⭐ {item.vote_average}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Trending TV Shows Section */}
      {show.length > 0 && (
        <div className="trendingShows mt-10">
          <h1 className="text-3xl font-bold mb-4 text-white">Trending TV Shows</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {show.map((item) => (
              <div key={item.id} className="bg-gray-800 p-3 rounded-lg shadow-lg">
                {item.poster_path ? (
                  <img
                    src={`${imgBaseUrl}${item.poster_path}`}
                    alt={item.name || 'Show'}
                    className="w-full h-auto rounded-lg"
                  />
                ) : (
                  <div className="bg-gray-700 w-full h-48 flex items-center justify-center text-gray-400 rounded-lg">
                    No Image Available
                  </div>
                )}
                <h2 className="text-white mt-2 text-lg">{item.name}</h2>
                <p className="text-gray-400">⭐ {item.vote_average}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayItems;
