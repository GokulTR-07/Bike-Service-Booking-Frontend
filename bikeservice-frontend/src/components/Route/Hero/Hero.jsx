import React, {useState} from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { Link } from "react-router-dom";

const Hero = () => {
  
  const slides = [
    {
      url: "https://speedforce.in/wp-content/uploads/2020/08/BANNER-14.jpg",
    },
    {
      url: "https://speedforce.in/wp-content/uploads/2020/08/BANNER-12.jpg",
    },
    {
      url: "https://speedforce.in/wp-content/uploads/2020/08/BANNER-13.jpg",
    },
    {
      url: "https://speedforce.in/wp-content/uploads/2020/08/BANNER-16.jpg",
    },
    {
      url: "https://speedforce.in/wp-content/uploads/2020/08/BANNER-11.jpg",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
        <Link to={"/products"}>
          <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover bg-no-repeat duration-500'
          ></div>
        </Link>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            {/* <RxDotFilled /> */}
          </div>
        ))}
      </div>
    </div>
    
    
  );
}

export default Hero;
