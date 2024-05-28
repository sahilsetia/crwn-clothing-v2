import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
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
                    <Link to="/"><BrandLogo /></Link>
                </div>
                <ul className="navigation-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/ContactUs.html">Contact Us</Link></li>
                    <li>
                            {
                            (
                                signValue === null ? 
                                <Link to="/auth.html">Sign In</Link> : 
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