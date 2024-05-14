import { Route, Routes } from "react-router-dom";
import Home from "./Route/Home/home-page";
import Shop from './Route/Shop/shop-page';
import ContactUs from "./Route/ContactUs/contact-us-page";
import NavigationMenu from "./Route/Navigation/Navigation-component";
import Sunglass from "./Route/Sunglass/Sunglass-page";
import PowerSunglass from "./Route/Sunglass/Power-Sunglass-page";
import SportSunglass from "./Route/Sunglass/Sport-Sunglass-page";
import SignIn from "./Route/SignIn/Sign-in-component";

function App() {

  return (
    <Routes>
      <Route path="/" element = {<NavigationMenu />} >
        <Route index element={<Home />} />
        <Route path="Shop.html" element ={<Shop/>} />
        <Route path="ContactUs.html" element={<ContactUs />}/>
        <Route path="SignIn.html" element={<SignIn />}/>
        <Route path="Sunglass" element={<Sunglass />} >
          <Route path="PowerSubglass.html" element={<PowerSunglass />} />
          <Route path="SportSunglass.html" element={<SportSunglass />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App;
