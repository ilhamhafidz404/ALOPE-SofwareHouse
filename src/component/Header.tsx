
const Header = () => {
  return (
    <header
      className="mt-20 lg:mt-20 px-4 md:px-6 lg:px-8 xl:px-8 container mx-auto"
      id="home"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 ">
        <div className="w-full md:w-1/2 text-center md:text-left order-2  md:order-1 sm:w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl  font-bold text-slate-900 mb-2">
            Solusi Pembuatan
          </h2>
          <p className="text-3xl  md:text-4xl lg:text-5xl  xl:text-5xl font-bold text-zinc-950 mb-4">
            <span className="text-blue-500">Software</span> Anda
          </p>
          <p className="text-slate-500 text-xs md:text-sm lg:text-sm xl:text-lg  mb-6">
            Kami membantu bisnis Anda berkembang{" "}
            <br className="hidden lg:block" /> melalui solusi kreatif kami.
            Tenang saja, <br className="hidden lg:block" /> mari bekerja sama.
          </p>
          <div className="flex gap-4 lg:justify-start sm:justify-start justify-center">
            <a className="bg-blue-500 hover:bg-blue-600 font-semibold text-white px-4 py-1 lg:py-1 rounded-full text-base lg:text-lg ">
              Contact Us
            </a>
            <a href="/explore"  className="bg-slate-200 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-1 lg:py-1 rounded-full text-base lg:text-lg ">
              Explore
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 overflow-hidden order-1 md:order-2">
          <img
            src="../public/img/logo.png"
            alt="company profile"
            className="w-full object-cover shadow-md  h-auto "
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
