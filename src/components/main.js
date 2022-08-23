import React from "react"
import grid from"./grid.png"

export default function main(){
    return(
        <section className="main-content">
            <img src={grid} alt="grid" className="main-grid" />
                <h1 className="main-title">ONLINE EXPERIENCES</h1>
                <p className="main-text">Join unique interactive activites led by  <br />
                    one-of-a-kind hosts-all without Leaving home.
                </p>
        </section>
    )
}