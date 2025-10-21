import { useState } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full py-3 border-b bg-[#E8F0EB] z-50">
        <div className="flex justify-between items-center mx-4">
          {/* desktop nav item 1 */}
          <div className="lg:flex hidden flex-wrap h-full space-x-12 items-center justify-center">
            <a
              href="#"
              className="cursor-pointer transition-all hover:scale-110 hover:opacity-75"
            >
              OUR MENU
            </a>
            <a
              href="#"
              className="cursor-pointer transition-all hover:scale-110 hover:opacity-75"
            >
              OUR MISSION
            </a>
            <a
              href="#"
              className="cursor-pointer transition-all hover:scale-110 hover:opacity-75"
            >
              OUTPOST
            </a>
          </div>

          {/* Hamburger button */}
          <div>
            <button
              className="lg:hidden text-black focus:outline-none relative w-8 h-8 flex flex-col justify-center items-center cursor-pointer"
              onClick={() => setNavOpen(!navOpen)}
            >
              <span
                className={`block w-6 h-[1px] bg-current rounded-sm transition-all duration-300 ease-in-out
                ${
                  navOpen ? "rotate-45 translate-y-[5px]" : "translate-y-[-4px]"
                }`}
              ></span>
              <span
                className={`block w-6 h-[1px] bg-current rounded-sm transition-all duration-300 ease-in-out delay-150
                ${
                  navOpen
                    ? "-rotate-45 translate-y-[-5px]"
                    : "translate-y-[4px]"
                }`}
              ></span>
            </button>
          </div>

          {/* Logo */}
          <div className="text-4xl lg:text-5xl font-semibold font-[fredoka] opacity-85 text-[#374B42]"><a href="#" className="cursor-pointer duration-300 hover:opacity-100">savora.</a></div>

          {/* desktop nav item 2 */}
          <div className="lg:flex hidden flex-wrap h-full space-x-12 items-center justify-center">
            <a
              href="#"
              className="cursor-pointer transition-all hover:scale-110 hover:opacity-75"
            >
              CATERING
            </a>
            <a
              href="#"
              className="cursor-pointer transition-all hover:scale-110 hover:opacity-75"
            >
              LOCATIONS
            </a>
            <a
              href="#"
              className="cursor-pointer transition-all hover:scale-110 hover:opacity-75"
            >
              NEWS & EVENTS
            </a>
            <a href="#" className="text-[17px] text-amber-400 px-2 py-0.5 rounded-2xl bg-[#374B42] transition-all duration-300 hover:bg-transparent hover:text-black hover:border-[1px] hover:border-[#374B42]">
              ORDER{" "}
              <i className="fa-solid fa-arrow-right -rotate-45 text-[15px]"></i>
            </a>
          </div>

          <div className="lg:hidden block">
            <a href="#" className="text-lg">
              ORDER{" "}
              <i className="fa-solid fa-arrow-right -rotate-45 text-[16px]"></i>
            </a>
          </div>
        </div>
      </nav>

      <div
        className={`absolute top-[60px] left-0 w-full overflow-hidden bg-[#374B42] text-xl text-green-100 z-999 transition-all duration-500 ease-in-out mt-1 ${
          navOpen ? "max-h-[12vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-wrap h-full space-x-5 items-center justify-center p-2">
          <a
            href="#"
            className="cursor-pointer transition-all hover:scale-110 hover:opacity-75"
          >
            OUR MENU
          </a>
          <a
            href="#"
            className="cursor-pointer transition-all hover:scale-110 hover:opacity-75"
          >
            OUR MISSION
          </a>
          <a
            href="#"
            className="cursor-pointer transition-all hover:scale-110 hover:opacity-75"
          >
            OUTPOST
          </a>
          <a
            href="#"
            className="cursor-pointer transition-all hover:scale-110 hover:opacity-75"
          >
            CATERING
          </a>
          <a
            href="#"
            className="cursor-pointer transition-all hover:scale-110 hover:opacity-75"
          >
            LOCATIONS
          </a>
          <a
            href="#"
            className="cursor-pointer transition-all hover:scale-110 hover:opacity-75"
          >
            NEWS & EVENTS
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
