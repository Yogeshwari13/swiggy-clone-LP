import {React,useState} from 'react'
import "./Body.css";
import {CDN_URL} from "./../../utils/constant"
import { MdStars } from "react-icons/md";

const url = CDN_URL;

function Card({imgId , name , rating , cuisines ,locality}) {
  const [count, setCount] = useState(0);
  const handleClickAdd = ()=>{
    setCount(count+1);
    if(count >= 10){
      setCount(10)
    }
    console.log(count);
}
const handleClickRemove = ()=>{
  setCount(count-1); 
  console.log(count);
}
  return (
    <div className='food-card'>
        <img className='res-img' src={url + imgId}></img>
        <div className='card-text'>
        <h2>{name}</h2>
        <div className='star-rating'>
          <MdStars className='star-logo'/> 
          <h3 className='avg-rating'>{rating}</h3>
        </div>
        <h5>{cuisines.join(", ")}</h5>
        <h4>{locality}</h4>
        <h2>{count}</h2>
        <div>
          <button onClick={handleClickAdd}>Buy</button>
          <button onClick={handleClickRemove}>Remove</button>
        </div>
        </div>
    </div>
  )
}
export default Card