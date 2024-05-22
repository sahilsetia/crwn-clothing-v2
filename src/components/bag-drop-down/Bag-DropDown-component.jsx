import { useContext } from "react";
import Button from "../default/Button";
import './bag-drop.scss';
import { myCartContext } from "../../contexts/cart-context-component";
import { Link } from "react-router-dom";

export default function BagDropDown(){
    const {cartItem} = useContext(myCartContext);

    console.log(cartItem);

    const totalCartItems = cartItem.map(({id, name, imageUrl, price, quantity}) =>{
       
        return (<div key={id * Math.random()} className="cart-item">
            <img src={imageUrl} alt={name} width='70px' />
            <div className="item-price-detials">
                <span>{name}</span>
                <span>{quantity} * {price}</span>
            </div>
        </div>)
    })
    return(
        <div className="shopping-bag-cotainer">
            <div className="shopping-bag">
                {totalCartItems}
                <Link to="/checkout.html">
                    <Button className="checkout-drop-btn" typeOf="primary">CHECKOUT PAGE</Button>
                </Link>
            </div>
        </div>
    )
}