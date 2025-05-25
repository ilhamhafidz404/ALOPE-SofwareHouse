import React from "react";

const Navbar = () => {
  return (
    <nav className="container mx-auto fixed top-0 left-0 right-0 bg-white shadow-sm z-50 py-4 px-4 sm:px-6 md:px-6 lg:px-8 xl:px-6">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl text-zinc-900">
          Alope Software House
        </h2>

        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          <ul className="hidden md:flex gap-4 lg:gap-6 text-sm lg:text-base text-slate-500">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#course" className="hover:underline">
                Course
              </a>
            </li>
            <li>
              <a href="#article" className="hover:underline">
                Article
              </a>
            </li>
          </ul>

          <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm px-4 sm:px-5 lg:px-6 py-2 rounded-full">
            I'm interested
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
