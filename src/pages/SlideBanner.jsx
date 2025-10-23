import React from "react";

const SlideBanner = () => {
  return (
    <div className="relative bg-gray-50 bg-opacity-90 pt-4 pb-10 mt-7 rounded-xl">
      <section className="max-w-6xl mx-auto mt-8 px-4 md:px-0 z-10 relative">
        <div className="carousel w-full rounded-xl overflow-hidden relative">
          
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/DPGYC3bg/b1.jpg"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
              alt="Slide 1"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent flex flex-col justify-center items-center text-center px-4 md:px-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4 ">
                Welcome to KidsToy World
              </h2>
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-4">
                Find the perfect toy for every age and imagination!
              </p>
              <button className="btn bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg transition duration-300 border-2 border-cyan-500">
                Shop Now
              </button>
            </div>
            {/* Navigation */}
            <div className="absolute flex justify-between transform -translate-y-1/2 top-1/2 left-3 right-3">
              <a href="#slide3" className="btn btn-circle bg-black/70 hover:bg-pink-500">❮</a>
              <a href="#slide2" className="btn btn-circle bg-black/70 hover:bg-pink-500">❯</a>
            </div>
          </div>

          {/* Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/PZcnp4Ww/b2.jpg"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
              alt="Slide 2"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent flex flex-col justify-center items-center text-center px-4 md:px-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
                Discover Joyful Toys
              </h2>
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-4">
                Explore our collection of fun and educational toys for kids!
              </p>
              <button className="btn bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg transition duration-300 border-2 border-cyan-500">
                Explore Now
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 top-1/2 left-3 right-3">
              <a href="#slide1" className="btn btn-circle bg-black/70 hover:bg-pink-500">❮</a>
              <a href="#slide3" className="btn btn-circle bg-black/70 hover:bg-pink-500">❯</a>
            </div>
          </div>

          {/* Slide 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/d03ss63j/b3.jpg"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
              alt="Slide 3"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent flex flex-col justify-center items-center text-center px-4 md:px-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
                Play • Learn • Grow
              </h2>
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-4">
                Bring happiness home with colorful and creative toys.
              </p>
              <button className="btn bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg transition duration-300 border-2 border-cyan-500">
                Shop Collection
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 top-1/2 left-3 right-3">
              <a href="#slide2" className="btn btn-circle bg-black/70 hover:bg-pink-500">❮</a>
              <a href="#slide1" className="btn btn-circle bg-black/70 hover:bg-pink-500">❯</a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default SlideBanner;
