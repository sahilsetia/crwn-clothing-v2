import RealShop from '../RealShop/RealShop';
import { SubCategies } from '../SubCategories/SubCategies-page';
import './shopPage.scss';
import { Route, Routes } from "react-router-dom";


export default function Shop(){

    return (
        <div>
                <Routes>
                    <Route index element={<RealShop />}/>
                    <Route path=":category" element={<SubCategies />}/>
                </Routes>
        </div>
    )
};