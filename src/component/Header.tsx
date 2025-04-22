import React from "react";

const Header = () => {
  return (
    <>
      <header className="mt-32 mx-auto px-8" id="home">
        <div className="flex items-center flex-row gap-10 ">
          <div className="w-1/2">
            <h2 className="text-5xl font-bold text-blue-500 mb-2">
              One Stop Solution
            </h2>
            <p className="text-5xl font-bold     text-zinc-950 mb-5">
              For your digital needs
            </p>
            <p className="text-slate-500 text-lg mb-8">
              We help your business grow with our creative solutions. Worry <br />less and let's work together
            </p>
            <button
              className="bg-blue-500 text-white px-45 py-2
                rounded-full text-lg "
            >
              Contact Us Now
            </button>
          </div>
          <div className="w-1/2">
            <div>
              <img
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="company profile"
                className=""
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
