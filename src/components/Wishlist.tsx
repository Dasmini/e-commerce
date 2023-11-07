import "../App.css";
import React from "react";
import WishlistPage from "../Pages/WishlistPage/WishlistPage";

const Wishlist: React.FC<{ items: string[] }> = (props) => {
//   const productDetails = [
//     { id: 1, content: "Content 1" },
//     { id: 2, content: "Content 2" },
//     { id: 3, content: "Content 3" },
//   ];
  return (
    <>
      {/* <ul>{props.items}</ul>
      {productDetails.map((item)=>(
        <WishlistPage key={item.id} data={item} />
      ))} */}
      <WishlistPage/>
      
    </>
  );
};

export default Wishlist;
