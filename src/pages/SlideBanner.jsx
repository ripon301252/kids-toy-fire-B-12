import React from "react";

const SlideBanner = () => {
  return (
    <div className="relative z-0 bg-gradient-to-b from-white via-cyan-50 to-white pt-4 pb-10 mt-16 rounded-2xl shadow-lg border-1 border-gray-200">
      <section className="max-w-6xl mx-auto mt-6 px-4 md:px-0 relative">
        <div className="carousel w-full rounded-2xl overflow-hidden relative">
          
          {/* 🌈 Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/99z8tpWw/istockphoto-589961490-612x612.jpg"
              className="w-full h-60 sm:h-80 md:h-[450px] object-cover"
              alt="Slide 1"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex flex-col justify-center items-center text-center px-6 md:px-16">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-md">
                Welcome to KidsToy World
              </h2>
              <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-md sm:max-w-lg md:max-w-2xl mb-5">
                Find the perfect toy for every age and imagination!
              </p>
              <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300">
                Shop Now
              </button>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 top-1/2 left-3 right-3">
              <a href="#slide3" className="btn btn-circle bg-white/20 hover:bg-cyan-500 text-white border-none">❮</a>
              <a href="#slide2" className="btn btn-circle bg-white/20 hover:bg-cyan-500 text-white border-none">❯</a>
            </div>
          </div>

          {/* 🌈 Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/HLnSMDht/istockphoto-1412025000-612x612.jpg"
              className="w-full h-60 sm:h-80 md:h-[450px] object-cover"
              alt="Slide 2"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex flex-col justify-center items-center text-center px-6 md:px-16">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-md">
                Discover Joyful Toys
              </h2>
              <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-md sm:max-w-lg md:max-w-2xl mb-5">
                Explore our collection of fun and educational toys for kids!
              </p>
              <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300">
                Explore Now
              </button>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 top-1/2 left-3 right-3">
              <a href="#slide1" className="btn btn-circle bg-white/20 hover:bg-cyan-500 text-white border-none">❮</a>
              <a href="#slide3" className="btn btn-circle bg-white/20 hover:bg-cyan-500 text-white border-none">❯</a>
            </div>
          </div>

          {/* 🌈 Slide 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/TM43VkHg/istockphoto-1069600900-612x612.jpg"
              className="w-full h-60 sm:h-80 md:h-[450px] object-cover"
              alt="Slide 3"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex flex-col justify-center items-center text-center px-6 md:px-16">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-md">
                Play • Learn • Grow
              </h2>
              <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-md sm:max-w-lg md:max-w-2xl mb-5">
                Bring happiness home with colorful and creative toys.
              </p>
              <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300">
                Shop Collection
              </button>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 top-1/2 left-3 right-3">
              <a href="#slide2" className="btn btn-circle bg-white/20 hover:bg-cyan-500 text-white border-none">❮</a>
              <a href="#slide1" className="btn btn-circle bg-white/20 hover:bg-cyan-500 text-white border-none">❯</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SlideBanner;
