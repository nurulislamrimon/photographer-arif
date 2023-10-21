import React from "react";
import { Link } from "react-router-dom";

const CustomCarouselMarkup = ({
  handleCarouselItem,
  carouselItems,
  currentItem,
}) => {
  return (
    <div className="carousel-container w-full overflow-x-hidden relative lg:min-h-[100vh] overflow-hidden mt-14">
      <div className="bg-black -rotate-90 social-btn-carousel absolute top-28 -left-24 hidden lg:flex z-20 text-lg p-2 text-success">
        <a href="tel: +8801811324330" className="p-1  hover:text-white">
          Mobile
        </a>
        <a href="mailto: arifhasan@gmal.com" className="p-1  hover:text-white">
          Mail
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100008209128475"
          target="_blank"
          rel="noreferrer"
          className="p-1 pr-2  hover:text-white"
        >
          Facebook{" "}
        </a>
      </div>

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

      {carouselItems?.map((item, index) => {
        return (
          <div
            key={index}
            className={`carousel ${index === currentItem && "active"}`}
          >
            {currentItem === index && (
              <>
                <img
                  className="w-full h-full object-cover overflow-hidden"
                  src={item?.picture}
                  alt=""
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className=" flex flex-col items-center justify-center text-center px-24 text-white h-fit">
                    <h1 className="text-xl lg:text-[60px] font-bold capitalize font-poppins leading-none w-32 lg:w-96">
                      {item?.name}
                    </h1>

                    <p className="tag text-md lg:text-3xl mt-2 lg:mt-5 font-style">
                      {item?.about}
                    </p>
                    <p className="text-xs lg:text-lg mt-2 lg:mt-5 font-poppins">
                      {item?.about}
                    </p>
                    <Link
                      to="/aboutMe"
                      className="border text-xs lg:text-lg border-success rounded-3xl lg:py-3 px-3 lg:px-10 mt-2 lg:mt-5 hover:bg-success duration-300"
                    >
                      More about me
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CustomCarouselMarkup;