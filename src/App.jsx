import React from "react"
import Data from "./data.js"
import Nav from "./components/Nav.jsx"
import Card from "./components/Card.jsx"

export default function App(){
    let places = Data.map(place => {
        return(
            <div className="card-container-style">
                <Card 
                    place={place}
                />
            </div>
        )
    })
    
    return(
        <div>
            <Nav />
            {places}
        </div>
    )
}