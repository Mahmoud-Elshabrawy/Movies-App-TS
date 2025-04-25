import { useState } from "react";
import img1 from "../assets/third.webp";
import img2 from "../assets/first.webp";
import img3 from "../assets/second.webp";
import img4 from "../assets/fourth.webp";

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
      <button onClick={handlePrev} aria-label="Previous">
        <i
          className="fa-solid fa-chevron-left cursor-pointer"
          style={{ fontSize: "2rem" }}
        ></i>
      </button>

      <img
        className={`md:w-[55%] sm:w-[70%] rounded-2xl shadow-lg`}
        src={imgs[imgIdx]}
        style={{ objectFit: "cover" }}
        alt="Poster"
      />
      <button onClick={handleNext} aria-label="Next">
        <i
          className="fa-solid fa-chevron-right cursor-pointer"
          style={{ fontSize: "2rem" }}
        ></i>
      </button>
    </div>
  );
};

export default Poster;
