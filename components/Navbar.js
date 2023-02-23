import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){
    return(
        <nav className="nav">
        <a href="./">
            <FontAwesomeIcon icon={faEarth} color="white" />
            <span>my travel journal </span>
        </a>
        </nav>
    )
}