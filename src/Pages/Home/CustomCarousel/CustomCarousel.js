import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
        <div className='carousel-container w-full overflow-x-hidden relative lg:min-h-[130vh] overflow-hidden'>
            <div className='bg-black -rotate-90 text-textPrimary absolute top-14 lg:top-24 -left-16 lg:-left-28 flex z-20'>
                <a href="tel: +8801811324330" className='p-1 text-xs lg:text-lg lg:p-5 text-success hover:text-white'>Mobile</a>
                <a href="mailto: arifhasan@gmal.com" className='p-1 text-xs lg:text-lg lg:p-5 text-success hover:text-white'>Mail</a>
                <a href="https://www.facebook.com/profile.php?id=100008209128475" target='_blank' rel="noreferrer" className='p-1 pr-2 text-xs lg:text-lg lg:p-5 text-success hover:text-white'>Facebook </a>
            </div>

            <div className="carousel-btn absolute top-2/4 flex justify-between w-full z-10 cursor-pointer rounded-full">
                <div className="bg-[rgba(0,0,0,.4)] hover:bg-black text-white lg:p-5 rounded-tl-full rounded-bl-full" onClick={(e) => handleCarouselItem('prev', e)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                </div>
                <div className="bg-[rgba(0,0,0,.4)] hover:bg-black text-white lg:p-5 rounded-tr-full rounded-br-full" onClick={(e) => handleCarouselItem('next', e)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                </div>
            </div>


            {allItems.map((item, index) => {
                return <div className={`carousel ${index === currentItem && 'active'}`}>
                    {currentItem === index &&
                        <>

                            <img className='w-full h-full object-cover overflow-hidden' src={item?.picture} alt="" />

                            <div className='absolute inset-0 flex items-center justify-center'>
                                <div className=' flex flex-col items-center justify-center text-center px-24 text-white h-fit'>
                                    <h1 className="text-xl lg:text-[60px] font-bold capitalize font-poppins leading-none w-32 lg:w-96">{item?.name}</h1>

                                    <p className='tag text-md lg:text-3xl mt-2 lg:mt-5 font-style'>{item?.about}</p>
                                    <p className='text-xs lg:text-lg mt-2 lg:mt-5 font-poppins'>{item?.about}</p>
                                    <Link to='/aboutMe' className='border text-xs lg:text-lg border-success rounded-3xl lg:py-3 px-3 lg:px-10 mt-2 lg:mt-5 hover:bg-success duration-300'>More about me</Link>
                                </div>
                            </div>
                        </>
                    }
                </div>
            })}
        </div>
    );
};

export default CustomCarousel;