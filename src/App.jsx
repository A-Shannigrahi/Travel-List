

import React from "react"
import Navbar from "./components/Navbar"
import "./App.css"
import data from "./data"
import Cards from "./components/Cards"
export default function App(){

  const carddata=data.map(item => {return <Cards key = {item.id} item={item}/> } )
     
   return (<div><Navbar/> <div className="mainc">{carddata}  </div>  </div>)
}