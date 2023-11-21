import { createContext ,useContext ,useState } from "react";
import { Item , productData} from "./AllProducts";

type ProductDetailsContextType = {
    productDetails : Item[];
    updateProductDetails : (updatedDetails : Item[]) => void;
};

const ProductDetailsContext = createContext<ProductDetailsContextType | undefined> (undefined);

export const ProductDetailsProvider : React.FC<{children : React.ReactNode}> = ({children}) => {
    const [productDetails , setProductDetails] = useState<Item[]>(productData);

    const updateProductDetails =(updatedDetails : Item[]) =>{
        setProductDetails(updatedDetails);
        
    };

    return(
        <ProductDetailsContext.Provider value = {{productDetails , updateProductDetails}}>
            {children}
        </ProductDetailsContext.Provider>
    );
};

export const useProductDetails = () =>{
    const context = useContext(ProductDetailsContext);
    if(!context){
        throw new Error("useProduct Details mst be within a ProductDetailsProvider");
    }
    return context
}