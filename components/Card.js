import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


export default function Card(props){
    
    return (
        <div className="card--overall">
            <img className="card--image" src={props.item.imageUrl} />
            <section className="card--words">
                <section className="card--header">
                    <FontAwesomeIcon className="spacePlease" icon={faLocationDot} color="red" size="sm"/>
                    <span> {props.item.location}</span> 
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a> 
                </section>
                <h3>{props.item.title} </h3>
                <span className="bold">{props.item.startDate} - {props.item.endDate} </span>
                <p>{props.item.description} </p>
            </section>
        </div>
    )
}