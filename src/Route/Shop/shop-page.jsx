import { useContext } from "react"
import { MyProductContext } from "../../contexts/product-context-component"
import ShopProduct from "../../components/Shop-Product-Item/Shop-Product-Componenet";
import './shopPage.scss';


export default function Shop(){


    const {product} = useContext(MyProductContext);

    const totalProducts = product.map((item) =>{
       return <ShopProduct key={item.id} product ={item}  />
    })

    return (
        <div className="container-product-wrap">{totalProducts}</div>
    )
};