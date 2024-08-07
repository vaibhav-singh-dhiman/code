import Product from "../../assets/Product";
import { useContext,createContext, Children } from "react";
const ProductContext=createContext(Product);
const ProductProvider=({children})=>{
    return(
        <ProductContext.Provider value={Product}>
            {children}
        </ProductContext.Provider>

    )
}
const useProduct=()=>{
    return useContext(ProductContext)
}
export {ProductProvider,useProduct}