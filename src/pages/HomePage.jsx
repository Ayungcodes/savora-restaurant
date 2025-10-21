import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import chickenSoup from "../assets/chicken soup-min.jpg";
import ratatouille from "../assets/ratatouille-eggplant-potato-meat-tomato-top-view-min.jpg";
import sushi from "../assets/various-sushi-rolls-plate-min.jpg";
import pasta from "../assets/pasta carbonara-min.jpg";
import chefImg from "../assets/head-cook-throwing-fresh-chopped-herbs-pan-improve-taste-meal-while-professional-kitchen-master-chef-seasoning-dish-prepared-food-contest-held-fine-dining-restaurant-min.jpg";

const HomePage = ({ photos }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [openSubscribe, setOpenSubscribe] = useState(false);
  const [mouseEntering, setMouseEntering] = useState(false);

  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* hero section */}
      <section className="mt-16 relative h-full w-full">
        <div className="h-[80vh] w-full">
          <img
            src={photos[imageIndex].urls.regular}
            alt={photos[0].alt_description || "Savora hero"}
            className="opacity-80 w-full h-full object-cover"
          />
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex space-x-3 z-20">
            <button
              onClick={() => {
                setImageIndex(imageIndex > 0 ? imageIndex - 1 : 0);
              }}
              className="bg-black/30 hover:bg-black/50 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <i className="fa-solid fa-chevron-left text-2xl"></i>
            </button>

            <button
              onClick={() => {
                setImageIndex(
                  imageIndex < photos.length - 1 ? imageIndex + 1 : 0
                );
              }}
              className="bg-black/30 hover:bg-black/50 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <i className="fa-solid fa-chevron-right text-2xl"></i>
            </button>
          </div>

          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex flex-col justify-end items-start text-white text-lg font-semibold ml-6 py-10 space-y-7">
            <h1 className="text-4xl lg:text-5xl">
              Fresh flavors. Honest ingredients. Savora.
            </h1>
            <a
              href="#"
              className="border-[2px] border-white py-2 px-6 transition-all duration-300 hover:bg-white hover:text-[#374B42]  hover:scale-105"
            >
              Book a table{" "}
              <i className="fa-solid fa-arrow-right text-[16px]"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mt-6 w-full h-[10vh] relative">
        <div className="flex justify-between items-center mx-6">
          <div className="text-lg leading-5">
            Sign up for reservation updates & news from Savora.
          </div>

          <div className="lg:flex w-[70vw] hidden items-center space-x-6">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="border-[1px] border-gray-500 outline-0 px-3 py-2 grow"
            />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="border-[1px] border-gray-500 outline-0 px-3 py-2 grow"
            />
            <div
              onMouseEnter={() => {
                setMouseEntering(true);
              }}
              onMouseLeave={() => {
                setMouseEntering(false);
              }}
              className="flex space-x-2"
            >
              <input
                type="checkbox"
                name="marketing permission"
                id="marketing permission"
                className="w-6 h-6 accent-green-600"
              />
              <h1 className="text-lg tracking-tight">MARKETING PERMISSION</h1>
            </div>
            <button className="lg:block hidden bg-[#374B42] py-2 px-5 text-gray-50 text-[17px] cursor-pointer transition-all hover:scale-105">
              Subscribe
            </button>
          </div>

          {mouseEntering && (
            <div className="flex items-center justify-center absolute bg-[#374B42] h-[190px] w-[15vw] text-white p-2 top-[32px] right-40">
              <p>
                I consent to the processing of my personal data for marketing
                and commercial communications by savora, being aware that I will
                be able to withdraw my consent at any time.
              </p>
            </div>
          )}

          <div>
            <button
              className="lg:hidden bg-[#374B42] py-2 px-5 text-gray-50 text-[17px] cursor-pointer transition-all hover:scale-105"
              onClick={() => setOpenSubscribe(!openSubscribe)}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Overlay popup */}
        <div
          className={`fixed bottom-0 left-0 w-full bg-white/95 z-50 overflow-hidden transition-all duration-500 ease-in-out ${
            openSubscribe ? "h-[58vh] opacity-100" : "h-0 opacity-0"
          }`}
        >
          <div className="h-full flex flex-col mt-8 mx-6 space-y-7">
            <div className="w-[50vw] text-xl">
              Sign up for reservation updates and news from savora.
            </div>
            <form action="submit">
              <div className="flex flex-col space-y-5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="border-b border-[1px] px-2 py-2 outline-0 border-gray-400"
                />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="border-b border-[1px] px-2 py-2 outline-0 border-gray-400"
                />
                <div className="flex space-x-3 items-center">
                  <input
                    type="checkbox"
                    name="marketing permission"
                    id="marketing permission"
                    className="w-7 h-7 accent-green-600"
                  />
                  <h1 className="text-lg">MARKETING PERMISSION</h1>
                </div>
                <div className="text-[17px]">
                  I consent to the processing of my personal data for marketing
                  and commercial communications by savora, being aware that I
                  will be able to withdraw my consent at any time.
                </div>
                <button
                  className="bg-[#374B42] w-[19vw] py-2 px-5 text-gray-50 text-[17px] cursor-pointer transition-all hover:scale-105"
                  onClick={() => setOpenSubscribe(!openSubscribe)}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* menu section */}
      <section className="py-8 w-full flex flex-wrap justify-center gap-8 bg-white">
        {[ratatouille, sushi, chickenSoup, pasta].map((dish, index) => {
          const titles = [
            "Ratatouille",
            "Sushi Platter",
            "Chicken Soup",
            "Pasta Carbonara",
          ];
          const descs = [
            "A colorful blend of fresh vegetables, slow-cooked to perfection, bursting with flavor.",
            "A colorful assortment of fresh sushi, carefully rolled with premium ingredients — a feast for the eyes and taste buds.",
            "Warm, hearty chicken soup with tender vegetables and fragrant herbs — soothing, comforting, and delicious.",
            "Creamy, indulgent pasta with crispy bacon, fresh parmesan, and a touch of black pepper — comfort on a plate.",
          ];

          return (
            <div
              key={index}
              className="flex flex-col w-full sm:w-[45%] lg:w-[22%] mx-6 md:mx-0"
            >
              <div className="h-64 sm:h-72 lg:h-60 w-full">
                <img
                  src={dish}
                  alt={titles[index]}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div className="mt-4 flex flex-col space-y-2 text-left">
                <h1 className="text-2xl font-bold text-[#374B42]">
                  {titles[index]}
                </h1>
                <p className="text-gray-800 text-[16px]">{descs[index]}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 transition-transform duration-300 hover:scale-105 text-[17px]"
                >
                  ORDER NOW <i className="fa-solid fa-arrow-right text-sm"></i>
                </a>
              </div>
            </div>
          );
        })}
      </section>

      {/* about section */}
      <section className="w-full py-8 flex flex-col md:justify-center md:flex-row md:items-center space-y-11 bg-[#8E9E8B] text-[#374B42]">
        <div className="mx-6 mt-8 md:w-[42vw] lg:w-[35vw] h-[65vh] lg:h-[55vh]">
          <img
            src={chefImg}
            alt="head chef"
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
        <div className="mx-6 space-y-5 md:w-[50vw]">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Inspired by Nature, Perfected by Craft
          </h1>
          <p className="text-[18px] md:text-[20px]">
            Savora celebrates the art of fine dining — blending timeless recipes
            with a touch of modern elegance. Every dish is a tribute to flavor,
            crafted from the finest ingredients and elevated through creativity
            and care. We believe that food should not only satisfy hunger but
            awaken the senses, spark connection, and tell a story worth
            savoring.
          </p>
          <p className="text-[18px]">
            Our inspiration comes from both heritage and innovation. We draw
            from classic culinary traditions while reimagining them through a
            contemporary lens — creating plates that feel familiar yet
            excitingly new. Each element, from presentation to taste, is
            designed to evoke warmth, comfort, and sophistication in every bite.
          </p>
          <p className="text-[18px]">
            At Savora, dining is more than a meal — it’s an experience. A moment
            to slow down, to indulge, and to share joy around the table. Whether
            it’s your first visit or your fiftieth, our promise is the same: to
            deliver a taste of timeless beauty, served with grace and soul.
          </p>
        </div>
      </section>

      <section className="w-full py-24 bg-[#f1f3f1] flex flex-col items-center text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#374B42]">
          Reserve Your Table
        </h2>
        <p className="text-gray-700 text-lg max-w-xl mx-6">
          Because every moment deserves to be savored. Book your seat and let us
          craft a fine dining experience tailored just for you.
        </p>

        <form className="w-full max-w-md flex flex-col space-y-4 text-left">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 bg-transparent px-4 py-3 text-gray-700 focus:outline-none focus:border-[#374B42] transition-all duration-300"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 bg-transparent px-4 py-3 text-gray-700 focus:outline-none focus:border-[#374B42] transition-all duration-300"
          />
          <div className="flex space-x-3">
            <input
              type="date"
              className="w-1/2 border border-gray-300 bg-transparent px-4 py-3 text-gray-700 focus:outline-none focus:border-[#374B42] transition-all duration-300"
            />
            <input
              type="time"
              className="w-1/2 border border-gray-300 bg-transparent px-4 py-3 text-gray-700 focus:outline-none focus:border-[#374B42] transition-all duration-300"
            />
          </div>
          <input
            type="number"
            placeholder="Guests"
            className="border border-gray-300 bg-transparent px-4 py-3 text-gray-700 focus:outline-none focus:border-[#374B42] transition-all duration-300"
          />

          <button
            type="submit"
            className="mt-4 w-full bg-transparent text-[#374b42] border-[1px] py-3 text-lg font-medium tracking-wide transition-all duration-300 cursor-pointer hover:scale-98 hover:text-white hover:bg-[#374B42]"
          >
            Book Reservation
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
