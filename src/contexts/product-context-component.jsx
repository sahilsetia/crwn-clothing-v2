import {createContext, useEffect, useState } from "react";
import { getTheCOllections } from "../Utils/firebase/firebase-util";

export const MyProductContext = createContext();

function ProductContext({children}){

    const [product, setProduct] = useState({});

    useEffect(() =>{
        const getData =async () =>{
            const myCollection = await getTheCOllections();
            //console.log(myCollection)
            setProduct(myCollection)
        }
        getData();
    }, [])

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