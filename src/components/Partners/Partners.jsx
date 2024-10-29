import React from 'react'
import brand1 from "../../assets/brand/corsaird.png";
import brand2 from "../../assets/brand/asus.png";
import brand3 from "../../assets/brand/jbl.png";
import brand4 from "../../assets/brand/Logitech-Logo.png";
import brand5 from "../../assets/brand/rezo.png";


const Partners = () => {
  return (
    <div data-aos="zoom-out" className="py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10">
      <div className="container">
        <div className="grid grid-cols-5 gap-3 place-items-center opacity-60">
            <a href="https://www.corsair.com/us/en" target="_blank" rel="noopener noreferrer">
              <img src={brand1} alt="brand"  className="w-[130px] dark:invert"/>
            </a>
            <a href="https://www.asus.com/vn/" target="_blank" rel="noopener noreferrer">
              <img src={brand2} alt="brand"  className="w-[130px] dark:invert"/>
            </a>
            <a href="https://vn.jbl.com/" target="_blank" rel="noopener noreferrer">
              <img src={brand3} alt="brand"  className="w-[80px] dark:invert"/>
            </a>
            <a href="https://www.logitech.com/vi-vn" target="_blank" rel="noopener noreferrer">
              <img src={brand4} alt="brand"  className="w-[130px] dark:invert"/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={brand5} alt="brand"  className="w-[130px] dark:invert"/>
            </a>
        </div>
      </div>
    </div>
  )
}


export default Partners
