import React from "react";

const Service = () => {
  const services = [
    {
      title: "Mobile App",
      desc: "We develop android app, iOS app for all your digital needs",
    },
    {
      title: "Web App",
      desc: "We develop android app, iOS app for all your digital needs",
    },
    {
      title: "UI/UX",
      desc: "We develop android app, iOS app for all your digital needs",
    },
    {
      title: "Academy",
      desc: "We develop android app, iOS app for all your digital needs",
    },
    {
      title: "Consultantion",
      desc: "We develop android app, iOS app for all your digital needs",
    },
    {
      title: "Mobile App",
      desc: "We develop android app, iOS app for all your digital needs",
    },
  ];
  return (
    <>
      <section className="lg:mt-20 mt-5 py-20" id="course">
        <div className="mx-auto px-3 sm:px-6 lg:px-8">
          <h2 className="text-center font-bold lg:text-3xl text-2xl sm:text-3xl">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 mt-8 sm:mt-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded p-4 sm:p-5 shadow-md"
              >
                <div className="flex items-center gap-2">
                  <span className="bg-blue-500 p-2 rounded-full size-10 flex items-center justify-center">
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
                </div>
                <h2 className="font-semibold mt-2 text-base sm:text-lg">
                  {service.title}
                </h2>
                <p className="text-sm mt-1 text-slate-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
