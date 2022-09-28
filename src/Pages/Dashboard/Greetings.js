import React from 'react';
import DrawerBtn from './DrawerBtn';

const Greetings = () => {
    return (
        <div className='relative h-screen w-full flex justify-center items-center'>
            {/* small size hamburger */}
            <DrawerBtn />


            <h1 className='font-extrabold text-transparent text-5xl lg:text-8xl bg-clip-text bg-gradient-to-tr from-red-600 to-blue-600'>Welcome</h1>
        </div>
    );
};

export default Greetings;