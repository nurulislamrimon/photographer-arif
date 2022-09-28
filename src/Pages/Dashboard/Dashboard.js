import { signOut } from 'firebase/auth';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    return (
        <div className='mt-14 lg:mt-20 relative'>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-black glass text-success gap-1 lg:gap-2">

                        <li>
                            <Link to='managePhotos'>Manage Photos</Link>
                        </li>
                        <li>
                            <Link to='manageCarousel'>Manage Carousel Items</Link>
                        </li>
                        <li>
                            <Link to='manageAchivements'>Manage Achivements</Link>
                        </li>
                        <li>
                            <button onClick={() => signOut(auth)} className='btn btn-neutral glass hover:btn-primary mt-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                </svg>

                            </button></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;