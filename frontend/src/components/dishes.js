import React from "react";
import axios from "axios";
import "../styles/dishes.css"
import { Link, useLocation } from "react-router-dom";

function dishes(props){
    let [isLoaded, setisLoaded] = React.useState(false)
    let [dishes, setDishes] = React.useState([])

    const location = useLocation();
    const search = location.search;
    const query = new URLSearchParams(search)
    const catid = query.get('catid')
    function getDishes(){
        axios.get('http://127.0.0.1:8000/food/api/dishes', catid?{
            params:{
                catid: catid
            }
        }: {})
        .then(resp=>{
            setDishes(resp.data)
            setisLoaded(true)
        })
    }
    React.useEffect(()=>{
        getDishes()
        return(()=>{setisLoaded(false)})
    }, [location.search])
    if (!isLoaded){
        return <div>
            <p>Загрузка...</p>
        </div>
    }
    else{
        return <div className="dishes">
            {dishes.map(item=>{
                return <div className="dish" key={item.id}>
                    <Link to={{pathname:`./${item.id}`, }}><h3>{item.name}</h3></Link>
                    <img src={item.img_url} alt='photo'/>
                    
                </div>
            })}
        </div>
    }
}

export default dishes