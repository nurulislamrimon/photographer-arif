import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import usePhotos from "../../../CustomHooks/usePhotos";
import Spinner from "../../../Utilities/Spinner";
import "./Portfolio.css";
import PhotoTypesMenu from "../../../Components/PhotoTypesMenu/PhotoTypesMenu";

const Portfolio = () => {
  const [album, setAlbum] = useState("");
  const { data: photos, isLoading, refetch, error } = usePhotos(album, 8);

  const handleSelectedItem = (e) => {
    const exist = document.getElementsByClassName("selected-category")[0];
    // remove from existing
    exist?.classList?.remove("selected-category");
    // add in new
    e.target.classList.add("selected-category");

    e.target.innerText === "All" ? setAlbum("") : setAlbum(e.target.innerText);
  };
  return (
    <section className="p-3 lg:p-10 my-8">
      <div className="p-3 lg:p-10">
        <h2 className="text-2xl lg:text-5xl font-bold text-white">Portfolio</h2>
      </div>
      <PhotoTypesMenu handleSelectedItem={handleSelectedItem} />
      {/* loading ======= */}
      {isLoading && <Spinner />}
      {/* photo gallery======== */}
      <div className="py-10 grid md:grid-cols-3 lg:grid-cols-4 gap-5 grid-flow-dense">
        {photos?.map((item, index) => (
          <img
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
            key={index}
            src={item?.picture}
            alt="img"
            className="hover:brightness-110"
          />
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
