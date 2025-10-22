import React from "react";

const SlideBanner = () => {
  return (
    <div className="bg-gray-100">
      {/* Slider Section - DaisyUI Carousel */}
      <section className="max-w-6xl mx-auto mt-8">
        <div className="carousel w-full rounded-xl">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/DPGYC3bg/b1.jpg"
              className="w-full rounded-xl"
              alt="Slide 1"
            />

            {/* Overlay content */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4 md:px-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">
                Welcome to KidsToy World
              </h2>
              <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                Find the perfect toy for every age and imagination!
              </p>
              <button className="btn btn-primary mt-3 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg">
                Shop Now
              </button>
            </div>

            {/* Navigation buttons */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/PZcnp4Ww/b2.jpg"
              className="w-full rounded-xl"
              alt="Slide 2"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4 md:px-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">
                Discover Joyful Toys
              </h2>
              <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                Explore our collection of fun and educational toys for kids!
              </p>
              <button className="btn btn-primary mt-3 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg">
                Explore Now
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/d03ss63j/b3.jpg"
              className="w-full rounded-xl"
              alt="Slide 3"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4 md:px-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">
                Play • Learn • Grow
              </h2>
              <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                Bring happiness home with colorful and creative toys.
              </p>
              <button className="btn btn-primary mt-3 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg">
                Shop Collection
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SlideBanner;
