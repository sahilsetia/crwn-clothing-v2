import { createContext, useEffect, useState } from "react";
import { authChange } from "../Utils/firebase/firebase-util";

export const myContext = createContext();

function UserContext({children}){

    useEffect(() =>{
        const unsubscribe = authChange((user) =>{
            console.log(user);
            setSignValue(user)
        })

        return unsubscribe;

    }, [])


    const [signValue, setSignValue] = useState(null);

    const valueToShare = {
        signValue,
        setSignValue
    } 

    return(
        <myContext.Provider value ={valueToShare}>
            {children}
        </myContext.Provider>
    )
};

export default UserContext;