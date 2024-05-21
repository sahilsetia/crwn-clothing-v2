import { useContext } from "react";
import Button from "../default/Button";
import './ShopProduct.scss';
import { myCartContext } from "../../contexts/cart-context-component";

export default function ShopProduct({product}){

    const {addItemToCart} = useContext(myCartContext);

    function handleAddToCart(){
        addItemToCart(product);
    }

    const {name, imageUrl, price} = product
    return(
        <div className="container-product">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="product-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button onClick={handleAddToCart} typeOf="invert" className="button-price">Add to Cart</Button>
        </div>
    )
}