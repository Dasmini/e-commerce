// import React from "react";
// import Products from "../../components/Products";
// import HomePage from "../HomePage/HomePage";
import Items from "../../components/Items";

// interface Props {}

const ShopPage = () => {   //props: Props
//   const productDetails = [
//     {
//       id: 1,
//       image: "/product.jpg",
//       category: "Wall Decor",
//       productName: "Frame Decor",
//       price: 250,
//     },
//     {
//       id: 2,
//       image: "/product2.jpg",
//       category: "Wall Decor",
//       productName: "Round Frame Decor ",
//       price: 300,
//     },
//     {
//       id: 3,
//       image: "/product3.jpg",
//       category: "Table Decor",
//       productName: "Life in light",
//       price: 600,
//     },
//   ];
  return (
    <>
      {/* {productDetails.map((data) => (
        <div className="product-cont">
          <p className="Announcing-tag">New</p>
          <img id="heart" src={"./heart.svg"} alt="heart" />
          <img src={data.image} alt="product image" />
          <p id="category">{data.category}</p>
          <p id="product-name">{data.productName}</p>
          <p id="price">Rs.{data.price}</p>
        </div>
      ))} */}
      {/* <Products ></Products> */}
      <Items displayPage="shop"/>
    </>
  );
};

export default ShopPage;
