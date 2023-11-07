import React from 'react';
// import Home from '../../components/Home';
import Products from './Products';

interface Props {
    displayPage : string
}

const Items = (props:Props) => {
    const productDetails = [
        { id: 1, image: "/product.jpg" ,category: "Wall Decor" , productName : "Frame Decor" ,price : 250,isWishlisted: true},
        { id: 2, image: "/product2.jpg"  ,category: "Wall Decor" , productName : "Round Frame Decor " ,price : 300,isWishlisted: false},
        { id: 3, image: "/product3.jpg"  ,category: "Table Decor" , productName : "Life in light" ,price : 600,isWishlisted: false},
      ];
    //   console.log("from item:" ,props.displayPage)

      const wishlistHandler = (choice:boolean)=>{
        console.log(choice , "returned to item")
      }
    return(
        <>
            {/* <Home/> */}
            {productDetails.map((item)=>(
                
                <Products key={item.id} data={item} displayPage={props.displayPage} onAddWhishlist={wishlistHandler}/>
                
            ))}
        </>
    )
}

export default Items
