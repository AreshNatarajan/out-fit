// import React, { useState } from "react";
import { Link } from "react-router-dom";

// CSS
import "../css/ProductList.css";

// icon
import { FaHeart } from "react-icons/fa";

import top1 from "../assets/cc4e159f6178631788d2ae4ba1bee4ea.jpg";
import top2 from "../assets/ac44041ba424c18d3ec187180035684e.jpg";
import top3 from "../assets/458e7c7128c69dc371413c9c103ba352.jpg";
import top4 from '../assets/440dcf2e22721ecaddc7068d93e2ec80.jpg';
import top5 from '../assets/53b0f39b835bea687d13ca85a41b1d50.jpg';
import top6 from '../assets/b3c0319517a35f91c2a00673bb2cbde2.jpg';
import top7 from '../assets/d214fd3c1eca4a5c8ffb2260c26c1481.jpg';
import top8 from '../assets/f0ef0bba4496d1818e8b8fbe4ef524f1.jpg';
import top9 from '../assets/848c32c098d530e9fcaf949e32a96807.jpg';

const products = {
  top: [
    { id: 1, img: top1, dressName: "Dress", description: "A beautiful dress" },
    { id: 2, img: top2, dressName: "Skirt", description: "A stylish skirt" },
    { id: 3, img: top3, dressName: "Skirt", description: "A stylish skirt" },
    { id: 4, img: top4, dressName: "Skirt", description: "A stylish skirt" },
    { id: 5, img: top5, dressName: "Skirt", description: "A stylish skirt" },
    { id: 6, img: top6, dressName: "Skirt", description: "A stylish skirt" },
    { id: 7, img: top7, dressName: "Skirt", description: "A stylish skirt" },
    { id: 8, img: top8, dressName: "Skirt", description: "A stylish skirt" },
    { id: 9, img: top9, dressName: "Skirt", description: "A stylish skirt" },
  ],
  
  men: [
    { id: 3, dressName: "Shirt", description: "A casual shirt" },
    { id: 4, dressName: "Trousers", description: "Comfortable trousers" },
  ],
  bags: [
    { id: 5, dressName: "Handbag", description: "A trendy handbag" },
    { id: 6, dressName: "Backpack", description: "A durable backpack" },
  ],
  shoes: [
    { id: 7, dressName: "Sneakers", description: "Comfortable sneakers" },
    { id: 8, dressName: "Boots", description: "Sturdy boots" },
  ],
};

 





function ProductBox({ details, category }) {
  return (
    <>
      <Link className="col" to={`/product/${details.id}/${category}`}>
        <img
          className="detail_image"
          src={details.img}
          alt={details.dressName}
          srcSet=""
        />
        <FaHeart className="secondLayer" />
      </Link>
    </>
  );
}

function ProductList({ category }) {
  const productList = products[category];
  return (
    <div>
      <div className="container">
        <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
        <div className="row">
          {productList.map((product) => (
            <ProductBox
              key={product.id}
              details={product}
              category={category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}



export default ProductList;
