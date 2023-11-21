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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="shop">Shop</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
            </div>
            <div className="nav-contents-2">
                <ul>
                    <li><input type="text" placeholder="Type here to search"/></li>
                    <li><Link to="wishlist"><img src="./heart.png" alt="Wishlist" className="nav-icons" title='wishlist'/></Link></li>
                    <li><Link to="my_profile"><img src="./user.png" alt="My profile" className="nav-icons" title='My Profile'/></Link></li>
                    <li id="cart-icon-cont"><Link to="cart"><img src="./shopping-cart.png" alt="Cart" className="nav-icons" title='Cart'/><div className='cart-count'>0</div></Link></li>
                </ul>
            </div>
            </div>
            <hr id='hr-nav'/>
        </>
    )
}