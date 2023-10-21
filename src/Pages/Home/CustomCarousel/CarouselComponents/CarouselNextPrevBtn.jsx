import React from "react";

const CarouselNextPrevBtn = ({ handleCarouselItem }) => {
  return (
    <div className="carousel-btn absolute top-2/4 flex justify-between w-full z-10 cursor-pointer rounded-full">
      <div
        className="bg-[rgba(0,0,0,.4)] hover:bg-black text-white lg:p-5 rounded-tl-full rounded-bl-full"
        onClick={(e) => handleCarouselItem("prev", e)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </div>
      <div
        className="bg-[rgba(0,0,0,.4)] hover:bg-black text-white lg:p-5 rounded-tr-full rounded-br-full"
        onClick={(e) => handleCarouselItem("next", e)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};

export default CarouselNextPrevBtn;
