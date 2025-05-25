import React from "react";

const Header = () => {
  return (
    <header
      className="mt-30 lg:mt-32 px-4 md:px-6 lg:px-8 xl:px-8 container mx-auto"
      id="home"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 ">
        <div className="w-full md:w-1/2 text-left md:text-left order-2 md:order-1 sm:w-full">
          <h2 className="text-4xl md:text-4xl lg:text-5xl  font-bold text-blue-500 mb-2">
            One Stop Solution
          </h2>
          <p className="text-3xl  md:text-2xl lg:text-4xl  xl:text-5xl font-bold text-zinc-950 mb-5">
            For your digital needs
          </p>
          <p className="text-slate-500 text-sm md:text-sm lg:text-sm xl:text-lg  mb-8">
            We help your business grow with our creative solutions. Worry
            <br className="hidden lg:block" />
            less and let's work together
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white md:w-[320px] lg:w-[420px] xl:w-[500px] w-full py-1 lg:py-2 rounded-full text-base lg:text-lg ">
            Contact Us Now
          </button>
        </div>

        <div className="w-full md:w-1/2 overflow-hidden order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="company profile"
            className="w-full object-cover shadow-md xl:h-auto lg:h-[350px] md:h-[290px] h-[250px] "
            style={{
              borderTopLeftRadius: "80px",
              borderBottomRightRadius: "80px",
              borderTopRightRadius: "0px",
              borderBottomLeftRadius: "0px",
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
