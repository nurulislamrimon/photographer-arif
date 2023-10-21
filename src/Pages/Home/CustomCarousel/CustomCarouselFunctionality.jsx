import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCarousel from "../../../CustomHooks/useCarousel";
import Spinner from "../../../Utilities/Spinner";
import "./CustomCarousel.css";
import CustomCarouselMarkup from "./CustomCarouselMarkup";

const CustomCarouselFunctionality = () => {
  const { data: carouselItems, loading, refetch, error } = useCarousel();
  const [currentItem, setCurrentItem] = useState(0);
  // carousel manual control
  const handleCarouselItem = (btn, e) => {
    if (btn === "next") {
      currentItem + 1 === carouselItems?.length
        ? setCurrentItem(0)
        : setCurrentItem(currentItem + 1);
    } else if (btn === "prev") {
      currentItem === 0
        ? setCurrentItem(carouselItems?.length - 1)
        : setCurrentItem(currentItem - 1);
    }
  };
  // carousel auto run
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      currentItem + 1 === carouselItems?.length
        ? setCurrentItem(0)
        : setCurrentItem(currentItem + 1);
    }, 7000);
    return () => clearInterval(carouselInterval);
  }, [currentItem, carouselItems]);

  // swipe slider
  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);

  var xDown = null;
  var yDown = null;

  function getTouches(evt) {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  }

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* right swipe */
        currentItem + 1 === carouselItems?.length
          ? setCurrentItem(0)
          : setCurrentItem(currentItem + 1);
      } else {
        /* left swipe */
        currentItem === 0
          ? setCurrentItem(carouselItems?.length - 1)
          : setCurrentItem(currentItem - 1);
      }
    } else {
      if (yDiff > 0) {
        /* down swipe */
      } else {
        /* up swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  }
  if (loading) {
    return <Spinner />;
  }
  return (
    <CustomCarouselMarkup
      handleCarouselItem={handleCarouselItem}
      carouselItems={carouselItems}
      currentItem={currentItem}
    />
  );
};

export default CustomCarouselFunctionality;
