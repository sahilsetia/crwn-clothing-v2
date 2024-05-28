
import { useContext} from "react"
import { MyProductContext } from "../../contexts/product-context-component"
import ShopProduct from "../../components/Shop-Product-Item/Shop-Product-Componenet";
import { useNavigate } from "react-router-dom";

export default function RealShop(){
        const {product} = useContext(MyProductContext);
        const navigate = useNavigate();

        function handleTitleClick(item){
            navigate(`/shop/${item}`)
        }
        
           const newValue =  Object.keys(product).map((item, ind) =>{
            return <div key={ind * Math.random()}>
                <h2 className="name-title">
                    <span className="linktext" onClick={() =>handleTitleClick(item.toLocaleLowerCase())}>{item.toLocaleLowerCase()}</span>
                </h2>
                <div className="container-product-wrap">
                {product[item].filter((_, ind) => ind < 4).map((product, ind) =>{
                    return <ShopProduct id={ind * Math.random()} product ={product}  />
                })}
                </div>
                </div>
            })
    
        return (
            <>{newValue}</>
        )
}