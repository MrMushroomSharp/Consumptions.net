import React from 'react'
import "./Pages.css"
import Titi from "./Titi.jpg"

function About() {
    return (
        <div className='about'>
            <h1 className="title">About Me.</h1>

            <h2>Who am I ?</h2>
            <img src={Titi} width="250" height="250" />
            <h2>My name is Titi!</h2>
            <h2><strong>I'm In Your Walls</strong></h2>

        </div>
    )
}

export default About