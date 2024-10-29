import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import asustuf from "./assets/hero/asus-gaming-removebg.png";
import corsair from "./assets/hero/corsair-k70.png";
import Products from "./components/Products/Products";
import Blog from "./components/Blogs/Blog";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerData = {
  discount: "20% OFF",
  title: "Power Boost",
  date: "5 Sep - 20 Sep",
  image: asustuf,
  title2: "Asus Gaming TUF FA506NF",
  title3: "Back to School Sale",
  title4: <><s>20.000.000</s> {"16.000.000"}</>,
  bgColor: "#23272A",
};


const BannerData2 = {
  discount: "30% OFF",
  title: "Smooth Type",
  date: "23 Sep - 22 Oct",
  image: corsair,
  title2: "Corsair K70 RGB",
  title3: "Autumn Sale",
  title4: <><s>3.000.000</s> {"2.100.000"}</>,
  bgColor: "#8ABF94",
};


const App = () => {

  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  },[]);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blog/>
      <Partners/>
      <Footer/>
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/>
    </div>
  );
};

export default App;
