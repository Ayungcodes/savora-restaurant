import { useState } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full py-3 border-b bg-[#E8F0EB] z-50">
        <div className="flex justify-between items-center mx-3 md:mx-6">
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
              onClick={() => setNavOpen(!navOpen)}
              className={`
    relative block lg:hidden
    w-10 h-10
    cursor-pointer
    z-9999
    rounded-full
    transition-transform duration-500
    ${navOpen ? "hover:rotate-[90deg]" : ""}
  `}
            >
              <span
                className={`
      absolute left-1/2 top-1/2
      h-[2px] w-7 md:w-8
      bg-[#374B42] rounded-full
      transition-all duration-500 ease-in-out
      -translate-x-1/2 -translate-y-1/2
      ${navOpen ? "rotate-45 bg-green-100" : "-translate-y-1.5"}
    `}
              />

              <span
                className={`
      absolute left-1/2 top-1/2
      h-[2px] w-7 md:w-8
      bg-[#374B42] rounded-full
      transition-all duration-500 ease-in-out
      -translate-x-1/2 -translate-y-1/2
      ${navOpen ? "-rotate-45 bg-green-100" : "translate-y-1.5"}
    `}
              />
            </button>
          </div>

          {/* Logo */}
          <div className="text-4xl lg:text-5xl font-semibold font-[fredoka] opacity-85 text-[#374B42]">
            <a
              href="#"
              className="cursor-pointer duration-300 hover:opacity-100"
            >
              savora.
            </a>
          </div>

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
            <a
              href="#"
              className="text-[17px] text-amber-400 px-2 py-0.5 rounded-2xl bg-[#374B42] transition-all duration-300 hover:bg-transparent hover:text-black hover:border-[1px] hover:border-[#374B42]"
            >
              ORDER{" "}
              <i className="fa-solid fa-arrow-right -rotate-45 text-[15px]"></i>
            </a>
          </div>

          <div className="group lg:hidden block">
            <a href="#" className="text-lg">
              ORDER{" "}
              <i className="fa-solid fa-arrow-right -rotate-45 text-[16px] group-hover:rotate-0 group-hover:translate-x-0.5 transition-transform duration-300"></i>
            </a>
          </div>
        </div>

      {/* mobile nav */}
      <div
  className={`fixed inset-0 z-50 bg-[#374B42]/95 backdrop-blur-md text-green-100 text-xl flex flex-col transition-all duration-500 ease-in-out
    ${navOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-10"}
  `}
>
  {/* Header: Logo */}
  <div className="w-full flex justify-end px-6 py-2.5">
    <a
      href="#"
      className="text-4xl lg:text-5xl font-semibold font-[fredoka] opacity-85 hover:opacity-100 transition duration-300"
    >
      savora.
    </a>
  </div>

  {/* Nav Links */}
  <div className="flex flex-col items-center justify-center flex-1 space-y-6">
    {[
      "OUR MENU",
      "OUR MISSION",
      "OUTPOST",
      "CATERING",
      "LOCATIONS",
      "NEWS & EVENTS",
    ].map((item, idx) => (
      <a
        key={item}
        href="#"
        className="relative cursor-pointer transition-all transform hover:scale-110 hover:opacity-90 group"
        style={{ transitionDelay: `${idx * 75}ms` }}
      >
        {item}
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-100 transition-all group-hover:w-full"></span>
      </a>
    ))}
  </div>
</div>


      </nav>
    </>
  );
};

export default Navbar;
