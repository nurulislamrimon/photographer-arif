import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [user] = useAuthState(auth);

  const activeStyle = {
    textDecoration: "underline",
    color: "gold",
    fontWeight: "700",
  };

  const menus = [
    <NavLink
      onClick={() => openNav && setOpenNav(!openNav)}
      key="home"
      to="/home"
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      className="hover:text-success text-xl"
    >
      Home
    </NavLink>,

    <NavLink
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      onClick={() => openNav && setOpenNav(!openNav)}
      key="gallery"
      to="/gallery"
      className="hover:text-success text-xl"
    >
      Gallery
    </NavLink>,

    <NavLink
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      onClick={() => openNav && setOpenNav(!openNav)}
      key="achivement"
      to="/achivement"
      className="hover:text-success text-xl"
    >
      Achivement
    </NavLink>,
    <NavLink
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      onClick={() => openNav && setOpenNav(!openNav)}
      key="stories"
      to="/stories"
      className="hover:text-success text-xl"
    >
      Stories
    </NavLink>,
    <NavLink
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      onClick={() => openNav && setOpenNav(!openNav)}
      key="AboutMe"
      to="/aboutMe"
      className="hover:text-success text-xl"
    >
      About Me
    </NavLink>,
    <NavLink
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      onClick={() => openNav && setOpenNav(!openNav)}
      key="BuyNow"
      to="/buyNow"
      className="hover:text-success text-xl"
    >
      Buy Now
    </NavLink>,
    <NavLink
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      onClick={() => openNav && setOpenNav(!openNav)}
      key="ContactMe"
      to="/contactMe"
      className="hover:text-success text-xl"
    >
      Contact Me
    </NavLink>,
  ];
  const adminMenus = [
    <NavLink
      onClick={() => openNav && setOpenNav(!openNav)}
      key="home"
      to="/home"
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      className="hover:text-success text-xl"
    >
      Home
    </NavLink>,

    <NavLink
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      onClick={() => openNav && setOpenNav(!openNav)}
      key="gallery"
      to="/gallery"
      className="hover:text-success text-xl"
    >
      Gallery
    </NavLink>,

    <NavLink
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      onClick={() => openNav && setOpenNav(!openNav)}
      key="achivement"
      to="/achivement"
      className="hover:text-success text-xl"
    >
      Achivement
    </NavLink>,
    <NavLink
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      onClick={() => openNav && setOpenNav(!openNav)}
      key="stories"
      to="/stories"
      className="hover:text-success text-xl"
    >
      Stories
    </NavLink>,
    <NavLink
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      onClick={() => openNav && setOpenNav(!openNav)}
      key="AboutMe"
      to="/aboutMe"
      className="hover:text-success text-xl"
    >
      About Me
    </NavLink>,
    <NavLink
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      onClick={() => openNav && setOpenNav(!openNav)}
      key="BuyNow"
      to="/buyNow"
      className="hover:text-success text-xl"
    >
      Buy Now
    </NavLink>,
    <NavLink
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      onClick={() => openNav && setOpenNav(!openNav)}
      key="ContactMe"
      to="/contactMe"
      className="hover:text-success text-xl"
    >
      Contact Me
    </NavLink>,
    <NavLink
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      onClick={() => openNav && setOpenNav(!openNav)}
      key="dashboard"
      to="/dashboard/greetings"
      className="hover:text-success text-xl"
    >
      Dashboard
    </NavLink>,
  ];

  /*  const navbar = document.getElementById("navbar");
     window.onscroll = function () {
         if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
             navbar.style.backgroundColor = "black";
             navbar.style.borderBottom = "1px solid gold";
             navbar.style.padding = "0 20px";
         } else {
             navbar.style.backgroundColor = "transparent";
             navbar.style.borderBottom = "none";
             navbar.style.padding = "0";
         }
     }; */

  return (
    <div>
      <header
        id="navbar"
        className=" text-white h-fit flex justify-between items-center fixed top-0 w-full z-30 duration-1000 glass px-10"
      >
        <NavLink to="/" className="p-2 lg:p-3">
          <h3 className="text-xl lg:text-3xl text-success hover:text-white tracking-wider font-bold font-name">
            Arif Hasan
          </h3>
          <p className="text-xs lg:text-lg text-white hover:text-success">
            Natural photographer
          </p>
        </NavLink>
        {/* small device menu btn */}
        <label
          onClick={() => setOpenNav(!openNav)}
          className="lg:hidden p-5 cursor-pointer"
        >
          {!openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </label>
        {/* small device */}
        <ul
          className={`absolute top-16 right-0 w-[100vw] h-[100vh] overflow-y-scroll flex flex-col p-10 pb-20 shadow  bg-black gap-5 duration-700 z-50 select-none text-center ${
            !openNav && "hidden"
          }`}
        >
          {user?.uid ? adminMenus : menus}
        </ul>
        {/* large device */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal p-0 gap-5">
            {user?.uid ? adminMenus : menus}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
