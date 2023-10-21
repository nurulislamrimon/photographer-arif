import React from "react";
import { Link } from "react-router-dom";
import "./HomeAchivement.css";
import { achivements } from "../../../Utilities/variables/achivements";

const HomeAchivement = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-5 justify-items-center justify-content-center gap-10 p-10">
      {achivements.map((achivement) => (
        <Link
          key={achivement.id}
          to="/achivement"
          className="relative hover:text-success cursor-pointer"
        >
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            alt="img"
            src={achivement.photoUrl}
            className="rounded-3xl h-auto mx-auto max-w-sm"
            loading="lazy"
          />
          <article className="absolute bottom-0 left-0 right-0 p-2 lg:p-5 flex flex-col glass rounded-bl-3xl rounded-br-3xl duration-1000">
            <h3 className="lg:text-2xl text-center">{achivement.title}</h3>
            <p className="text-sm text-center">{achivement.description}</p>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default HomeAchivement;
