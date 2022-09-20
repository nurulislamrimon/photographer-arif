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

    const sliderContainer = document.getElementById('slider-container');
    const handleNext = () => {
        console.dir(sliderContainer.scrollWidth);
        sliderContainer.scrollLeft += sliderContainer.scrollWidth
    }


    return (
        <div className='w-full'>
            <div className="slider-container gap-5 flex overflow-x-auto cursor-pointer" id='slider-container'>
                {allItems?.map(item => <img src={item?.picture} className={`h-[350px] w-[500px]`} alt='img' />)}
            </div>

            <button onClick={handleNext} className='btn bg-btnPrimary'>Next</button>

        </div>
    );
};

export default SlideCarousel;