import React, { useEffect } from 'react';
import { useState } from 'react';

const MainCarousel = () => {
    const [allItems, setAllItems] = useState([]);
    const [itemNumber, setItemNumber] = useState(0);
    // fetch carousel items
    useEffect(() => {
        fetch('/test.json')
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [])
    // setInterval
    setInterval(() => {
        if (itemNumber + 1 === allItems.length) {
            setItemNumber(0);
        } else {
            setItemNumber(itemNumber + 1);
        }
    }, 5000);

    return (
        <div className={`h-[100vh] w-full`}>
            {<img src={allItems[itemNumber]?.picture} alt="" className='h-full w-full' />}
        </div>
    );
};

export default MainCarousel;