import React from "react";
import axios from "axios";
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
        return(()=>{})
    }, [location.search])
    if (!isLoaded){
        return <div>
            <p>Загрузка...</p>
        </div>
    }
    else{
        return <div>
            {dishes.map(item=>{
                return <div key={item.id}>
                    <img src={item.img_url} alt='photo'/>
                    <p>{item.name}</p>
                    <p>{item.recipe}</p>
                </div>
            })}
        </div>
    }
}

export default dishes