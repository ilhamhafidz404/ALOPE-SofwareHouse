import React from "react";

const Header = () => {
  return (
    <header className="mt-30 lg:mt-32 px-3 sm:px-6 lg:px-6" id="home">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 text-left md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-500 mb-2">
            One Stop Solution
          </h2>
          <p className="text-3xl md:text-5xl font-bold text-zinc-950 mb-5">
            For your digital needs
          </p>
          <p className="text-slate-500 text-base md:text-lg mb-8">
            We help your business grow with our creative solutions. Worry
            <br className="hidden md:block" />
            less and let's work together
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-full text-base md:text-lg">
            Contact Us Now
          </button>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="company profile"
            className="w-full h-auto rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
