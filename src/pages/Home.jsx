import React from "react";

const Home = () => {
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

        {/* Popular Toys Section */}
        <section className="max-w-6xl mx-auto mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Popular Toys
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Toy Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="https://i.ibb.co.com/xqmbXc74/p1.jpg"
                alt="Lego Classic Bricks"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">
                  Lego Classic Bricks
                </h3>
                <p className="text-sm text-gray-600 mb-1">Rating: 4.7 ⭐</p>
                <p className="text-sm text-gray-600 mb-1">Available: 75</p>
                <p className="text-lg font-bold text-pink-500 mb-3">$49.99</p>
                <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 font-medium">
                  View More
                </button>
              </div>
            </div>

            {/* Toy Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="https://i.ibb.co.com/jk3fb91y/p2.jpg"
                alt="Hot Wheels Super Loop"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">
                  Hot Wheels Super Loop
                </h3>
                <p className="text-sm text-gray-600 mb-1">Rating: 4.5 ⭐</p>
                <p className="text-sm text-gray-600 mb-1">Available: 50</p>
                <p className="text-lg font-bold text-pink-500 mb-3">$29.99</p>
                <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 font-medium">
                  View More
                </button>
              </div>
            </div>

            {/* Toy Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="https://i.ibb.co.com/mCGZcWrZ/p3.jpg"
                alt="Barbie Dreamhouse"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">
                  Barbie Dreamhouse
                </h3>
                <p className="text-sm text-gray-600 mb-1">Rating: 4.8 ⭐</p>
                <p className="text-sm text-gray-600 mb-1">Available: 20</p>
                <p className="text-lg font-bold text-pink-500 mb-3">$199.99</p>
                <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 font-medium">
                  View More
                </button>
              </div>
            </div>

            {/* Toy Card 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="https://i.ibb.co.com/cSYscf6v/p4.jpg"
                alt="Nerf Elite Blaster"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">
                  Nerf Elite Blaster
                </h3>
                <p className="text-sm text-gray-600 mb-1">Rating: 4.4 ⭐</p>
                <p className="text-sm text-gray-600 mb-1">Available: 60</p>
                <p className="text-lg font-bold text-pink-500 mb-3">$34.99</p>
                <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 font-medium">
                  View More
                </button>
              </div>
            </div>

            {/* Toy Card 5 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="https://i.ibb.co.com/rRXNRCFj/p5.jpg"
                alt="Play-Doh Fun Pack"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">
                  Play-Doh Fun Pack
                </h3>
                <p className="text-sm text-gray-600 mb-1">Rating: 4.9 ⭐</p>
                <p className="text-sm text-gray-600 mb-1">Available: 200</p>
                <p className="text-lg font-bold text-pink-500 mb-3">$14.99</p>
                <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 font-medium">
                  View More
                </button>
              </div>
            </div>

            {/* Toy Card 6 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="https://i.ibb.co.com/ycRfFpwX/p6.jpg"
                alt="Melissa & Doug Wooden Train Set"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">
                  Melissa & Doug Wooden Train Set
                </h3>
                <p className="text-sm text-gray-600 mb-1">Rating: 4.8 ⭐</p>
                <p className="text-sm text-gray-600 mb-1">Available: 40</p>
                <p className="text-lg font-bold text-pink-500 mb-3">$59.99</p>
                <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 font-medium">
                  View More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
