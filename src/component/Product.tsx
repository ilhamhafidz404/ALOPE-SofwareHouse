import React from "react";

const Product = () => {
  return (
    <>
      <section className=" mt-20 py-10">
        <h2 className="font-bold text-3xl text-center mb-10">Our Product</h2>
        <div className="px-8">
          <div className="flex lg:flex-row group overflow-hidden">
            <div className="w-1/2 bg-blue-500 p-8 transform transition duration-700 ease-in-out group-hover:translate-y-3 group-hover:opacity-900">
              <h2 className="text-3xl font-semibold text-white">
                Alope Academy Lorem ipsum dolor sit amet.
              </h2>
              <p className="text-slate-300 text-sm py-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam, ipsa?
              </p>
              <a
                href=""
                className="text-white font-semibold text-sm flex gap-2"
              >
                See Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 mt-0.5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </div>
            <div className="w-full">
              <img
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full h-full object-cover transform transition duration-700 ease-in-out group-hover:translate-y-3 group-hover:opacity-900"
              />
            </div>
          </div>
          <div className="flex lg:flex-row-reverse mt-10 group overflow-hidden">
            <div className="w-1/2 bg-blue-500 p-8 transform transition duration-700 ease-in-out group-hover:translate-y-3 group-hover:opacity-900">
              <h2 className="text-3xl font-semibold text-white">
                Alope Academy Lorem ipsum dolor sit amet.
              </h2>
              <p className="text-slate-300 text-sm py-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam, ipsa?
              </p>
              <a
                href=""
                className="text-white font-semibold text-sm flex gap-2"
              >
                See Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 mt-0.5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </div>
            <div className="w-full">
              <img
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full h-full object-cover transform transition duration-700 ease-in-out group-hover:translate-y-3 group-hover:opacity-900"
              />
            </div>
          </div>
        </div>
      
      </section>
    </>
  );
};

export default Product;
