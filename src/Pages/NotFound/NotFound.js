import React from 'react';

const NotFound = () => {
    return (
        <div className='h-[calc(100vh)] flex flex-col items-center justify-center'>
            <h1 className="text-center text-red-600 font-bold text-5xl">404</h1>
            <p className="text-white">Page Not Found!</p>
        </div>
    );
};

export default NotFound;