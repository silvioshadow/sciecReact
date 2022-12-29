import React,{ useEffect, useState } from "react";
import Banner1 from '../assets/banner1.png'
import Banner2 from '../assets/banner2.jpg'
import './Banner.css'

function Banner(){
   return(
   <img className="imgBanner" src={Banner1}/>
   )
}
export default Banner;