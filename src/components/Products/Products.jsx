import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'


// images import
import Img1 from "../../assets/product/p-sony.jpg";
import Img2 from "../../assets/product/p-z.jpg";
import Img3 from "../../assets/product/p-jbl.jpg";
import Img4 from "../../assets/product/p-befit.jpg";
import Img5 from "../../assets/product/p-zero-play.jpg";
import Img6 from "../../assets/product/p-logi.jpg";
import Img7 from "../../assets/product/p-sounarc.jpg";
import Img8 from "../../assets/product/p-m3.jpg";
import Img9 from "../../assets/product/p-k1.jpg";
import Img10 from "../../assets/product/p-acer-a715.jpg";
import Img11 from "../../assets/product/p-logi-key.jpg";
import Img12 from "../../assets/product/p-msi-g63.jpg";



const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Sony WH-1000XM4",
        price: "150",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Z-Watch",
        price: "200",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "JBL Tune 750BTNC",
        price: "100",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "BeFit Smartwatch",
        price: "250",
        aosDelay: "600",
    },
]

const ProductsData2 = [
    {
        id: 5,
        img: Img5,
        title: "Rezo Play Speaker",
        price: "150",
        aosDelay: "0",
    },
    {
        id: 6,
        img: Img6,
        title: "Logitech G Pro X",
        price: "200",
        aosDelay: "200",
    },
    {
        id: 7,
        img: Img7,
        title: "Soundarc Speaker",
        price: "100",
        aosDelay: "400",
    },
    {
        id: 8,
        img: Img8,
        title: "M3 Gen II",
        price: "250",
        aosDelay: "600",
    },
]

const ProductsData3 = [
    {
        id: 9,
        img: Img9,
        title: "K1 Keyboard",
        price: "150",
        aosDelay: "0",
    },
    {
        id: 10,
        img: Img10,
        title: "Acer A715",
        price: "200",
        aosDelay: "200",
    },
    {
        id: 11,
        img: Img11,
        title: "Logitech G Pro Keyboard",
        price: "100",
        aosDelay: "400",
    },
    {
        id: 12,
        img: Img12,
        title: "MSI G63",
        price: "250",
        aosDelay: "600",
    }
]


const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Heading Section */}
        <Heading title="Our Product" subtitle={"Explore Our Products"}/>


        {/* Body Section */}
        <ProductCard data={ProductsData}/>
        <ProductCard data={ProductsData2}/>
        <ProductCard data={ProductsData3}/>
      </div>
    </div>
  )
}

export default Products
