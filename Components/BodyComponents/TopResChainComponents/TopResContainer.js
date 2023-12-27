import { useEffect, useState } from "react";
import Card from "../Card"
import {GET_RES_URL} from "../../../utils/constant"
import "../Body.css";
import Shimmer from "../Shimmer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TopResCard from "./TopResCard";


function TopResContainer() {
  const [listOfRestaurant , setListOfRestaurant] = useState([]);
  const [isClassActive, setClassActive] = useState(false);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  const handleButtonClick = () => {
    setClassActive(!isClassActive);
  };
  useEffect( ()  =>{
    const fetchData = async() => {
        try{
            const getDataProm = await fetch(GET_RES_URL);
            const data = await getDataProm.json();
            console.log(data);
            console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            
            setListOfRestaurant(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants); 
        }
        catch(err){
            console.log(err);
        }
    }
       
     fetchData();   
    
    },[]);
   
    const Carouselcard = listOfRestaurant.map( (restaurant) => (
                              
      <TopResCard key={restaurant.info.id} imgId={restaurant.info.cloudinaryImageId} name={restaurant.info.name}  rating={restaurant.info.avgRating}/>
  ));
  return listOfRestaurant===0 ? <Shimmer/> : (
          <>
         
            <h2>Top restaurant chains</h2>
          {/* don't apply any CSS so that it may not display */}
            <Carousel responsive={responsive} showDots={true}>
              {Carouselcard}
            </Carousel>
          </>
    
  )
}

export default TopResContainer