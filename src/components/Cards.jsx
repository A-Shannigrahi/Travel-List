import React from "react"
import iconl from "./location.png"


export default function Cards(props)
{
    
  
   return ( <div className="cardContent">  
      
      <div class="first"><img className="fimg" src={props.item.imageUrl}  /></div>
      
<div className="text">
      <div className="firstline">
      <img src={iconl} className="simg" />
      <h3>{props.item.location} </h3>
      <p><a href={props.item.googleMapsUrl}>View on Google Map</a></p>
      </div>

      <h2>{props.item.title}</h2>
      

      <p>{props.item.startDate} - {props.item.endDate}</p>

      <p>{props.item.description}</p>
</div>
   



                     
                    
                    
                    
                    
                    
                    
      
      
      </div>
   
   
   )}
