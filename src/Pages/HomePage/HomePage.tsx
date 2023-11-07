import React from 'react';
import Home from '../../components/Home';
import Products from '../../components/Products';
import Items from '../../components/Items';

interface Props {}

const HomePage = (props:Props) => {
    
    return(
        <>
            <Home/>
            <Items displayPage='home'/>
        </>
    )
}

export default HomePage
