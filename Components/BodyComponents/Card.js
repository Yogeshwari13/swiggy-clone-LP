import React from 'react'
import "./Body.css";
import {CDN_URL} from "./../../utils/constant"


const url = CDN_URL;

function Card({imgId , name , rating , cuisines , edt , locality}) {
  return (
    <div className='food-card'>
        <img className='res-img' src={url + imgId}></img>
        <h2>{name}</h2>
        <h3>{rating}</h3>
        <h3>{cuisines}</h3>
        <h3>{edt}</h3>
        <h3>{locality}</h3>
    </div>
  )
}
export default Card