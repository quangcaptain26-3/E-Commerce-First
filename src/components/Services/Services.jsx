import React, { useEffect } from "react";
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceData = [
  {
    id: 1,
    icon: (
      <FaCarSide className="text-4xl md:text-5xl text-primary transition-transform duration-300" />
    ),
    title: "Free Shipping",
    description: "Free shipping on all orders",
  },
  {
    id: 2,
    icon: (
      <FaCheckCircle className="text-4xl md:text-5xl text-primary transition-transform duration-300" />
    ),
    title: "Safe Payment",
    description: "100% secure payment",
  },
  {
    id: 3,
    icon: (
      <FaWallet className="text-4xl md:text-5xl text-primary transition-transform duration-300" />
    ),
    title: "Secure Payment",
    description: "We ensure secure payment",
  },
  {
    id: 4,
    icon: (
      <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary transition-transform duration-300" />
    ),
    title: "24/7 Support",
    description: "Dedicated support",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <div>
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {ServiceData.map((data, index) => (
            <div
              key={data.id}
              className="flex flex-col items-start sm:flex-row gap-4 p-4 rounded-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-once="false"
            >
              <div className="transition-transform duration-300">
                {data.icon}
              </div>
              <div>
                <h1 className="lg:text-xl font-bold transition-transform duration-300">
                  {data.title}
                </h1>
                <h1 className="text-gray-400 text-sm">
                  {data.description}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
