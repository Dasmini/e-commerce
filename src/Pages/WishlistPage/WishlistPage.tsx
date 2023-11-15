
import Items from '../../components/Items';


interface Props {
    // data:{
    //     id:number;
    //     content:string
    // };
}


const WishlistPage = (props : Props)=>{
    return(
        <>
        <Items displayPage={"wishlist"}/>
        </>
    )
}

export default WishlistPage

