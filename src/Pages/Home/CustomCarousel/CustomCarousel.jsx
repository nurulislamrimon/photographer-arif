import "./CustomCarousel.css";
import React, { useEffect, useState } from "react";
import useCarousel from "../../../CustomHooks/useCarousel";
import Spinner from "../../../Utilities/Spinner";
import SocialMediaBtn from "./CarouselComponents/SocialMediaBtn";
import CarouselNextPrevBtn from "./CarouselComponents/CarouselNextPrevBtn";
import CarouselItemRender from "./CarouselComponents/CarouselItemRender";

const CustomCarousel = () => {
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
    }, 10000);
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
    <div className="carousel-container w-full h-[300px] relative md:h-[100vh] overflow-hidden mt-14">
      <SocialMediaBtn />

      <CarouselNextPrevBtn handleCarouselItem={handleCarouselItem} />

      {carouselItems?.map((item, index) => {
        return (
          <div
            key={index}
            className={`carousel ${index === currentItem && "active"}`}
          >
            {currentItem === index && <CarouselItemRender item={item} />}
          </div>
        );
      })}
    </div>
  );
};

export default CustomCarousel;
