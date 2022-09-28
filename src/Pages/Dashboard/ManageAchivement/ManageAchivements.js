import React from 'react';
import DrawerBtn from '../DrawerBtn';

const ManageAchivements = () => {
    return (
        <div className='relative min-h-screen p-5'>
            {/* small size hamburger */}
            <DrawerBtn />

            <h2 className="font-bold text-transparent text-xl lg:text-5xl bg-clip-text bg-gradient-to-tr from-red-600 to-blue-600 pb-5 text-center select-none">Manage Achivement</h2>
        </div>
    );
};

export default ManageAchivements;