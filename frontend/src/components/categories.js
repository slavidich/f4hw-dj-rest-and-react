import React from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "../styles/categories.css"

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
            <div className="sidebar" id="sidebar">
                <ul>
                    <li><Link to="/dishes"><p>Все блюда</p></Link></li>
                    {items.map(item=>{
                        return <li><Link key={item.id} to={{pathname: "/dishes", search: `?catid=${item.id}`}} ><p>{item.name}</p></Link></li>
                    })}
                    <li><Link to="http://127.0.0.1:8000/swagger" target="_blank"><p>API документация</p></Link></li>
                </ul>
            </div>
        )
    }
}

export default categories;