import React from "react";
import { useState } from "react";
import useCarousel from "../../../CustomHooks/useCarousel";
import DrawerBtn from "../DrawerBtn";
import AddNewItem from "../../../Utilities/Modals/AddNewItem";
import CarouselTable from "./CarouselTable";

const ManageCarousel = () => {
  const { data: carousel, loading, refetch, error } = useCarousel();
  const [addNewCarousel, setAddNewCarousel] = useState(false);
  return (
    <div className="relative min-h-screen p-5">
      <label
        onClick={() => setAddNewCarousel(true)}
        htmlFor="AddNewPhoto"
        className="btn btn-xs lg:btn-sm absolute top-7 lg:top-10 right-5 text-success"
      >
        Add carousel item
      </label>
      {/* small size hamburger */}
      <DrawerBtn />
      <h2 className="font-bold text-transparent text-xl lg:text-5xl bg-clip-text bg-gradient-to-tr from-red-600 to-blue-600 pb-5 text-center select-none">
        Manage Carousel
      </h2>
      <CarouselTable
        items={carousel}
        loading={loading}
        refetch={refetch}
        error={error}
      />
      {addNewCarousel && (
        <AddNewItem
          refetch={refetch}
          setAddNewItem={setAddNewCarousel}
          fetchTo="carousel"
        />
      )}
    </div>
  );
};

export default ManageCarousel;
