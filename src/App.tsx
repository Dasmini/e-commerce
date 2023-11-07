import './App.css'
import Navigation from './components/Navigation';
import Home from './components/Home';
import Products from './components/Products';
import Wishlist from './components/Wishlist';
import { Outlet } from 'react-router';
function App() {

  
    var wishedProduct = 1;


  return (
    <>
      <Navigation></Navigation>
      <Outlet/>
    </>
  )
}

export default App
