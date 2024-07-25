import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sliderData } from "../../assets/data/dummyData";
import { nextSlide, prevSlide, dotSlide } from "../../features/carouselSlice";
import { FaArrowLeft , FaArrowRight } from "react-icons/fa";
import { useId } from "react";
import { nanoid } from "nanoid";

function Carousel() {
  const currentSlide = useSelector((state) => state.carousel.currentCarousel);
  const dispatch = useDispatch();
  const id = useId()

  const handleNext = () => {
    dispatch(nextSlide());
  };

  const handlePrev = () => {
    dispatch(prevSlide());
  };

  const handleDotClick = (index) => {
    dispatch(dotSlide(index));
  };

  return (
    <div className="relative pb-4">
      {sliderData.map((item) => (
        <div
          key={nanoid()}
          className={
            parseInt(item.id) === currentSlide
              ? "block duration-100 ease-in-out scale-100"
              : "hidden duration-100 ease-in-out scale-100"
          }
        >
          <img src={item.img} alt="slider Image" className="md:h-[500px] w-full" />
          <div className="dark:text-white text-center text-2xl italic">
            {item.text}
          </div>
        </div>
      ))}
      <div className="hidden sm:flex absolute md:bottom-24 sm:bottom-24 bottom-[100px] left-1/2 transform -translate-x-1/2 md:flex space-x-2">
        {sliderData.map((_, index) => (
          <div
            key={nanoid()}
            onClick={() => handleDotClick(index)}
            className={
              currentSlide === index
                ? "bg-red-500 dark:bg-red-700 rounded-full p-2 cursor-pointer"
                : "bg-gray-300 dark:bg-gray-600 rounded-full p-2 cursor-pointer"
            }
          ></div>
        ))}
      </div>
      <div className="w-[95%] justify-between absolute md:bottom-64 bottom-44 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button className="dark:text-white md:text-4xl text-2xl" onClick={handlePrev}>
        <FaArrowLeft />
        </button>
        <button className="dark:text-white md:text-4xl text-2xl" onClick={handleNext}>
        <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
