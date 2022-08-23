import React from "react"
import airlogo from "./airbnb-logo.png"

export default function navbar(){
    return(
        <nav className="navbar">
            <img src={airlogo} alt="logo" className="nav-logo" />
        </nav>
    )
}