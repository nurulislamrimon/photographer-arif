import React from 'react';
import { Link } from 'react-router-dom';

const BuyNow = () => {
    return (
        <section className='min-h-[100vh] flex flex-col gap-10 justify-center items-center text-center p-10'>
            <img src="/greetings.png" alt="" />
            <h1 className="text-3xl lg:text-5xl text-success">Thanks for being here</h1>
            <p className='text-white'>Please select your favourite photo and collect the unique id from <Link to='/gallery' className='text-success hover:underline'>Gallery</Link>.
                <br />
                If you have photo id <Link to='/contactMe' className='text-success hover:underline'>Contact me</Link> to confirm your order.</p>
        </section>
    );
};

export default BuyNow;