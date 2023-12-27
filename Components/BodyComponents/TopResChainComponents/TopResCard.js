import {React,useState} from 'react'
import "../Body.css";
import {CDN_URL} from "../../../utils/constant"
import { MdStars } from "react-icons/md";

const url = CDN_URL;

function TopResCard({imgId , name , rating}) {
  return (
    <div className='carousel-card'>
        <img className='carousel-res-img' src={url + imgId}></img>
        <div className='card-text'>
        <h3>{name}</h3>
        <div className='star-rating'>
          <MdStars className='star-logo'/> 
          <h3 className='avg-rating'>{rating}</h3>
        </div>
        </div>
    </div>
  )
}

export default TopResCard