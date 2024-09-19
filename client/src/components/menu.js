import React from "react";

const myObject = {
  id: 1,
  images: [
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/3.png",
    "/img/4.png",
    "/img/5.jpg",
    "/img/6.jpg",
  ],
  title: "Background Images",
  description: "A collection of background images for the homepage.",
  category: "homepage",
};

const objects = [
  {
    id: 1,
    images: ["/img/bggp.jpg"],
    category: "homepage",
  },
  {
    id: 2,
    images: [
      { image: "/img/1.jpg", title: "Free Shipping" },
      { image: "/img/2.jpg", title: "Online Order" },
      { image: "/img/3.png", title: "Save Money" },
      { image: "/img/4.png", title: "Promotions" },
      { image: "/img/5.jpg", title: "Happy Sell" },
      { image: "/img/6.jpg", title: "24/7 Support" },
    ],
  },
  {
    id: 3,
    images: [
      { image: "/img/rangoli.jpeg", title: "Rangoli Design" },
      { image: "/img/p12.jpeg", title: "Shawl" },
      { image: "/img/p15.jpeg", title: "Handmade Bags" },
      { image: "/img/p7.jpeg", title: "Scented Candle" },
      { image: "/img/p10.jpeg", title: "Mop" },
      { image: "/img/p11.jpeg", title: "Duster" },
      { image: "/img/p8.jpeg", title: "Jewellery Box" },
      { image: "/img/p13.jpeg", title: "Turmeric" },
    ],
  },
  {
    id: 4,
    images: [
      { image: "/img/f11.jpg", title: "T shirts" },
      { image: "/img/c22.jpg", title: "Diy Kits" },
      { image: "/img/p5.jpeg", title: "Diyas" },
      { image: "/img/c7.jpg", title: "Cups" },
      { image: "/img/C100.jpg", title: "Pottery Making" },
      { image: "/img/s.jpeg", title: "Scarf" },
      { image: "/img/slip.jpg", title: "Bamboo Slipper" },
      { image: "/img/pur.jpg", title: "Ladies Purse" },
    ],
  },
];

export { myObject, objects };
