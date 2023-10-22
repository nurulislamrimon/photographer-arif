import React from "react";
import { Link } from "react-router-dom";

const CarouselItemRender = ({ item }) => {
  return (
    <>
      <img
        className="w-full h-[300px] md:h-full overflow-hidden opacity-70 my-auto object-cover object-center"
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
  );
};

export default CarouselItemRender;
