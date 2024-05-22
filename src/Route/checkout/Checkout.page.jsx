import { useContext, useEffect } from "react";
import { myCartContext } from "../../contexts/cart-context-component";
import { IoIosArrowBack, IoIosArrowForward, IoMdCloseCircleOutline  } from "react-icons/io";
import './checkoutPage.scss';


export default function Checkout(){
    const {cartItem, DeleteProduct, quantityCheck, orderTotal, setOrderTotal}= useContext(myCartContext);


    useEffect(() =>{
        setOrderTotal(totalCartValue);
    }, [cartItem])


    function handleQuanty(item, action){
        quantityCheck(item, action)
        
    }

    function handleDeleteItem(item){
        DeleteProduct(item);
    }


    const totaCheckoutCart = cartItem.map((item) =>{
        const {name, imageUrl, price, quantity} = item;
       return <div className="checkout-items-collection">
            <img className="checkout-img-collection" width={150} src={imageUrl} alt={name} />
            <span className="checkout-name-collection">{name}</span>
            <div className="quantity-modifier">
                <IoIosArrowBack onClick={() =>handleQuanty(item, 'remove')} className="checkout-quantity-reduce" />
                <span className="checkout-quantity-collection">{quantity}</span>
                <IoIosArrowForward  onClick={() =>handleQuanty(item, 'add')}className="checkout-quantity-add" />
            </div>
            <span className="checkout-price-collection">{price * quantity}</span>
            <span className="checkout-remove-item" onClick={() =>handleDeleteItem(item)}><IoMdCloseCircleOutline /></span>
        </div>
    }) 

    const totalCartValue = cartItem.reduce((acc, current) =>{
       return acc + (current.price * current.quantity)
    }, 0);

    console.log(totalCartValue);


    return(
        <div className="container-checkout-items">
            {totaCheckoutCart}
           <div className="order-total-value">Total CartValue: {orderTotal}</div>
        </div>
    )
}