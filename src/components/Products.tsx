import "../App.css";
import { useProductDetails } from "./ProductDetailsContext";
import React, { useState } from "react";
import { Item, productData, updateProductData } from "./AllProducts";
import { useEffect } from "react";

interface PropsOne {
  data: {
    id: number;
    image: string;
    category: string;
    productName: string;
    price: number;
    isWishlisted: boolean;
  };
  // onAddWhishlist : (choice : boolean,id:number)=>void
}
interface PropsTwo {
  displayPage: string;
}
type Props = PropsOne & PropsTwo;

const Products: React.FC<Props> = (props) => {
    const[heartImage , setHeartImage] = useState("./heart.png")
  const { productDetails, updateProductDetails } = useProductDetails();
  
 


  const handleHeartClick = (id: number) => {
    setHeartImage("./heart-filled.png")
    const updatedDetails = productData.map((product) =>
      product.id == id
        ? { ...product, isWishlisted: !product.isWishlisted }
        : product
    );
    updateProductDetails(updatedDetails);
    updateProductData(updatedDetails);
    
    productDetails.map((product) =>
      product.id == id ? console.log("details : ", product.isWishlisted) : null
    );
    productData.map((product) =>
      product.id == id ? console.log("data : ", product.isWishlisted) : null
    );
    
  };
  console.log(productDetails);
  

  if (props.displayPage == "wishlist" && props.data.isWishlisted) {
    return (
      <>
        <div className="product-cont">
          <p className="Announcing-tag">New</p>
          <img
            id="heart"
            src="./heart-filled.png"
            alt="heart"
            onClick={() => handleHeartClick(props.data.id)}
          />
          <img src={props.data.image} alt="product image" />
          <p id="category">{props.data.category}</p>
          <p id="product-name">{props.data.productName}</p>
          <p id="price">Rs.{props.data.price}</p>
        </div>
      </>
    );
  }
  if (props.displayPage === "home" || props.displayPage === "shop") {
    return (
      <>
        <div className="product-cont">
          <p className="Announcing-tag">New</p>
          {props.data.isWishlisted ? (
            <img
              id="heart"
              src="./heart-filled.png"
              alt="heart"
              onClick={() => handleHeartClick(props.data.id)}
            />
          ) : (
            <img
              id="heart"
              src="./heart.png"
              alt="heart"
              onClick={() => handleHeartClick(props.data.id)}
            />
          )}
          <img src={props.data.image} alt="product image" />
          <p id="category">{props.data.category}</p>
          <p id="product-name">{props.data.productName}</p>
          <p id="price">Rs.{props.data.price}</p>
        </div>
      </>
    );
  }
};
export default Products;
