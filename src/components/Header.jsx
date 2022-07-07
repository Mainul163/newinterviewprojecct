import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../asists/img/logo.png";
import Avatar from "../asists/img/avatar.png";
import { MdShoppingBasket } from "react-icons/md";
const Header = () => {
  return (
    <header className="fixed w-screen z-50  p-6 px-16">
      {/* destop & tablet */}

      <div className=" hidden w-full h-full  md:flex ">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} className="w-8 object-cover" alt="logo" />
          <p className="text test-headingColor font-bold   text-xl">City</p>
        </Link>
        <ul className="flex items-center gap-8 ml-auto">
          <li className="text-base text-textColor duration-100 transition-all ease-in-out cusor-pointer hover:text-headingColor">
            Home
          </li>
          <li className="text-base text-textColor duration-100 transition-all ease-in-out cusor-pointer hover:text-headingColor">
            Menu
          </li>
          <li className="text-base text-textColor duration-100 transition-all ease-in-out cusor-pointer hover:text-headingColor">
            {" "}
            About Us
          </li>
          <li className="text-base text-textColor duration-100 transition-all ease-in-out cusor-pointer hover:text-headingColor">
            Service
          </li>
        </ul>
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-2xl  ml-8" />
          <div className="absolute -top-2 right-1 flex bg-red-600 items-center justify-center w-5 h-5 bg-hadingColor rounded-full">
            <p className="text-xs text-white font-semibold">2</p>
          </div>
        </div>

        <div className="gap-2 flex ml-2">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl 
             cursor-pointer"
            alt="userprofile"
          />
        </div>
      </div>

      {/* mobile  */}

      <div className=" flex md:hidden h-full  w-full ">huadi for push</div>
    </header>
  );
};

export default Header;
