import React from "react";

const Banner = ({ data }) => {
  return (
    <div className="min-h-[450px] md:min-h-[550px] flex justify-center items-center py-8 md:py-12">
      <div className="container">
        <div
          style={{ backgroundColor: data.bgColor }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          {/* First Column */}
          <div className="p-4 sm:p-6 md:p-8 transition-transform duration-300 hover:translate-y-[-2px]">
            <p data-aos="slide-right" className="text-xs sm:text-sm">
              {data.discount}
            </p>
            <h1
              data-aos="zoom-out"
              className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
            >
              {data.title}
            </h1>
            <p data-aos="fade-up" className="text-xs sm:text-sm">
              {data.date}
            </p>
          </div>

          {/* Second Column */}
          <div data-aos="zoom-in" className="h-full flex items-center">
            <img
              src={data.image}
              alt="headphone"
              className="w-[180px] sm:w-[250px] md:w-[300px] lg:w-[340px] mx-auto drop-shadow-2xl object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Third Column */}
          <div className="flex flex-col justify-center gap-4 py-4 sm:py-6 md:p-8">
            <p
              data-aos="zoom-out"
              className="font-bold text-lg sm:text-xl md:text-2xl transition-transform duration-300 hover:translate-y-[-2px]"
            >
              {data.title2}
            </p>
            <p
              data-aos="fade-up"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold transition-transform duration-300 hover:translate-y-[-2px]"
            >
              {data.title3}
            </p>
            <p
              data-aos="fade-up"
              className="text-xs sm:text-sm md:text-base tracking-wide leading-5 transition-transform duration-300 hover:translate-y-[-2px]"
            >
              {data.title4}
            </p>
            <div data-aos="fade-up" data-aos-offset="0">
              <button
                style={{ color: data.bgColor }}
                className="bg-white py-2 px-4 rounded-full transform transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
