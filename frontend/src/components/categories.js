import React from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";


function categories() {
    let [isLoaded, setisLoaded] = React.useState(false)
    let [items, setItems] = React.useState([])


    function getCategories(){
        axios.get('http://127.0.0.1:8000/food/api/categories')
        .then(resp=>{
            setItems(resp.data)
            setisLoaded(true)
        })
    }
    React.useEffect(()=>{
        getCategories()
        return(()=>{})
    }, [])
    if (!isLoaded){
        return(
            <div>
                <p>Загрузка</p>
            </div>
        )
    }
    else {
        return(
            <div>
                <Link to="/dishes"><p>Все блюда</p></Link>
                {items.map(item=>{
                    return <Link key={item.id} to={{pathname: "/dishes", search: `?catid=${item.id}`}} ><p>{item.name}</p></Link>
                })}
            </div>
        )
    }
}

export default categories;