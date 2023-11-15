// import React, { useState } from "react";
// import Home from '../../components/Home';
import Products from "./Products";
import { productData } from "./AllProducts";
// import { Item } from "./AllProducts";


interface Props {
  displayPage: string;
}

const Items = (props: Props) => {

//   const [items, setItems] = useState<Item[]>(productData);

//   const wishlistHandler = (choice: boolean, id: number) => {
//     console.log(choice, "returned to item");

//     setItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id == id ? { ...item, isWishlisted: choice } : item
//       )
//     );
//     console.log(items);
//   };

  return (
    <>
      {/* <Home/> */}
      {productData.map((item) => (
        <Products
          key={item.id}
          data={item}
          displayPage={props.displayPage}
        //   onAddWhishlist={wishlistHandler}
        />
      ))}
    </>
  );
};

export default Items;
