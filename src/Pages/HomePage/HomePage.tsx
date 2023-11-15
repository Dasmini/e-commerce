// import React from 'react';
import Home from '../../components/Home';
// import Products from '../../components/Products';
import Items from '../../components/Items';
import NewsLetter from '../../components/NewsLetter';

// interface Props {}

const HomePage = () => {
    
    return(
        <>
            <Home/>
            <Items displayPage='home'/>
            <NewsLetter/>
        </>
    )
}

export default HomePage
