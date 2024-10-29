import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMobileAlt,
} from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container ">
        <div className="grid md:grid-cols-3 pg-20 pt-5">
          {/* Details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary 
                font-semibold
                tracking-widest
                text-2xl uppercase sm:text-3xl
                "
            >
              Q-SHOP
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident dolorem animi possimus iusto, natus libero rem sint!
              Eveniet nemo qui reprehenderit quo nesciunt, eum voluptatem ad
              esse dolorem eos dignissimos!
            </p>
            <p className="text-gray-500 mt-4">Made with ⚡ by PhamMinhQuang</p>
            <a
              href="https://www.facebook.com/quang.phamminh.5686"
              target="_blank"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"
            >
              Visit my Facebook
            </a>
          </div>

          {/* Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Second col */}

            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow className="" />
                  <p>Cat Bi, Hai Phong</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt className="" />
                  <p>0912 345 678</p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl text-gray-600 dark:text-white/70 hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl text-gray-600 dark:text-white/70 hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl text-gray-600 dark:text-white/70 hover:text-primary duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
