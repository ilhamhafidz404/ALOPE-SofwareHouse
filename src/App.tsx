import React from "react";

export default function App() {
  return (
    <>
      <nav className="fixed left-0 right-0 top-0">
        <div className="flex container mx-auto justify-between items-center py-5">
          <div>
            <p className="font-bold text-xl">ALOPE</p>
          </div>
          <div>
            <ul className="flex gap-5 items-center">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Whae we do</a>
              </li>
              <li className="ml-5">
                <button className="bg-indigo-500 px-5 py-2 rounded text-white">
                  Contact Us Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="container mx-auto flex items-center mt-32">
        <div className="flex-1">
          <h1 className="text-4xl font-bold">For Your Digital Needs</h1>
          <p className="mb-5 text-gray-800 mt-3">
            We help your business grow with our creative solutions. Worry less
            and let's work together
          </p>
          <button className="bg-indigo-500 px-5 py-2 rounded text-white">
            Contact Us Now
          </button>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="company profile"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </header>
      <section className="mt-20 py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-center font-bold text-3xl">What we Do</h2>
          <div className="flex gap-10 mt-10">
            <div className="rounded shadow bg-white p-5 flex-1">
              <div className="flex items-center gap-2">
                <span className="bg-indigo-500 rounded-full size-10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </span>
                <p className="font-semibold">Web App</p>
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                vel libero illum earum. Ratione rerum vitae nisi tempore id,
                voluptas odio corrupti deleniti voluptatum suscipit animi,
                nostrum ex ipsam reiciendis!
              </p>
            </div>
            <div className="rounded shadow bg-white p-5 flex-1">
              <div className="flex items-center gap-2">
                <span className="bg-indigo-500 rounded-full size-10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </span>
                <p className="font-semibold">Web App</p>
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                vel libero illum earum. Ratione rerum vitae nisi tempore id,
                voluptas odio corrupti deleniti voluptatum suscipit animi,
                nostrum ex ipsam reiciendis!
              </p>
            </div>
            <div className="rounded shadow bg-white p-5 flex-1">
              <div className="flex items-center gap-2">
                <span className="bg-indigo-500 rounded-full size-10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </span>
                <p className="font-semibold">Web App</p>
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                vel libero illum earum. Ratione rerum vitae nisi tempore id,
                voluptas odio corrupti deleniti voluptatum suscipit animi,
                nostrum ex ipsam reiciendis!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-20">
        <h2 className="text-center font-bold text-3xl">Our Projects</h2>
        <div className="grid grid-cols-3 gap-10 mt-10">
          {Array.from({ length: 5 }).map((project, index) => (
            <div>
              <img
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="company profile"
                className="rounded-xl shadow-2xl"
              />
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">ALOPE Course</h3>
                  <p className="text-gray-800">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div>
                  <a className="bg-indigo-500 rounded-full size-10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="bg-gray-800 mt-20 py-5">
        <div className="container mx-auto grid grid-cols-2 gap-20">
          <div>
            <p className="text-3xl text-white font-bold">ALOPE</p>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus est quaerat consequatur sunt nulla incidunt
              blanditiis repellendus poss
            </p>
          </div>
          <div>
            <p className="text-xl text-white font-semibold mb-4">Our Product</p>
            <a href="www.alope.id" className="text-indigo-500">
              ALOPE Course
            </a>
          </div>
          <div className="text-center col-span-2 text-white border-t pt-5 border-gray-600">
            <p>Copyright &copy; by ALOPE</p>
          </div>
        </div>
      </footer>
    </>
  );
}
