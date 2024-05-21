import {createContext, useState } from "react";
import PRODUCT_DATA from '../Json-data/shop-data.json';

export const MyProductContext = createContext();

function ProductContext({children}){

    const [product, setProduct] = useState(PRODUCT_DATA);

    const value ={
        product,
        setProduct
    }

    return(
        <MyProductContext.Provider value={value}>
            {children}
        </MyProductContext.Provider>
    )

}

export default ProductContext;