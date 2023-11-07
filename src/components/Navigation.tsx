import { Link } from 'react-router-dom';
import '../App.css';


export default function Navigation(){
    return(
        <>
        <div className='nav-bar'>
            <Link to="/">
            <img id="logo"src="/logo.png" alt="Logo" />
            </Link>
            <div className="nav-contents-1">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="shop">Shop</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </div>
            <div className="nav-contents-2">
                <ul>
                    <li><input type="text" placeholder="Type here to search"/></li>
                    <li><a href="wishlist"><img src="" alt="Wishlist" /></a></li>
                    <li><a href="my_profile"><img src="" alt="My profile" /></a></li>
                    <li><a href="#"><img src="" alt="Cart" /></a></li>
                </ul>
            </div>
            </div>
        </>
    )
}