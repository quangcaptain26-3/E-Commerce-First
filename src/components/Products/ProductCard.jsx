import React from "react";
import Button from "../Shared/Button";

const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* card section */}
        {data.map((data) => (
          <div
          data-aos="fade-up" data-aos-delay={data.aosDelay}
            className="group transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            key={data.id}
          >
            <div className="relative">
              <img
                src={data.img}
                className="h-[180px] w-[260px] object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
              />

              {/* hover */}
              <div
                className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-md justify-center items-center duration-200"
              >
                <Button
                  text={"Add to Cart"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                  className="transform transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
            <div className="leading-7 text-center">
              <h2 className="font-semibold transition-transform duration-300 group-hover:translate-y-[-2px]">
                {data.title}
              </h2>
              <h2 className="font-bold transition-transform duration-300 group-hover:translate-y-[-2px]">
                {data.price}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
