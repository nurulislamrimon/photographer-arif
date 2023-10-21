import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import usePhotos from "../../../CustomHooks/usePhotos";
import Spinner from "../../../Utilities/Spinner";
import "./Portfolio.css";

const Portfolio = () => {
  const [album, setAlbum] = useState("");
  const { data: photos, isLoading, refetch, error } = usePhotos(album, 8);
  const selectedItem = (e) => {
    const exist = document.getElementsByClassName("selected-category")[0];
    // remove from existing
    exist.classList.remove("selected-category");
    // add in new
    e.target.classList.add("selected-category");

    e.target.innerText === "All" ? setAlbum("") : setAlbum(e.target.innerText);
  };
  return (
    <section className="p-3 lg:p-10 my-8">
      <div className="p-3 lg:p-10">
        <h2 className="text-2xl lg:text-5xl font-bold text-white">Portfolio</h2>
      </div>
      <div className="categories-btn-container flex gap-2 flex-wrap justify-center">
        <button
          onClick={selectedItem}
          className="py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success  selected-category"
        >
          All
        </button>
        <button
          onClick={selectedItem}
          className="py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success "
        >
          Aerial
        </button>
        <button
          onClick={selectedItem}
          className="py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success "
        >
          Architecture
        </button>
        <button
          onClick={selectedItem}
          className="py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success "
        >
          Beautiful Bangladesh
        </button>
        <button
          onClick={selectedItem}
          className="py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success "
        >
          Best Shots
        </button>
        <button
          onClick={selectedItem}
          className="py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success "
        >
          Black And White
        </button>
        <button
          onClick={selectedItem}
          className="py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success "
        >
          Documentary
        </button>
        <button
          onClick={selectedItem}
          className="py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success "
        >
          Festival And Tradition
        </button>
        <button
          onClick={selectedItem}
          className="py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success "
        >
          Lifestyle
        </button>
        <button
          onClick={selectedItem}
          className="py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success "
        >
          Mobile Photo
        </button>
        <button
          onClick={selectedItem}
          className="py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success "
        >
          Portrait
        </button>
        <button
          onClick={selectedItem}
          className="py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success "
        >
          Street
        </button>
        <button
          onClick={selectedItem}
          className="py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success "
        >
          Travel
        </button>
        <button
          onClick={selectedItem}
          className="py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success "
        >
          Wildlife
        </button>
        <button
          onClick={selectedItem}
          className="py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success "
        >
          Micro
        </button>
      </div>
      {isLoading && <Spinner />}
      <div className="py-10 grid items-center lg:grid-cols-4 gap-5">
        {photos?.map((item, index) => (
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
            key={index}
          >
            <img
              src={item?.picture}
              alt="img"
              className="hover:brightness-110"
            />
          </div>
        ))}
      </div>
      <Link
        to="/gallery"
        className="border rounded-3xl border-success px-10 py-3 text-white hover:bg-success duration-300"
      >
        Go to Album
      </Link>
    </section>
  );
};

export default Portfolio;
