

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[#374B42] text-gray-100 py-14 px-6 md:px-20">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-10 md:space-y-0">

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold font-[fredoka] tracking-wide">
              savora.
            </h2>
            <p className="text-gray-300 max-w-xs text-[15px] leading-relaxed">
              Where timeless recipes meet modern elegance. Savora invites you to
              savor every flavor, every moment.
            </p>
          </div>

          <div className="flex flex-col space-y-2 text-[15px]">
            <h3 className="text-lg font-medium mb-2 text-white">Explore</h3>
            <a href="#" className="hover:opacity-75 transition-all">
              Our Menu
            </a>
            <a href="#" className="hover:opacity-75 transition-all">
              Our Mission
            </a>
            <a href="#" className="hover:opacity-75 transition-all">
              Outpost
            </a>
            <a href="#" className="hover:opacity-75 transition-all">
              Catering
            </a>
            <a href="#" className="hover:opacity-75 transition-all">
              News & Events
            </a>
            <a href="#" className="hover:opacity-75 transition-all">
              Locations
            </a>
          </div>

          <div className="flex flex-col space-y-3 text-[15px]">
            <h3 className="text-lg font-medium mb-2 text-white">
              Stay Connected
            </h3>
            <p className="text-gray-300">
              Subscribe for exclusive updates and offers.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent border border-gray-400 px-3 py-2 text-gray-100 focus:outline-none w-48"
              />
              <button className="bg-white text-[#374B42] px-4 py-2 font-medium transition-all hover:scale-105 cursor-pointer">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4 mt-4">
              <i className="fa-brands fa-instagram text-lg hover:opacity-80 cursor-pointer"></i>
              <i className="fa-brands fa-facebook text-lg hover:opacity-80 cursor-pointer"></i>
              <i className="fa-brands fa-x-twitter text-lg hover:opacity-80 cursor-pointer"></i>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-10 border-t border-gray-500 pt-6 text-center text-[14px] text-gray-300">
          <div>© {new Date().getFullYear()} Savora. All rights reserved.</div>
          <div>Built by <a href="bapyat-dev.vercel.app" target="_blank" className="duration-300 hover:text-gray-400">Gaius Emmanuel</a></div>
        </div>
      </footer>
    </>
  )
}

export default Footer
