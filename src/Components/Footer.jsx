import React from "react";


const Footer = () => {
  return (
     <div>
          <footer className="bg-[#001931] mt-7 mb-5 text-white">
            <div className="md:flex flex-cols-1 md:justify-between items-center py-10 mb-5 md:mx-20">
              <div className="mb-7 items-center md:ml-0 mx-5">
                <div className="flex items-center gap-2 mb-1">
                  {/* <img src={Img} alt={Img} className="w-8" /> */}
                  <a className=" text-2xl font-bold">KidsToy</a>
                </div>
                <p className="">Location: av. Washington 165, NY 54003</p>
                <p className="">Phone: +31 85 964 47 25</p>
                <p className="">Email: info@yourdomain.com</p>
                <p className="">Openings hours: 9.00 AM - 5.00 PM</p>
                <div className="flex items-center mt-3 gap-3 ">
                  <a
                    href="https://www.facebook.com/mahfuzur.rahman.98284"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook text-4xl hover:scale-110 transition-transform duration-300 text-[#0090ff]"></i>
                  </a>
                  <a href="https://x.com/" target="_blank">
                    <i className="fa-brands fa-x-twitter text-4xl hover:scale-110 transition-transform duration-300 text-white"></i>
                  </a>
                  <a href="https://www.youtube.com/" target="_blank">
                    <i className="fa-brands fa-youtube text-4xl hover:scale-110 transition-transform duration-300 text-[#ff0000]"></i>
                  </a>
                  <a href="https://www.instagram.com/?hl=en" target="_blank">
                    <i className="fa-brands fa-square-instagram text-4xl hover:scale-110 transition-transform duration-300 text-[#dc3973]"></i>
                  </a>
                </div>
              </div>

               <div className="mb-7 md:ml-0 mx-5 ">
                <h1 className="text-2xl font-semibold">Our Condition</h1>
                <p href="/terms" className="hover:underline my-2">
                 <a href="">Terms & Conditions</a> 
                </p>
                <p href="/privacy" className="hover:underline">
                <a href="">Privacy Policy</a>
                </p>
              </div>
    
              <div className="mb-7 md:ml-0 mx-5 ">
                <h3 className="text-2xl mb-1">Useful Links</h3>
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Join Us</li>
                 
                </ul>
              </div>
    
             
    
              <div id="contact" className="md:ml-0 mx-5">
                <h3 className="">Drop a Message</h3>
                <input
                  className="my-3 py-2 px-4 rounded-md outline-1"
                  type="text"
                  placeholder="Inter Your Email"
                />
                <div>
                  <button className="btn hover:bg-[#0e7a81] bg-gradient-to-l from-pink-500 to-red-500 ">
                    <span className=" text-white">Subscribe</span>
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </div>
  );
};

export default Footer;
