import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import {ReactComponent as BrandLogo} from '../../asserts/crown.svg';
import './navigation.scss';

function NavigationMenu(){
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
                    <li><a href="/SignIn.html">Sign In</a></li>
                </ul>
            </div>
            <Outlet />
        </Fragment>
    )
};

export default NavigationMenu;