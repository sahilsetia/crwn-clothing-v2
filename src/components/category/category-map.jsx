import './category-style.scss';

const CategoryMap = ({category})=>{
    return(
        <div className="container-category">
           { category.map((item)=>{
                return <div className="category" key={item.id}>
                            <div className='category-image' style={{
                                backgroundImage: `url(${item.url})`
                            }}>  
                            <a href={item.link}>
                                <div className='category-text'>  
                                    <h2>{item.name}</h2>
                                    <p>Shop Now</p>
                                </div>
                            </a>
                            </div>
                        </div>
            })}
            </div>
    )
};

export default CategoryMap;