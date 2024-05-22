import { createContext, useState } from "react"

export const myCartContext = createContext();

export default function CartContext({children}){

    const [toogleCart, setToogleCart] = useState(false);
    const [cartItem, setCartItem] = useState([]);
    const [orderTotal, setOrderTotal] = useState(0)

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

    function quantityCheck(item, action){
        const newitems = cartItem.map((product) =>{
            if(product.id === item.id){
                return {...product, quantity: item.quantity + (action === 'remove'?  -1 :  1)}
            }
            else{
                return {...product}
            }
        })
        setCartItem(newitems);
    }

    function DeleteProduct(item){
        const newitems = cartItem.filter((product) =>{
            return product.id !== item.id
         })
         setCartItem(newitems);
 
    }

    const valueToShare ={
        toogleCart,
        setToogleCart,
        cartItem,
        setCartItem,
        addItemToCart,
        quantityCheck,
        DeleteProduct,
        orderTotal,
        setOrderTotal
    }

    return(
        <myCartContext.Provider value={valueToShare}>
            {children}
        </myCartContext.Provider>
    )
}