import React from 'react';
import { useParams } from 'react-router-dom';

//css

 import '../css/ProductDetail.css'

import top1 from "../assets/cc4e159f6178631788d2ae4ba1bee4ea.jpg";
import top2 from "../assets/ac44041ba424c18d3ec187180035684e.jpg";
import top3 from "../assets/458e7c7128c69dc371413c9c103ba352.jpg";



const products = {
  top: [
    { id: 1, img: top1, dressName: "Dress", description: "A beautiful dress" },
    { id: 2, img: top2, dressName: "Skirt", description: "A stylish skirt" },
    { id: 3, img: top3, dressName: "Skirt", description: "A stylish skirt" },
    { id: 4, img: top3, dressName: "Skirt", description: "A stylish skirt" },
    { id: 5, img: top3, dressName: "Skirt", description: "A stylish skirt" },
    { id: 6, img: top3, dressName: "Skirt", description: "A stylish skirt" },
    { id: 7, img: top3, dressName: "Skirt", description: "A stylish skirt" },
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

function ProductDetail() {
  const { id } = useParams();
  
  const findObject  =() =>{
    for(const category in products){  
        for(let singleObject of products[category]){
          if(id === singleObject.id.toString()){
            return singleObject
          }
        }     
    }
  }
  
  const Product = findObject()
  
  console.log(Product)

  return (
      <>
       <div className="product_details">
           
           <img className='detail_img' src={Product.img} alt={Product.dressName}  />
           <div className="product_details_txtContent">
               <h3>{Product.dressName}</h3>
               <p>{Product.description}</p>
           </div>
       </div>
      </>
  );
}

export default ProductDetail;
