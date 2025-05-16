import React from "react";

const OurProject = () => {
  const projects = [
    {
      title: "XFood",
      desc: "Cold Storage Management System",
      img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "XFood",
      desc: "Cold Storage Management System",
      img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "XFood",
      desc: "Cold Storage Management System",
      img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "XFood",
      desc: "Cold Storage Management System",
      img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "XFood",
      desc: "Cold Storage Management System",
      img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "XFood",
      desc: "Cold Storage Management System",
      img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <section className="mx-auto lg:px-6 px-3 lg:mt-20 mt-5" id="our-works">
        <h2 className="text-center font-bold lg:text-3xl text-2xl mb-10">Our Works</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={project.img} alt={project.title} className="w-full object-cover"/>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-slate-500 text-sm">{project.desc}</p>
                </div>
                <a href="" className="bg-blue-500 size-10 rounded-full flex justify-center items-center transition hover:bg-blue-600">
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
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurProject;
