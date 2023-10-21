import React from "react";
import useCategory from "../../../CustomHooks/useCategory";

const PhotoTypesMenu = ({ handleSelectedItem }) => {
  const { categories } = useCategory();
  return (
    <div className="categories-btn-container flex gap-2 flex-wrap justify-center">
      {[{ _id: "all_category", category: "All" }, ...categories]?.map(
        (category) => (
          <button
            key={category?._id}
            onClick={handleSelectedItem}
            className={`py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success ${
              category?.category === "All" && "selected-category"
            }`}
          >
            {category?.category}
          </button>
        )
      )}
    </div>
  );
};

export default PhotoTypesMenu;
