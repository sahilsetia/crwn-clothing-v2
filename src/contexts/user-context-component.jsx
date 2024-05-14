import { createContext, useState } from "react";

export const myContext = createContext();

function UserContext({children}){

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