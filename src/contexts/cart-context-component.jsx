import { createContext, useState } from "react"

export const myCartContext = createContext();

export default function CartContext({children}){

    const [toogleCart, setToogleCart] = useState(false);
    const [cartItem, setCartItem] = useState([]);

    const addItemToCart = (newitem)=>{
        
        const excistingItem = cartItem.find((items)=> items.id === newitem.id );

        if(excistingItem){
        const totalItems =  cartItem.map((items) =>{
                if(items.id === newitem.id){
                    return {...items, quantity : items.quantity + 1}
                }
                else{
                    return  {...items}
                }
            })
            setCartItem(totalItems)
        }
        else{
            setCartItem ([...cartItem, {...newitem, quantity : 1}])  
        }
        setToogleCart(true);
        setTimeout(() => {
            setToogleCart(false);
        }, 1000);
    }

    const valueToShare ={
        toogleCart,
        setToogleCart,
        cartItem,
        setCartItem,
        addItemToCart
    }

    return(
        <myCartContext.Provider value={valueToShare}>
            {children}
        </myCartContext.Provider>
    )
}