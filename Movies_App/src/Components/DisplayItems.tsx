import MyCarousel from '../Utilities/MyCarousel';

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
      <MyCarousel movie={movie} show={show} />
        
    </div>
  );
};

export default DisplayItems;
