import Card from "./Card"
import "./Body.css";
import resList from "../../utils/mockData";
import { useEffect, useState } from "react";
import {GET_RES_URL} from "../../utils/constant"

export default Body = () => {

    const [listOfRestaurant , setListOfRestaurant] = useState(resList);

    useEffect( ()  =>{
        const fetchData = async() => {
            try{
                const getDataProm = await fetch(GET_RES_URL);
                const data = await getDataProm.json();
                console.log(data);
                console.log(data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
                
                setListOfRestaurant(data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
            }
            catch(err){
                console.log(err);
            }
        }
           
         fetchData();   
        
        },[listOfRestaurant]);


    return (
        <>
            <div 
                className="search">
                <input placeholder="search here..."></input>
                <button 
                    className="filter-btn" 
                    onClick={()=> {
                        const filtered = listOfRestaurant.filter
                        (
                            (res) => res.info.avgRating > 4
                        );
                        setListOfRestaurant(filtered);
                    }}
                >
                    Get Top Rated Restaurant
                </button>
            </div>

            <div className="food-container">
                {
                    listOfRestaurant.map( (restaurant) => (
                        
                        <Card key={restaurant.info.id} imgId={restaurant.info.cloudinaryImageId} name={restaurant.info.name}  rating={restaurant.info.rating} cuisines={restaurant.info.cuisines}  edt={restaurant.info.edt}  locality={restaurant.info.locality}/>
                    ))
                    
                }
            </div>
        </>
    )
}


