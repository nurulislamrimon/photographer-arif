import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const [openNav, setOpenNav] = useState(false);

    const activeStyle = {
        'text-decoration': 'underline',
        'color': 'gold'
    }

    const menus = [
        <NavLink onClick={() => openNav && setOpenNav(!openNav)} key='home' to='/home'

            style={({ isActive }) =>
                isActive ? activeStyle : undefined
            }
        >Home</NavLink>,

        <NavLink style={({ isActive }) =>
            isActive ? activeStyle : undefined
        } onClick={() => openNav && setOpenNav(!openNav)} key='gallery' to='/gallery' className='hover:text-success'>Gallery</NavLink>,

        <NavLink style={({ isActive }) =>
            isActive ? activeStyle : undefined
        } onClick={() => openNav && setOpenNav(!openNav)} key='achivement' to='/achivement' className='hover:text-success'>Achivement</NavLink>,
        <NavLink style={({ isActive }) =>
            isActive ? activeStyle : undefined
        } onClick={() => openNav && setOpenNav(!openNav)} key='stories' to='/stories' className='hover:text-success'>Stories</NavLink>,
        <NavLink style={({ isActive }) =>
            isActive ? activeStyle : undefined
        } onClick={() => openNav && setOpenNav(!openNav)} key='AboutMe' to='/aboutMe' className='hover:text-success'>About Me</NavLink>,
        <NavLink style={({ isActive }) =>
            isActive ? activeStyle : undefined
        } onClick={() => openNav && setOpenNav(!openNav)} key='BuyNow' to='/buyNow' className='hover:text-success'>Buy Now</NavLink>,
        <NavLink style={({ isActive }) =>
            isActive ? activeStyle : undefined
        } onClick={() => openNav && setOpenNav(!openNav)} key='ContactMe' to='/contactMe' className='hover:text-success'>Contact Me</NavLink>,
    ]
    return (
        <div className="mb-16">
            <header className='bg-black text-white h-16 flex justify-between px-5 items-center fixed top-0 w-full z-50 border-b-2 border-success'>
                <NavLink to='/'>
                    <h3 className='text-3xl text-success hover:text-white tracking-wider font-bold font-name'>Arif Hasan</h3>
                    <p className='text-white hover:text-success'>Natural photographer</p>
                </NavLink>
                {/* small device menu btn */}
                <label onClick={() => setOpenNav(!openNav)} className="lg:hidden p-5">
                    {!openNav ? <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>}
                </label>
                {/* small device */}
                <ul className={`absolute top-16 right-0 w-[100vw] flex flex-col p-10 shadow  bg-black gap-5 duration-700 z-50 select-none text-center ${!openNav && 'hidden'}`}>
                    {menus}
                </ul>
                {/* large device */}
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 gap-5">
                        {menus}
                    </ul>
                </div>
            </header>
        </div>

    );
};

export default Header;