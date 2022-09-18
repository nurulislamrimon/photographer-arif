import React, { useEffect, useState } from 'react';
import './CustomCarousel.css';

const CustomCarousel = () => {
    const [allItems, setAllItems] = useState([]);
    const [currentItem, setCurrentItem] = useState(0);
    // fetch carousel items
    useEffect(() => {
        fetch('/test.json')
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, []);
    // carousel manual control
    const handleCarouselItem = (btn, e) => {
        if (btn === 'next') {
            currentItem + 1 === allItems.length ? setCurrentItem(0) : setCurrentItem(currentItem + 1);
        } else if (btn === 'prev') { currentItem === 0 ? setCurrentItem(allItems.length - 1) : setCurrentItem(currentItem - 1); }
    }
    // carousel auto run
    useEffect(() => {
        const carouselInterval = setInterval(() => {
            currentItem + 1 === allItems.length ? setCurrentItem(0) : setCurrentItem(currentItem + 1)
        }, 10000);
        return () => clearInterval(carouselInterval)
    }, [currentItem, allItems]);


    // swipe slider
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;
    var yDown = null;

    function getTouches(evt) {
        return evt.touches ||             // browser API
            evt.originalEvent.touches; // jQuery
    }

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    function handleTouchMove(evt) {
        if (!xDown || !yDown) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
            if (xDiff > 0) {
                /* right swipe */
                currentItem + 1 === allItems.length ? setCurrentItem(0) : setCurrentItem(currentItem + 1);
            } else {
                /* left swipe */
                currentItem === 0 ? setCurrentItem(allItems.length - 1) : setCurrentItem(currentItem - 1);
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
    };

    return (
        <div className='carousel-container h-[100vh] w-full overflow-x-hidden relative'>
            <div className="fixed flex right-5 bottom-5 z-10 cursor-pointer rounded-full">
                <div className="bg-[rgba(0,0,0,.4)] hover:bg-black text-white p-5 rounded-tl-full rounded-bl-full" onClick={(e) => handleCarouselItem('prev', e)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                </div>
                <div className="bg-[rgba(0,0,0,.4)] hover:bg-black text-white p-5 rounded-tr-full rounded-br-full" onClick={(e) => handleCarouselItem('next', e)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                </div>
            </div>
            {allItems.map((item, index) => {
                return <div className={index === currentItem ? 'carousel active' : 'carousel'}>
                    {currentItem === index &&
                        <>
                            <img className='w-full' src={item?.picture} alt="" />
                            <div className='absolute top-0 mt-auto bottom-0 mb-auto left-0 ml-auto right-0 mr-auto lg:w-2/4 flex flex-col items-center justify-center text-center px-24 text-white'>
                                <h1 className="text-5xl lg:text-[60px] font-bold capitalize font-poppins">{item?.name}</h1>
                                <p className='tag text-lg lg:text-3xl mt-5 font-style'>{item?.about}</p>
                                <p className='text-md lg:text-lg mt-5 font-poppins'>{item?.about}</p>
                            </div>
                        </>
                    }
                </div>
            })}
        </div>
    );
};

export default CustomCarousel;