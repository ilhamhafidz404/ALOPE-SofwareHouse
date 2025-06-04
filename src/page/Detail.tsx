import React from "react";
import Navbar from "../component/Navbar";

const Detail = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-screen-2xl mt-17 px-4  md:px-8 lg:px- xl:px-30 py-10 space-y-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          Name Project
        </h1>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base text-center sm:text-left">
          <div>
            <strong>Client:</strong>{" "}
            <span className="text-blue-600">Johan </span>
          </div>
          <div>
            <strong>Platform:</strong> Website, Mobile
          </div>
          <div>
            <strong>Timeline:</strong> 2025
          </div>
          <div>
            <strong>Website:</strong>{" "}
            <a
              target="_blank"
              className="text-blue-600 underline"
              href="https://alope.id/"
            >
              johan.com 
            </a>
          </div>
        </div>
        <div className="bg-blue-200 p-4 rounded-xl">
          <img
            src="/img/nuteam.png"
            alt="Main Project"
            className="mx-auto w-full max-w-4xl rounded-lg shadow-md object-cover"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <div className="w-full lg:w-1/2">
            <img
              src="/img/safrenz.png"
              alt="Project Detail"
              className="rounded-md shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
              About project
            </h2>
            <p className="text-gray-600 text-justify text-sm sm:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <div className="w-full lg:w-1/2 lg:order-2">
            <img
              src="/img/safrenz.png"
              alt="Project Detail"
              className="rounded-md shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:order-1">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
              About project
            </h2>
            <p className="text-gray-600 text-justify text-sm sm:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
        <div className="w-full ">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
            About project
          </h2>
          <p className="text-gray-600 text-justify text-sm sm:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
      </div>
    </>
  );
};

export default Detail;
