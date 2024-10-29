import React, { useEffect } from "react";
import Image1 from "../../assets/category/keyboard.png";
import Image2 from "../../assets/category/razer.png";
import Image3 from "../../assets/category/speaker.png";
import Button from "../Shared/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const Category = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First column */}
          <div
            className="col-span-1 sm:col-span-2 lg:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] sm:h-[350px] lg:h-[380px] flex items-end transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="transition-transform duration-300 transform group-hover:translate-y-[-5px]">
              <div className="mb-4">
                <p className="text-gray-700">Enjoy</p>
                <p className="text-2xl font-semibold">With</p>
                <p className="text-3xl md:text-4xl xl:text-5xl font-bold opacity-60">
                  Keyboard
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Image1}
              alt="keyboard"
              className="w-[200px] sm:w-[300px] lg:w-[350px] absolute top-1/2 -translate-y-1/2 -right-0 transition-transform duration-300 transform group-hover:scale-110"
            />
          </div>

          {/* Second column */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px] sm:h-[350px] lg:h-[380px] flex items-start transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="transition-transform duration-300 transform group-hover:translate-y-[-5px]">
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-3xl md:text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Gaming Mouse
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                />
              </div>
            </div>
            <img
              src={Image2}
              alt="gaming mouse"
              className="w-[180px] sm:w-[250px] lg:w-[320px] absolute bottom-0 -right-6 lg:-right-12 transition-transform duration-300 transform group-hover:scale-110"
            />
          </div>

          {/* Third column */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] sm:h-[350px] lg:h-[380px] flex items-start transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl group"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="transition-transform duration-300 transform group-hover:translate-y-[-5px]">
              <div className="mb-4">
                <p className="mb-[2px] text-gray-200">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-3xl md:text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Speaker
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt="speaker"
              className="w-[150px] sm:w-[180px] lg:w-[200px] absolute bottom-0 right-0 transition-transform duration-300 transform group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
