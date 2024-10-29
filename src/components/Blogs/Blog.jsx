import React from "react";
import Heading from "../Shared/Heading";

// Images
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/b-speaker.jpg";

const BlogData = [
  {
    title: "How to Choose the Perfect Smartwatch",
    subtitle:
      "Discover essential tips for choosing a smartwatch that fits your lifestyle, covering key features like health tracking, connectivity, battery life, and style. Find the perfect balance of function and fashion to meet your daily needs.",
    published: "July 20, 2024 by Saimon",
    image: Img1,
    aosDelay: 100,
  },

  {
    title: "How to Choose the Perfect Gadget",
    subtitle:
      "Explore the key factors to consider when selecting the ideal gadget, from performance and design to compatibility and long-term value. Find the best options that align with your needs and lifestyle.",
    published: "June 20, 2024 by Piter",
    image: Img2,
    aosDelay: 200,
  },

  {
    title: "How to choose the perfect speaker",
    subtitle:
      "Discover the essential factors to consider when choosing the ideal speaker, whether for personal use, professional audio setups, or immersive home theater experiences.",
    published: "May 20, 2024 by Alex",
    image: Img3,
    aosDelay: 300,
  },
];

const Blog = () => {
  return (
    <div className="my-12">
      <div className="container">
        <Heading title="Recent News" subtitle={"Explore Our Blogs"} />

        {/* Blog Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog card */}
          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.title}
              className="bg-white dark:bg-gray-900"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl md-2">
                <img
                  src={data.image}
                  alt="blog"
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.publised}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
