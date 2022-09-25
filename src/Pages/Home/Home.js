import React from 'react';
import CustomCarousel from './CustomCarousel/CustomCarousel';
import './Home.css';
import HomeAchivement from './HomeAcivement/HomeAchivement';
import Portfolio from './Portfolio/Portfolio';
import SimpleIntro from './SimpleIntro/SimpleIntro';

const Home = () => {

    return (
        <>
            <CustomCarousel />
            <SimpleIntro />
            <div className="flex justify-center">
                <h1 className="text-5xl text-white border-b inline-block pb-2 border-success">Inspiration</h1>
            </div>
            <HomeAchivement />
            <Portfolio />
        </>
    );
};

export default Home;