import { Fragment } from "react";
import { Outlet } from "react-router-dom";

export default function Sunglass(){
    return(
        <Fragment>
        <div>
            this is the main page of Sunglass
            we do have 2 types of subglass
            <div><a href="/Sunglass/SportSunglass.html">Sports Sunglass</a></div>
            <div><a href="/Sunglass/PowerSubglass.html">Power Sunglass</a></div>
            <Outlet />
        </div>
        </Fragment>
    )
}