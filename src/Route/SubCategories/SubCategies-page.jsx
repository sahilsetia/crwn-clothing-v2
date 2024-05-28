import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { MyProductContext } from "../../contexts/product-context-component";
import ShopProduct from "../../components/Shop-Product-Item/Shop-Product-Componenet";

export function SubCategies(){
    
    const {product} = useContext(MyProductContext);
    const {category} = useParams();

    const toalProduct = product[category];


    const [section, setSection] =useState(toalProduct);

    useEffect(() =>{
        setSection(toalProduct)
    },[product, category])

    const totalItems = section && section.map((item) =>{
        return <ShopProduct key={item.id} product={item} />
   })


    return(
        <div>
            <h1>{category}</h1>
            <div className="container-product-wrap">
                {totalItems}
            </div>
        </div>
    )
}