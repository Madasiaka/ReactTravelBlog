import React from "react"
import Navbar from "./components/Navbar"
import data from "./data"
import Card from "./components/Card"

export default function App(){
    console.log(data)
    const cards = data.map(item =>
    {
        return<Card
            key={item.id}
            item={item} />
        
    })
    return(
        <div>
            <Navbar />
            <section>
                {cards}
            </section>
        </div>
    )
}