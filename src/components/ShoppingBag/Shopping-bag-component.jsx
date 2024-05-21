import { useContext } from 'react';
import {ReactComponent as ShopBag} from '../../asserts/shopping-bag.svg'
import './shopping-bag.scss';
import { myCartContext } from '../../contexts/cart-context-component';


export default function ShoppingBag(){
    const {toogleCart, setToogleCart, cartItem} = useContext(myCartContext)

    function handleIconClick(){
        console.log(toogleCart)
        setToogleCart(!toogleCart)
    }

    const ItemInCart = cartItem.reduce((acc, current) =>{
        return acc + current.quantity
    }, 0)


    return(
        <div onClick={handleIconClick} className='shopping-bag-icon'>
            <ShopBag />
            <span className='bag-items'>{ItemInCart || 0} </span>
        </div>
    )
}