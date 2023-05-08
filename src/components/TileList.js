import React from "react";
import Tile from "./Tile"
import { useState } from "react";

function TileList({hogs}){

        const [greased, setGreased] = useState(true)
        const [sortBy, setSortBy] = useState("weight")

        let filteredHogs=[...hogs].filter(el => {
            if((el.greased === greased) || (greased==="All")) {return true;}
            else {return false;}
        })
        .sort((a,b) => {
            if(sortBy=== "weight"){return a.weight - b.weight}
            else if(sortBy === "name"){return a.name.localeCompare(b.name)}
                
        })

        function handleClick(){
            setGreased(prev => !prev)
            console.log("greased is " + greased)
        }

        function handleSortClick(){
            if(sortBy === "weight"){
                setSortBy("name")
            }
            else if(sortBy === "name"){
                setSortBy("weight")
            }
            else {console.log("no sort criteria")}
        }

        const hogsList = filteredHogs.map((hog) => {
            //{console.log("in map function")}
            return <Tile key={hog.name}  name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} medal={hog["highest medal achieved"]} image={hog.image}/>
        })
        //console.log(hogsList)
    return(
        <div className="ui grid container">
            <button onClick={() => handleClick()}>{greased === true? "Show Ungreased" : "Show Greased"}</button>
            <button onClick={() => handleSortClick()}>{sortBy === "name"? "Sort by Weight" : "Sort By Name"}</button>
            <br></br>
			
            {hogsList}

        </div>
    )

}






export default TileList;