import React from 'react'
import Items from '../../components/Items';
import Wishlist from '../../components/Wishlist';

interface Props {
    // data:{
    //     id:number;
    //     content:string
    // };
}

// const WishlistPage:React.FC<Props> = ({data}) =>{
//     return (
//         <>
//             <div>{data.content}</div>
//             <Items displayPage={"wishlist"}/>
//         </>
//     )
// }
const WishlistPage = (props : Props)=>{
    return(
        <>
        <Items displayPage={"wishlist"}/>
        </>
    )
}

export default WishlistPage

