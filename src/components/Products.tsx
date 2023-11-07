import '../App.css';
import React, { useState } from 'react';


interface PropsOne {
    data : {
        id : number;
        image : string;
        category : string;
        productName : string;
        price : number;
        isWishlisted : boolean
    },
    onAddWhishlist : (choice : boolean)=>void
    
}
interface PropsTwo {
    displayPage : string
}
type Props = PropsOne & PropsTwo

const Products:React.FC<Props> = (props) =>{
    const[isWishlisted , setIsWishlisted]= useState(props.data.isWishlisted);

    function changeWishlistState(){
        setIsWishlisted(!isWishlisted)
        props.onAddWhishlist(isWishlisted)
        console.log("clicked" , props.data.productName,props.data.isWishlisted)
    }

    if( props.displayPage=="wishlist" && props.data.isWishlisted){
        console.log("first if", props.displayPage , props.data.isWishlisted)
        return(
            <>
            
            <div className='product-cont'>
                <p className="Announcing-tag">New</p>
                <img id="heart" src="./heart.svg" alt="heart" onClick={changeWishlistState}/>
                <img src={props.data.image} alt="product image" />
                <p id='category'>{props.data.category}</p>
                <p id='product-name'>{props.data.productName}</p>
                <p id='price'>Rs.{props.data.price}</p>
            </div>
            </>
        )
    }if(props.displayPage == "home" || props.displayPage == "shop"){
        console.log("sec if",props.displayPage , props.data.isWishlisted)
    return(
        <>
            <div className='product-cont'>
                <p className="Announcing-tag">New</p>
                <img id="heart" src="./heart.svg" alt="heart" onClick={changeWishlistState}/>
                <img src={props.data.image} alt="product image" />
                <p id='category'>{props.data.category}</p>
                <p id='product-name'>{props.data.productName}</p>
                <p id='price'>Rs.{props.data.price}</p>
            </div>
        </>
    )
    }
}
export default Products