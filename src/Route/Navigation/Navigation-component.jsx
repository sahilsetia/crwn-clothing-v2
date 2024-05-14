import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import {ReactComponent as BrandLogo} from '../../asserts/crown.svg';
import './navigation.scss';
import { myContext } from "../../contexts/user-context-component";
import { signOutUser } from "../../Utils/firebase/firebase-util";

function NavigationMenu(){

    const {signValue, setSignValue} = useContext(myContext);

    console.log(signValue);

    async function handleSignOutClick(){
       await signOutUser();
       setSignValue(null);
    }

    return(
        <Fragment>
            <div className="navigation-component">
                <div className="brand">
                    <a href="/"><BrandLogo /></a>
                </div>
                <ul className="navigation-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/Shop.html">Shop</a></li>
                    <li><a href="/ContactUs.html">Contact Us</a></li>
                    <li>
                            {
                            (
                                signValue === null ? 
                                <a href="/auth.html">Sign In</a> : 
                                 <span className="signout" onClick={handleSignOutClick}>Sign Out</span>
                            )
                            }
                    </li>
                </ul>
            </div>
            <Outlet />
        </Fragment> 
    )
};

export default NavigationMenu;