import React from 'react';
import Header from '../../Utilities/Header/Header';
import Footer from '../../Utilities/Footer/Footer';
import Achivement from './Acivement/Achivement';
import CustomCarousel from './CustomCarousel/CustomCarousel';
import './Home.css';
import Portfolio from './Portfolio/Portfolio';
import SimpleIntro from './SimpleIntro/SimpleIntro';
// import SlideCarousel from './SlideCarousel/SlideCarousel';

const Home = () => {
    return (
        <>
            <CustomCarousel />
            <SimpleIntro />
            <div className="flex justify-center">
                <h1 className="text-5xl text-white border-b inline-block pb-2 border-success">Inspiration</h1>
            </div>
            <Achivement />
            <Portfolio />
        </>
    );
};

export default Home;