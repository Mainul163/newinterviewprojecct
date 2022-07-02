import React from "react";

const Header = () => {
  return (
    <div className="fixed w-screen z-50 bg-slate-300 p-6 px-16">
      {/* destop & tablet */}

      <div className=" hidden w-full h-full  md:flex "></div>

      {/* mobile  */}

      <div className=" flex md:hidden h-full  w-full "></div>
    </div>
  );
};

export default Header;
