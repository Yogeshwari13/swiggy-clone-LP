import Card from "./Card"
import "./Body.css";
import resList from "../../utils/mockData";
import { useEffect, useState } from "react";
import {GET_RES_URL} from "../../utils/constant"
import Shimmer from "./Shimmer";

export default Body = () => {

    const [listOfRestaurant , setListOfRestaurant] = useState([]);
    const [filteredRestaurant , setfilteredRestaurant] = useState([]);
    const [searchText , setsearchText] = useState("");

    useEffect( ()  =>{
        const fetchData = async() => {
            try{
                const getDataProm = await fetch(GET_RES_URL);
                const data = await getDataProm.json();
                console.log(data);
                console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
                
                setListOfRestaurant(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
                setfilteredRestaurant(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            }
            catch(err){
                console.log(err);
            }
        }
           
         fetchData();   
        
        },[]);

        //Conditional rendering
    if(listOfRestaurant.length===0){
        return <Shimmer/>
    }
    return (
        <>
        <h2>Restaurants with online food delivery</h2>
            <div 
                className="search">
                <input placeholder="search here..." value={searchText} 
                onChange={(e)=>{
                    setsearchText(e.target.value);
                }}>

                </input>
                <button className="filter-btn" onClick={()=>{
                  
                    const filteredNames = listOfRestaurant.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setfilteredRestaurant(filteredNames);
                }}>Search by Name</button>
                <button 
                    className="filter-btn" 
                    onClick={()=> {
                        const filtered = listOfRestaurant.filter
                        (
                            (res) => {
                                const rating = searchText;
                                return res.info.avgRating > rating
                            }
                        );
                        setfilteredRestaurant(filtered);
                    }}
                >
                    Get Top Rated Restaurant
                </button>
            </div>

            <div className="food-container">
                {
                    filteredRestaurant.map( (restaurant) => (
                        
                        <Card key={restaurant.info.id} imgId={restaurant.info.cloudinaryImageId} name={restaurant.info.name}  rating={restaurant.info.avgRating} cuisines={restaurant.info.cuisines}  locality={restaurant.info.locality}/>
                    ))
                    
                }
            </div>
        </>
    )
}


