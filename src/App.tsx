import "./App.css";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router";
import { ProductDetailsProvider } from "./components/ProductDetailsContext";

const App:React.FC=()=> {
  return (
    <ProductDetailsProvider>
      <Navigation></Navigation>
      <Outlet />
    </ProductDetailsProvider>
  );
}

export default App;
