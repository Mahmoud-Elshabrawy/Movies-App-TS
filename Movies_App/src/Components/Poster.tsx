import { useState } from "react";
import img1 from '../assets/thirdjpg.jpg'
import img2 from '../assets/first.jpg'
import img3 from '../assets/second.jpg'
import img4 from '../assets/fourth.jpg'

const Poster = () => {
  const imgs = [img1, img2, img3, img4]
    const [imgIdx, setImgIdx] = useState(0)
  const handleNext = () => {
    setImgIdx(prev => {
      if(prev === imgs.length - 1) return 0
      return prev + 1
    })
  }
  const handlePrev = () => {
    setImgIdx(prev => {
      if(prev === 0) return imgs.length - 1
      return prev - 1
    })
  }
  return (
    <div className="w-full flex justify-center items-center mb-40 relative">
      <div>
      <button onClick={() => handlePrev()} >
        <i className="fa-solid fa-chevron-left cursor-pointer" style={{fontSize: '2.5rem'}}></i>
      </button>
    </div>
    <img className="w-110 md:w-3xl lg:w-4xl rounded-2xl shadow-lg" src={imgs[imgIdx]}alt="Poster"/>   
    <div>
      <button onClick={() => handleNext()}>
        <i className="fa-solid fa-chevron-right cursor-pointer " style={{fontSize: '2.5rem'}}></i>
      </button>
    </div>

        

    </div>
  )
}

export default Poster