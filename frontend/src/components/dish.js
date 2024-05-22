import React from "react";
import axios from "axios";
import  { Link, useLocation, useParams, Navigate } from "react-router-dom";

function dish(props){
    let [isLoaded, setisLoaded] = React.useState(false)
    let [dish, setDish] = React.useState({})
    const params = useParams()

    function getDish(){
        axios.get(`http://127.0.0.1:8000/food/api/dishes/${params.dishid}`)
        .then(resp=>{
            console.log(resp.data)
            setDish(resp.data)
            setisLoaded(true)
        })
        .catch(resp=>{
            setisLoaded(true)
        })
    }
    React.useEffect(()=>{
        getDish()
        return (()=>{})
    }, [])

    if (!isLoaded){
        return (<div><p>Загрузка...</p></div>)
    }
    if (Object.keys(dish).length ===0 ){
        return(<div><p>Такого блюда не существует!</p></div>)
    }
    return(<div>
        <h2>{dish.dish.name}</h2>
        <img src={dish.dish.img_url} alt='photo'/>
        <ul>
            {dish.ingridients.map(item=>{
                return(<li key={item.id}>
                    {item.ingredient.name} {item.quantity}
                </li>)
            })}
        </ul>
        <p>{dish.dish.recipe}</p>
    </div>)
}

export default dish