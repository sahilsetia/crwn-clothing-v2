import CategoryMap from "./category-map.jsx";

export default function CategoryList(){
    const category = [{
        id: 1,
        name: "hats",
        url: "https://i.ibb.co/rZdtHrS/hats.jpg"
      },{
        id: 2,
        name: "Sunglasses",
        url: "https://i.ibb.co/gd0smgd/sunglass.jpg"
      },{
        id: 3,
        name: "socks",
        url: "https://i.ibb.co/bQd2CM9/socks.jpg"
      },{
        id: 4,
        name: "bands",
        url: "https://i.ibb.co/HdkN6FZ/band.jpg"
      },{
        id: 5,
        name: "tattos",
        url: "https://i.ibb.co/Nj02rV9/tattoo.jpg"
      }
    ];
    return(
        <div className="wrap-category">
            <CategoryMap category={category} />
        </div>
    )
}