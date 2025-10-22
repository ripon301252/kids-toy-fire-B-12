import React from "react";

const SlideBanner = () => {
  return (
    <div>
      <div className="bg-gray-100">
        {/* Slider Section - DaisyUI Carousel */}
        <section className="max-w-6xl mx-auto mt-8">
          <div className="carousel w-full rounded-xl">
            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/DPGYC3bg/b1.jpg"
                className="w-full rounded-xl"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/PZcnp4Ww/b2.jpg"
                className="w-full rounded-xl"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/d03ss63j/b3.jpg"
                className="w-full rounded-xl"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SlideBanner;
