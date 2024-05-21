import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import {ReactComponent as BrandLogo} from '../../asserts/crown.svg';
import './navigation.scss';
import { myContext } from "../../contexts/user-context-component";
import { signOutUser } from "../../Utils/firebase/firebase-util";
import ShoppingBag from "../../components/ShoppingBag/Shopping-bag-component";
import BagDropDown from "../../components/bag-drop-down/Bag-DropDown-component";
import { myCartContext } from "../../contexts/cart-context-component";

function NavigationMenu(){

    const {signValue} = useContext(myContext);
    const {toogleCart} = useContext(myCartContext);

    async function handleSignOutClick(){
       await signOutUser();
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
                    <li><ShoppingBag /></li>
                </ul>
                {toogleCart ?<BagDropDown /> : ''}
            </div>
            <Outlet />
        </Fragment> 
    )
};

export default NavigationMenu;