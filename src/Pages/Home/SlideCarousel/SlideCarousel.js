import React, { useEffect, useState } from 'react';
import './SlideCarousel.css'

const SlideCarousel = () => {
    const [allItems, setAllItems] = useState([]);

    // fetch carousel items
    useEffect(() => {
        fetch('/test.json')
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, []);

    return (
        <div className='w-full'>
            <div className="slider-container gap-5 flex overflow-x-auto cursor-pointer" data-slick={`{"slidesToShow": 4, "slidesToScroll": 4}`}>
                {allItems?.map(item => <img src={item?.picture} className={`h-[350px] w-full`} alt='img' />)}
            </div>

        </div>
    );
};

export default SlideCarousel;