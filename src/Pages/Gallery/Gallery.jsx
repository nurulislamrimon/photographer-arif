import "./Gallery.css";
import React from "react";
import { useState } from "react";
import usePhotos from "../../CustomHooks/usePhotos";
import Spinner from "../../Utilities/Spinner";
import PhotoTypesMenu from "../../Components/PhotoTypesMenu/PhotoTypesMenu";
import galleryPhoto from "../../images/gallery-top-section.jpg";

const Gallery = () => {
  const [album, setAlbum] = useState("");
  const { data: photos, isLoading, refetch, error } = usePhotos(album, 0);

  const selectedItem = (e) => {
    const exist = document.getElementsByClassName("selected-category")[0];
    // remove from existing
    exist.classList.remove("selected-category");
    // add in new
    e.target.classList.add("selected-category");
    e.target.innerText === "All" ? setAlbum("") : setAlbum(e.target.innerText);
  };

  return (
    <section>
      <div
        className={`bg-${galleryPhoto} bg-fixed bg-no-repeat h-[100vh] bg-cover bg-center`}
      >
        <div
          className={`h-full w-full flex items-center justify-center bg-gradient-to-t from-black to-transparent`}
        >
          <h2 className="text-2xl lg:text-[100px] font-bold text-white text-center ">
            Gallery
          </h2>
        </div>
      </div>

      <PhotoTypesMenu handleSelectedItem={selectedItem} />

      {isLoading && <Spinner />}

      <div className="py-10 grid items-center lg:grid-cols-4 gap-5 grid-flow-dense">
        {photos?.map((item, index) => (
          <div key={index} data-aos="zoom-in-up">
            <img
              src={item?.picture}
              alt="img"
              className="hover:brightness-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
