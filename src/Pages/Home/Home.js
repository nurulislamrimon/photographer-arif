import React from 'react';
import Header from '../../Utilities/Header/Header';
import CustomCarousel from './CustomCarousel/CustomCarousel';
import SlideCarousel from './SlideCarousel/SlideCarousel';

const Home = () => {
    return (
        <div>
            <div className="relative">
                <div className="grid grid-cols-2 top-0 w-full z-20">
                    <Header />
                </div>
                <CustomCarousel />
            </div>
            <div className="lg:flex items-center py-10">
                <div className='lg:w-[300px] text-white p-4 text-center'>
                    <h3 className="text-3xl mb-5">Best Shots</h3>
                    <p className='leading-loose tracking-widest'>I like to shot for peace of my mind. It is my mental refreshment. I love to shot anywhere anytime</p>
                </div>
                <SlideCarousel />
            </div>
        </div>
    );
};

export default Home;