import { useState } from "react";
import img1 from '../assets/thirdjpg.jpg';
import img2 from '../assets/first.jpg';
import img3 from '../assets/second.jpg';
import img4 from '../assets/fourth.jpg';


const Poster = () => {

  const imgs = [img1, img2, img3, img4];
  const [imgIdx, setImgIdx] = useState(0);

  const handleNext = () => {
    setImgIdx((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setImgIdx((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
  };

  return (
    <div className="w-full flex justify-center items-center mb-40 relative">
      <img
        className={`w-[90%]  rounded-2xl shadow-lg`} src={imgs[imgIdx]} style={{objectFit: 'cover'}} alt="Poster"
      />

      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button onClick={handlePrev} aria-label="Previous"
          className=""
        >
          <i
            className="fa-solid fa-chevron-left cursor-pointer" style={{ fontSize: "2.5rem" }}></i>
        </button>
        <button onClick={handleNext} aria-label="Next"
          className=""
        >
          <i
            className="fa-solid fa-chevron-right cursor-pointer" style={{ fontSize: "2.5rem" }}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default Poster;