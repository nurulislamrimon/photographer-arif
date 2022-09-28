import React from 'react';

const DrawerBtn = () => {
    return (
        <label htmlFor="dashboard-drawer" className="btn btn-xs btn-primary drawer-button lg:hidden absolute top-0 left-0 gap-1 flex flex-col">
            <div className="w-3 bg-success h-0.5"></div>
            <div className="w-3 bg-success h-0.5"></div>
        </label>
    );
};

export default DrawerBtn;