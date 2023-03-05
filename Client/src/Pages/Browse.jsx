import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import "./Pages.css"

function Browse() {
    const [query, setQuery] = useState("");
    const [dish, setDish] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${query}`)
    }
    function getData() {
        useEffect(() => {
            Axios.get("http://localhost:5001/dishes/find/" + query).then((response) => {
                setDish(response.data)
            })
        }, [])
    }

    return (
        <div className='browse'>

            <div className="title">
                <h1>Explore thousands of unique and interesting dishes and share your opinions!</h1>
                <form id="form" onSubmit={getData()}>
                    <button>Search</button>
                    <input type="text" id="query" name="name" placeholder="Search..." onChange={(e) => setQuery(e.target.value)} />
                </form>
            </div>
            <div className='result'>
                {dish.map((dish) => {
                    return (
                        <div>
                            <h1>{dish.name}<br />{dish.upvotes}</h1>
                            <p>{dish.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Browse