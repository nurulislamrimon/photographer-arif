import React from 'react';
import Header from '../../Utilities/Header/Header';
import Footer from '../Footer/Footer';
import CustomCarousel from './CustomCarousel/CustomCarousel';
import './Home.css';
import SlideCarousel from './SlideCarousel/SlideCarousel';
// import SlideCarousel from './SlideCarousel/SlideCarousel';

const Home = () => {
    return (
        <div>
            <div className="relative">
                <div className="mb-16">
                    <div className="fixed top-0 w-full z-50">
                        <Header />
                    </div>
                </div>
            </div>
            <CustomCarousel />
            {/*  <div className="lg:flex items-center py-10">
                <div className='lg:w-[300px] text-white p-4 text-center'>
                    <h3 className="text-3xl mb-5">Best Shots</h3>
                    <p className='leading-loose tracking-widest'>I like to shot for peace of my mind. It is my mental refreshment. I love to shot anywhere anytime</p>
                </div>
                <SlideCarousel />
            </div> */}
            <div className='grid lg:grid-cols-2 min-h-[100vh] p-5 lg:p-20'>
                <div>
                    <div><p className=' text-neutral tracking-widest text-lg font-thin'>Natural Photographer</p>
                        <h3 className='text-5xl text-accent uppercase tracking-tighter'>Arif Hasan</h3>
                    </div>
                    <div className='flex'>
                        <div className='hidden lg:block'>
                            <hr className='border border-neutral mt-10 w-56' />
                        </div>
                        <article className='text-accent mt-10 lg:mt-0 lg:p-7'>
                            <h4 className='text-neutral text-xl lg:text-2xl uppercase font-thin'>Mohammad Arif Hasan is a Natural Photography Artist based in Noakhali, Bangladesh.</h4>
                            <p className='text-sm lg:text-lg font-thin'>He is so popular for his creative photographs all over the world. Locally he is well known for his over size fitness and joker character.He is so popular for his creative photographs all over the world. Locally he is well known for his over size fitness and joker character.He is so popular for his creative photographs all over the world. Locally he is well known for his over size fitness and joker character.He is so popular for his creative photographs all over the world. Locally he is well known for his over size fitness and joker character. </p>
                        </article>
                    </div>
                </div>
                <div className='py-10 lg:mt-24'>
                    <div className='about-photo-container w-3/4 mx-auto h-fit z-10'>
                        <img src="https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/121833144_2771357409814536_260910336032861344_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEts9idxdWmhIgXMS12emr29ZmB45S63JT1mYHjlLrclJwXNJkYAqP9aZofKNfZR89A_ldnaAg_bv5eiw-iV99Q&_nc_ohc=vEkjFH40rcYAX_mmxsu&_nc_ht=scontent.fdac116-1.fna&oh=00_AT9_AgB_iTI6drKSFftgg2CP7nGkBH9dtenhII0COuGq6g&oe=634F7464" alt="img" className='w-full grayscale hover:translate-x-5 hover:translate-y-5 duration-700' />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;