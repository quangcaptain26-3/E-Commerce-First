import React, { useEffect } from "react";
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
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
          {/* first column */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="transition-transform duration-300 transform group-hover:translate-y-[-5px]">
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Earphone
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
              alt="earphone"
              className="w-[320px] absolute bottom-0 transition-transform duration-300 transform group-hover:scale-110"
            />
          </div>

          {/* second column */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="transition-transform duration-300 transform group-hover:translate-y-[-5px]">
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-60 mb-2">
                  Smart Watch
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandYellow"}
                />
              </div>
            </div>
            <img
              src={Image2}
              alt="smart watch"
              className="w-[320px] absolute -right-10 lg:top-[40px] transition-transform duration-300 transform group-hover:scale-110"
            />
          </div>

          {/* third column */}
          <div
            className="col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl group"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="transition-transform duration-300 transform group-hover:translate-y-[-5px]">
              <div className="mb-4">
                <p className="text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-50">
                  Laptop
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt="laptop"
              className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0 transition-transform duration-300 transform group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
