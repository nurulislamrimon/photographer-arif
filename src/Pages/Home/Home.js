import React from 'react';
import Header from '../../Utilities/Header/Header';
import Footer from '../Footer/Footer';
import Achivement from './Acivement/Achivement';
import CustomCarousel from './CustomCarousel/CustomCarousel';
import './Home.css';
import Portfolio from './Portfolio/Portfolio';
import SimpleIntro from './SimpleIntro/SimpleIntro';
// import SlideCarousel from './SlideCarousel/SlideCarousel';

const Home = () => {
    return (
        <div className="relative">
            <div className="mb-16">
                <Header />
            </div>
            <CustomCarousel />
            <SimpleIntro />
            <div className="flex justify-center">
                <h1 className="text-5xl text-white border-b inline-block pb-2 border-success">Inspiration</h1>
            </div>
            <Achivement />
            <Portfolio />
            <Footer />
        </div>
    );
};

export default Home;