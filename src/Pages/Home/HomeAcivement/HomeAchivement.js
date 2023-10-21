import React from "react";
import { Link } from "react-router-dom";
import "./HomeAchivement.css";

const HomeAchivement = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-5 p-10">
      <Link
        to="/achivement"
        className="relative hover:text-success lg:h-[40vw] cursor-pointer pb-16"
      >
        <img
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          src="./images/achivements/arif-achivement-3.jpg"
          alt="img"
          className=" rounded-3xl h-full mx-auto "
          loading="lazy"
        />
        <article className="absolute bottom-0 left-0 right-0 p-2 lg:p-5 flex flex-col glass rounded-bl-3xl rounded-br-3xl duration-1000">
          <h3 className="text-3xl text-center">Achivement</h3>
          <p className="text-lg text-center">
            Some achivement gives us strength.
          </p>
        </article>
      </Link>
      <Link
        to="/achivement"
        className="relative hover:text-success lg:h-[40vw] cursor-pointer"
      >
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          alt="img"
          src="./images/achivements/arif-achivement-2.jpg"
          className="rounded-3xl h-full  mx-auto"
          loading="lazy"
        />
        <article className="absolute bottom-0 left-0 right-0 p-2 lg:p-5 flex flex-col glass rounded-bl-3xl rounded-br-3xl duration-1000">
          <h3 className="text-3xl text-center">Achivement</h3>
          <p className="text-lg text-center">
            Some achivement gives us strength.
          </p>
        </article>
      </Link>
    </div>
  );
};

export default HomeAchivement;
