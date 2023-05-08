import React from "react";
import { useState } from "react";

function Tile({ name, specialty, greased, weight, medal, image}){

    const [selected, setSelected] = useState("none")
    const [hidden, setHidden] = useState("block")

    function handleClick(){
        console.log("clicked")
        setSelected(selected => {
            if (selected === "none"){
                return("block")
            }
            else if(selected==="block"){
                return("none")
            }
        })
    }

    function handleHideClick(){
        setHidden(hidden => {
            if (hidden === "none"){
                return("block")
            }
            else if(hidden==="block"){
                return("none")
            }
        })
    }

return(
    <div className="pigTile" onClick={() => handleClick()} style={{display: hidden}}>
        <h3>{name}</h3>
        <p style={{display: selected}}>{specialty}</p>
        <p style={{display: selected}}>{greased? "This pig is greased":"This pig is lacking grease"}</p>
        <p style={{display: selected}}>{weight}</p>
        <p style={{display: selected}}>Highest Medal Achieved: {medal}</p>
        <img src={image} className="ui eight wide column"></img>
        <button onClick={() => handleHideClick()}>Hide Hog</button>
    </div>
)
}








export default Tile;