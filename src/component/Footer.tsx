import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="container mx-auto bg-blue-500 text-white py-10 mt-20 lg:px-8 xl:px-8 px-4">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="md:text-lg lg:text-2xl text-2xl font-bold mb-4">
              Alope Software House
            </p>
            <div className="mb-6">
              <p className="font-semibold text-lg">Find Us</p>
              <p className="lg:text-sm text-xs mt-1 leading-relaxed">
                Jalan Pramuka 06/01, Kuningan, <br />
                Kuningan, Jawa Barat
              </p>
            </div>
            <div>
              <p className="font-semibold text-lg">Contact Us</p>
              <div className="flex items-center gap-2 mt-2 lg:text-sm text-xs ">
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15s-.767.966-.94 1.164c-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.205-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.075-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.84 9.84 0 016.986 2.896 9.825 9.825 0 012.893 6.991c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .164 5.332.16 11.888c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.86 11.86 0 005.737 1.468h.005c6.554 0 11.885-5.331 11.889-11.887a11.84 11.84 0 00-3.497-8.44" />
                </svg>

                <p>+62 889-0980-0987</p>
              </div>
              <div className="flex items-center gap-2 mt-2 lg:text-sm text-xs ">
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Website</title>
                  <path d="M12 0C5.371 0 0 5.373 0 12s5.371 12 12 12 12-5.373 12-12S18.629 0 12 0zm0 1.8c1.416 0 2.76.414 3.89 1.123a15.576 15.576 0 0 0-.843 1.015c-.598.81-1.235 1.985-1.656 3.262H9.609c-.421-1.277-1.058-2.452-1.656-3.262a15.637 15.637 0 0 0-.843-1.015A10.18 10.18 0 0 1 12 1.8zM6.035 4.397c.222.254.506.621.768 1.03.557.871 1.17 2.043 1.559 3.373H4.32a10.144 10.144 0 0 1 1.715-4.403zM2.166 12c0-.576.045-1.138.13-1.681h4.775a17.22 17.22 0 0 1 0 3.362H2.296A9.87 9.87 0 0 1 2.166 12zm2.154 5.203h4.042c-.388 1.33-1.002 2.502-1.559 3.373a10.14 10.14 0 0 1-2.483-3.373zM12 22.2a10.18 10.18 0 0 1-3.89-1.123c.257-.293.537-.662.843-1.015.598-.81 1.235-1.985 1.656-3.262h4.782c.421 1.277 1.058 2.452 1.656 3.262.305.353.586.722.843 1.015A10.18 10.18 0 0 1 12 22.2zm5.965-1.603a10.14 10.14 0 0 1-2.483-3.373h4.042a10.14 10.14 0 0 1-1.559 3.373zM21.704 13.681h-4.775a17.22 17.22 0 0 0 0-3.362h4.775a9.87 9.87 0 0 1 0 3.362zM18.08 8.8h-4.042c.388-1.33 1.002-2.502 1.559-3.373a10.14 10.14 0 0 1 2.483 3.373z" />
                </svg>

                <p>@alope.id</p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold text-lg mb-1">Portfolio</p>
            <ul className="lg:text-sm text-xs space-y-1 ">
              <li>
                <a href="#article" className="hover:underline">
                  Our Works
                </a>
              </li>
              <li>
                <a href="#products" className="hover:underline">
                  Our Products
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-lg mb-1">Products</p>
            <ul className="lg:text-sm space-y-1 text-xs">
              <li>
                <a href="#" className="hover:underline">
                  Alope Academy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LWD Learnig
                </a>
              </li>
              <li>
                <a href="https://alope.id/" className="hover:underline">
                  Alope Course
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-white my-6" />

        <p className="text-center text-sm text-white">
          &copy;2025 Alope Software House
        </p>
      </footer>

   
    </>
  );
};

export default Footer;
