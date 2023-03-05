import React from 'react'
import "./Pages.css"
import Titi from "./Titi.jpg"

function About() {
    return (
        <div className='about'>
            <h1 className="title">About Consumptions.</h1>
            <p id='about-1'>
                Consumptions is a fun little website that I made back in February 10, 2023.It was a small project to challenge myself and maybe add to my portfolio. You can visit the page on <a href="https://github.com/MrMushroomSharp/Consumptions.net" target="_blank">Github</a>. After
            </p>

            <h2>My name is Titi!</h2>
            <div id="description-cont">
                <p> <img src={Titi} width="250" height="250" id="description" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iusto deserunt fuga eos amet quam blanditiis expedita, tenetur vero sunt vitae consequuntur? Consequatur culpa sit at voluptatibus! Et, vero aut.
                </p>
            </div>

            <h2><strong>I'm In Your Walls</strong></h2>

        </div>
    )
}

export default About