import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../asists/img/logo.png";
import Avatar from "../asists/img/avatar.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "./../context/StateProvider";
import { actionType } from "./../context/Reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();

  const logIn = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,

        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    }
  };
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

        <div className="relative">
          <div className="gap-2 flex ml-2">
            <motion.img
              whileTap={{ scale: 0.6 }}
              // src={Avatar}
              src={user ? user?.photoURL : Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl 
             cursor-pointer rounded-full"
              alt="userprofile"
              onClick={logIn}
            />
          </div>
          <div className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute  top-12 right-0">
            <p className="px-4 py-2 flex item-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-base">
              New Item <MdAdd className="mt-1" />
            </p>

            <p className="px-4 py-2 flex item-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-base">
              Logout <MdLogout className="mt-1" />
            </p>
          </div>
        </div>
      </div>

      {/* mobile  */}

      <div className=" flex md:hidden h-full  w-full ">huadi for push</div>
    </header>
  );
};

export default Header;
