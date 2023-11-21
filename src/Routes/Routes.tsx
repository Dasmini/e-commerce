import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import AboutPage from "../Pages/AboutPage/AboutPage";
import HomePage from "../Pages/HomePage/HomePage";
import ShopPage from "../Pages/ShopPage/ShopPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import WishlistPage from "../Pages/WishlistPage/WishlistPage";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "/",
                element : <HomePage/>
            },
            {
                path : "shop",
                element : <ShopPage/>
            },
            {
                path : "about",
                element : <AboutPage/>
            },
            {
                path : "contact",
                element : <ContactPage/>
            },
            {
                path : "my_profile",
                element : <ProfilePage/>
            },
            {
                path : "wishlist",
                element : <WishlistPage/>
                // element : <WishlistPage data={{id:1,content:"das"}}/>
            }
        ],
    },
]);