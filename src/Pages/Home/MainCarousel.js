import React, { useEffect } from 'react';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MainCarousel = () => {
    const [allItems, setAllItems] = useState([]);
    // fetch carousel items
    useEffect(() => {
        fetch('/test.json')
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, []);


    return (
        <div className={`h-[100vh] w-full carousel-container`}>
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} useKeyboardArrows={true} showThumbs={false} stopOnHover={true} selectedItem={0} autoFocus={true} interval={4000} animationHandler='fade'>

                {allItems.map(item => (
                    <div className='h-[100vh]'>
                        <img src={item?.picture} className='h-full w-full' alt='img' />
                        <p className="legend">Legend 1</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default MainCarousel;