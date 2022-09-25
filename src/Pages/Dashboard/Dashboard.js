import { signOut } from 'firebase/auth';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    return (
        <div className='mt-14 lg:mt-20 relative'>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <Outlet />

                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden absolute top-0 left-0 gap-1 flex flex-col">
                        <div className="w-3 bg-success h-0.5"></div>
                        <div className="w-3 bg-success h-0.5"></div>
                    </label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-black glass text-success gap-5">

                        <li>
                            <Link to='item1'>Sidebar Item 1</Link>
                        </li>
                        <li>
                            <button onClick={() => signOut(auth)} className='btn btn-neutral glass hover:btn-primary'>Logout</button></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;