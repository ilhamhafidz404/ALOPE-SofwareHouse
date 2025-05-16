import React from "react";

const Product = () => {
  return (
    <>
      <section className="lg:mt-20 mt-10 py-10" id="products">
        <h2 className="font-bold lg:text-3xl text-2xl text-center mb-10">Our Product</h2>
        <div className="px-3 sm:px-6 lg:px-6">
          <div className="flex flex-col-reverse lg:flex-row group overflow-hidden">
            <div className="order-last lg:order-none w-full">
              <img
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full h-64 lg:h-full object-cover transform transition duration-700 ease-in-out group-hover:translate-y-3 group-hover:opacity-900"
              />
            </div>
            <div className="w-full lg:w-1/2 bg-blue-500 lg:p-8 p-6 transform transition duration-700 ease-in-out group-hover:translate-y-3 group-hover:opacity-900">
              <h2 className="lg:text-3xl text-xl font-semibold text-white">
                Alope Academy Lorem ipsum dolor sit amet.
              </h2>
              <p className="text-slate-100 text-sm py-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam, ipsa?
              </p>
              <a
                href=""
                className="text-white font-semibold text-sm hover:underline  flex gap-2"
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
          </div>

          <div className="flex flex-col-reverse lg:flex-row-reverse mt-10 group overflow-hidden">
            <div className="order-last lg:order-none w-full">
              <img
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full h-64 lg:h-full object-cover transform transition duration-700 ease-in-out group-hover:translate-y-3 group-hover:opacity-900"
              />
            </div>
            <div className="w-full lg:w-1/2 bg-blue-500 lg:p-8 p-6  transform transition duration-700 ease-in-out group-hover:translate-y-3 group-hover:opacity-900">
              <h2 className="lg:text-3xl text-xl font-semibold text-white">
                Alope Academy Lorem ipsum dolor sit amet.
              </h2>
              <p className="text-slate-100 text-sm py-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam, ipsa?
              </p>
              <a
                href=""
                className="text-white font-semibold text-sm hover:underline  flex gap-2"
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
          </div>

          <div className="flex flex-col-reverse mt-10 lg:flex-row group overflow-hidden">
            <div className="order-last lg:order-none w-full">
              <img
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full h-64 lg:h-full object-cover transform transition duration-700 ease-in-out group-hover:translate-y-3 group-hover:opacity-900"
              />
            </div>
            <div className="w-full lg:w-1/2 bg-blue-500 lg:p-8 p-6 transform transition duration-700 ease-in-out group-hover:translate-y-3 group-hover:opacity-900">
              <h2 className="lg:text-3xl text-xl font-semibold text-white">
                Alope Academy Lorem ipsum dolor sit amet.
              </h2>
              <p className="text-slate-100 text-sm py-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam, ipsa?
              </p>
              <a
                href=""
                className="text-white font-semibold text-sm hover:underline  flex gap-2"
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
