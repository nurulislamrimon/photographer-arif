import React from 'react';
import Header from '../../Utilities/Header/Header';
import CustomCarousel from './CustomCarousel/CustomCarousel';
import SlideCarousel from './SlideCarousel/SlideCarousel';

const Home = () => {
    return (
        <div>
            <div className="relative">
                <div className="fixed top-0 w-full z-20">
                    <Header />
                </div>
                <CustomCarousel />
            </div>
            <SlideCarousel />
        </div>
    );
};

export default Home;