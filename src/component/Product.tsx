import React from "react";

const Product = () => {
  return (
    <>
      <div className="w-72 max-w-md rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
        <div
          className="relative h-50"
          style={{
            backgroundImage: "url('/img/alope.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative px-6 py-6">
          <div className="absolute -top-5 left-6 bg-blue-500 text-white p-2 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z"
              />
            </svg>
          </div>

          <h4 className="font-semibold text-base text-gray-900">
            CSS Layouting: Margin, Padding, dan Border
          </h4>
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">
            Dalam pengembangan web, memahami cara mengatur tata letak elemen
            sangatlah penting untuk mencipta...
          </p>
        </div>
      </div>
    </>
  );
};

export default Product;
